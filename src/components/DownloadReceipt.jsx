import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

export const DownloadReceipt = ({
  receiptId,
  service,
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

      const logo = await pdfDoc.embedPng(logoImageBytes);

      const maxLogoWidth = 220;
      const scaleFactor = maxLogoWidth / logo.width;
      const logoDims = logo.scale(scaleFactor);

      const logoX = page.getWidth() / 2 - logoDims.width / 2;
      const logoY = page.getHeight() - margin - logoDims.height - 70;
      page.drawImage(logo, {
        x: logoX,
        y: logoY,
        width: logoDims.width,
        height: logoDims.height,
      });

      const numeroRecibo = `Nº recibo: ${receiptId}`;
      page.drawText(numeroRecibo, {
        x: logoX + logoDims.width + 10,
        y: logoY + logoDims.height / 2 - 5,
        size: 8,
        color: textColor,
      });

      const titulo = "Recibo de Construcción";
      page.drawText(titulo, {
        x: margin,
        y: page.getHeight() - margin - logoDims.height - 40,
        size: 14,
        color: textColor,
      });

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
        color: lineColor,
      });

      const detalles = [
        { campo: `Fecha`, valor: `25/10/2023`, conLinea: true },
        {
          campo: `Trabajo`,
          valor: `${service}`,
          conLinea: false,
        },
        { campo: `Nº presupuesto`, valor: `${budgetNumber}`, conLinea: false },
        { campo: `Realizado por`, valor: `${projectLeader}`, conLinea: false },
        { campo: `Cargo de servicio`, valor: `$${value}`, conLinea: false },
        {
          campo: `Tarifa de gestión`,
          valor: `$${commission}`,
          conLinea: false,
        },
        {
          campo: `Total`,
          valor: `$${total}`,
          conLinea: true,
        },
        {
          campo: `Método de pago`,
          valor: `${paymentMethod}`,
          conLinea: true,
        },
      ];

      let y = page.getHeight() - margin - logoDims.height - 80;
      detalles.forEach(({ campo, valor, conLinea }) => {
        page.drawText(campo, {
          x: margin,
          y: y - 2,
          size: 10,
          color: textColor,
        });

        const valorX = page.getWidth() - margin - 150;
        const lineasValor = dividirTexto(valor, 40);
        lineasValor.forEach((linea, index) => {
          page.drawText(linea, {
            x: valorX,
            y: y - index * 15,
            size: 10,
            color: textColor,
          });
        });

        if (conLinea) {
          const lineaY = y - lineasValor.length * 15;
          page.drawLine({
            start: { x: margin, y: lineaY },
            end: { x: page.getWidth() - margin, y: lineaY },
            thickness: 1,
            color: lineColor,
          });
        }

        y = y - lineasValor.length * 15 - (conLinea ? 45 : 20);
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

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
