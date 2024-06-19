import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./BtnExtrair.css";

export default function BtnExtrair() {
    const handleExtract = async (event) => {
        event.preventDefault();  // Prevenir comportamento padrão de atualização da página

        const elements = document.querySelectorAll('.teste');
        if (elements.length === 0) {
            console.error('Nenhuma div com a classe "teste" encontrada!');
            return;
        }

        const doc = new jsPDF('p', 'pt', 'a4');
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        const imgWidth = pdfWidth - (2 * margin); // Largura da imagem considerando margens
        let currentY = margin;

        for (let i = 0; i < elements.length; i++) {
            const canvas = await html2canvas(elements[i]);
            const imgData = canvas.toDataURL('image/png');
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (currentY + imgHeight > pdfHeight - margin) {
                // Adiciona uma nova página se não houver espaço suficiente
                doc.addPage();
                currentY = margin;
            }

            // Adiciona a imagem à página PDF
            doc.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
            currentY += imgHeight + margin; // Atualiza a posição Y para a próxima imagem
        }

        doc.save('documento.pdf');
    };

    return (
        <div className="container-extrair">
            <button type="button" className="extrair" onClick={handleExtract}>Extrair para PDF</button>
        </div>
    );
}
