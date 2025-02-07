import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

export const DownloadReceipt = ({
  receiptId,
  description,
  budgetNumber,
  projectLeader,
  value,
  commission,
  total,
  paymentMethod,
}) => {
  const [pdfUrl, setPdfUrl] = useState("");

  const dividirTexto = (texto, maxCaracteresPorLinea) => {
    const palabras = texto.split(" ");
    let lineas = [];
    let lineaActual = "";

    palabras.forEach((palabra) => {
      if ((lineaActual + palabra).length > maxCaracteresPorLinea) {
        lineas.push(lineaActual);
        lineaActual = palabra;
      } else {
        lineaActual += (lineaActual ? " " : "") + palabra;
      }
    });

    if (lineaActual) {
      lineas.push(lineaActual);
    }

    return lineas;
  };

  const generateReceipt = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595, 842]);

      const textColor = rgb(0.2, 0.2, 0.2);
      const lineColor = rgb(0.4, 0.4, 0.4);
      const margin = 50;

      const logoUrl = `/cruzpatagonia.png`;
      const logoImageBytes = await fetch(logoUrl).then((res) =>
        res.arrayBuffer()
      );

      // Verificar el tipo de imagen (PNG o JPEG)
      const logo = await pdfDoc.embedPng(logoImageBytes);

      // Ajustar el tamaño del logo (más grande)
      const maxLogoWidth = 220; // Ancho máximo deseado para el logo
      const scaleFactor = maxLogoWidth / logo.width; // Factor de escala proporcional
      const logoDims = logo.scale(scaleFactor); // Escalar el logo

      // Dibujar el logo en el PDF (centrado horizontalmente)
      const logoX = page.getWidth() / 2 - logoDims.width / 2; // Centrar horizontalmente
      const logoY = page.getHeight() - margin - logoDims.height - 70; // Colocar en la parte superior
      page.drawImage(logo, {
        x: logoX,
        y: logoY,
        width: logoDims.width,
        height: logoDims.height,
      });

      // Número de recibo (a la derecha del logo, en chiquito)
      const numeroRecibo = `Nº recibo: ${receiptId}`; // Puedes cambiar este valor
      page.drawText(numeroRecibo, {
        x: logoX + logoDims.width + 10, // A la derecha del logo
        y: logoY + logoDims.height / 2 - 5, // Centrado verticalmente
        size: 8, // Tamaño de fuente pequeño
        color: textColor, // Gris oscuro
      });

      // Título del recibo
      const titulo = "Recibo de Construcción";
      page.drawText(titulo, {
        x: margin,
        y: page.getHeight() - margin - logoDims.height - 40, // Colocar debajo del logo
        size: 14, // Tamaño de fuente más grande para el título
        color: textColor, // Gris oscuro para el título
      });

      // Línea horizontal debajo del título
      page.drawLine({
        start: {
          x: margin,
          y: page.getHeight() - margin - logoDims.height - 50,
        },
        end: {
          x: page.getWidth() - margin,
          y: page.getHeight() - margin - logoDims.height - 50,
        },
        thickness: 1,
        color: lineColor, // Gris oscuro para la línea
      });

      // Detalles del recibo
      const detalles = [
        { campo: `Fecha`, valor: `25/10/2023`, conLinea: true }, // Línea debajo
        {
          campo: `Trabajo`,
          valor: `${description}`,
          conLinea: false,
        }, // Sin línea
        { campo: `Nº presupuesto`, valor: `${budgetNumber}`, conLinea: false }, // Sin línea
        { campo: `Realizado por`, valor: `${projectLeader}`, conLinea: false }, // Sin línea
        { campo: `Cargo de servicio`, valor: `$${value}`, conLinea: false }, // Línea debajo
        { campo: `Tarifa de gestión`, valor: `$${commission}`, conLinea: false },
        {
          campo: `Total`,
          valor: `$${total}`,
          conLinea: true,
        },
        {
          campo: `Método de pago`,
          valor: `${paymentMethod}`,
          conLinea: true,
        }, // Línea debajo
      ];

      // Escribir los detalles en el PDF
      let y = page.getHeight() - margin - logoDims.height - 80; // Coordenada Y inicial
      detalles.forEach(({ campo, valor, conLinea }) => {
        // Dibujar el nombre del campo (izquierda, pegado al renglón)
        page.drawText(campo, {
          x: margin,
          y: y - 2, // Ajuste para que el campo esté pegado al renglón
          size: 10, // Tamaño de fuente para los detalles
          color: textColor, // Gris oscuro para los campos
        });

        // Dibujar el valor del campo (derecha)
        const valorX = page.getWidth() - margin - 150; // Alineado a la derecha con un margen
        const lineasValor = dividirTexto(valor, 40); // Dividir el valor en líneas de 40 caracteres
        lineasValor.forEach((linea, index) => {
          page.drawText(linea, {
            x: valorX,
            y: y - index * 15, // Espaciado entre líneas del valor
            size: 10, // Tamaño de fuente para los detalles
            color: textColor, // Gris oscuro para los valores
          });
        });

        // Dibujar una línea recta solo si conLinea es true
        if (conLinea) {
          const lineaY = y - lineasValor.length * 15; // Ajustar la posición vertical de la línea
          page.drawLine({
            start: { x: margin, y: lineaY }, // Comienza en el margen izquierdo
            end: { x: page.getWidth() - margin, y: lineaY }, // Termina en el margen derecho
            thickness: 1,
            color: lineColor, // Gris oscuro para la línea
          });
        }

        // Ajustar la coordenada Y para el siguiente campo (con mayor espaciado vertical)
        y = y - lineasValor.length * 15 - (conLinea ? 45 : 20); // Espaciado dinámico
      });

      // Guardar el PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      // Descargar automáticamente el PDF
      saveAs(blob, "recibo-construccion.pdf");
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    }
  };

  return (
    <button
      className="px-2 py-1 rounded-full bg-sky-600 font-medium text-slate-200 transition-all duration-200 hover:bg-sky-500"
      onClick={generateReceipt}
    >
      Generar Recibo
    </button>
  );
};
