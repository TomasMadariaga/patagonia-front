import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

export const DownloadBudget = ({
  budgetNumber,
  client,
  address,
  service,
  description,
  value
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

  const generateBudget = async () => {
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
      const logoY = page.getHeight() - logoDims.height;
      page.drawImage(logo, {
        x: logoX,
        y: logoY,
        width: logoDims.width,
        height: logoDims.height,
      });

      const titulo = "Presupuesto Profesional";
      page.drawText(titulo, {
        x: margin,
        y: logoY ,
        size: 14,
        color: textColor,
      });

      page.drawLine({
        start: {
          x: margin,
          y: logoY - 10,
        },
        end: {
          x: page.getWidth() - margin,
          y: logoY - 10,
        },
        thickness: 1,
        color: lineColor,
      });

      const detalles = [
        { campo: `Nº Presupuesto`, valor: `${budgetNumber}`, conLinea: true },
        { campo: `Cliente`, valor: `${client.name} ${client.lastname}`, conLinea: false },
        { campo: `Dirección`, valor: `${address}`, conLinea: false },
        { campo: `Servicio`, valor: `${service}`, conLinea: false },
        { campo: `Descripción`, valor: `${description}`, conLinea: false },
        { campo: `Valor`, valor: `$${value}`, conLinea: true },
      ];

      let y = logoY - 40;

      const anchoColumnaCampos = 100;
      const anchoColumnaValores = page.getWidth() - margin * 2 - anchoColumnaCampos;

      detalles.forEach(({ campo, valor, conLinea }) => {
        page.drawText(campo, {
          x: margin,
          y: y - 2,
          size: 10,
          color: textColor,
        });

        const valorX = margin + anchoColumnaCampos + 10;
        const lineasValor = dividirTexto(valor, 80);
        lineasValor.forEach((linea, index) => {
          page.drawText(linea, {
            x: valorX,
            y: y - index * 15,
            size: 10,
            color: textColor,
            maxWidth: anchoColumnaValores - 10,
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

        y = y - lineasValor.length * 15 - (conLinea ? 30 : 15);
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      saveAs(blob, "presupuesto-profesional.pdf");
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    }
  };

  return (
    <button
      className="w-full px-3 py-2 rounded-full bg-sky-600 font-medium text-slate-200 transition-all duration-200 hover:bg-sky-500 flex items-center justify-center"
      onClick={generateBudget}
    >
      Detalles
    </button>
  );
};