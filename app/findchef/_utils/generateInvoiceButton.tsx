"use client";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface GenerateInvoiceButtonProps {
  orderData: {
    _id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    date: string;
    notes: string;
    time: string;
    items: {
      id: string;
      name: string;
      description: string;
      price: number;
      ingredients: string[];
      menuImage: string;
      quantity: number;
    }[];
    totalCost: number;
    chefName: string;
    chefId: string;
    createdAt: string;
    updatedAt: string;
  };
}

const GenerateInvoiceButton = ({ orderData }: GenerateInvoiceButtonProps) => {
  console.log("butoi", orderData);

  const generateInvoice = () => {
    const doc = new jsPDF();

    // Add company name
    doc.setFontSize(20);
    doc.setTextColor("#9DCA30");
    doc.setFont("helvetica", "bold");
    doc.text("TKT", doc.internal.pageSize.getWidth() / 2, 20, {
      align: "center",
    });
    doc.setFontSize(12);
    doc.text("TheKitchenTable", doc.internal.pageSize.getWidth() / 2, 30, {
      align: "center",
    });

    // Add order details
    doc.setFontSize(10);
    doc.setTextColor("#000000");
    doc.setFont("helvetica", "normal");
    const lineHeight = 8;
    doc.text(`Order ID: ${orderData._id.slice(-7)}`, 15, 50);
    doc.text(`Customer: ${orderData.name}`, 15, 50 + lineHeight);
    doc.text(`Email: ${orderData.email}`, 15, 50 + lineHeight * 2);
    doc.text(`Phone: ${orderData.phone}`, 15, 50 + lineHeight * 3);
    doc.text(`Address: ${orderData.address}`, 15, 50 + lineHeight * 4);
    doc.text(`Date: ${orderData.date}`, 15, 50 + lineHeight * 5);
    doc.text(`Time: ${orderData.time}`, 15, 50 + lineHeight * 6);
    doc.text(`Chef: ${orderData.chefName}`, 15, 50 + lineHeight * 7);

    // Add table for items
    const tableColumn = ["Product", "Quantity", "Price"];
    const tableRows = orderData.items.map((item) => [
      item.name,
      item.quantity.toString(),
      `$${item.price.toFixed(2)}`,
    ]);

    (doc as any).autoTable({
      startY: 120,
      head: [tableColumn],
      body: tableRows,
      headStyles: { fillColor: "#9DCA30" },
    });

    // Add totals
    const finalY = (doc as any).lastAutoTable.finalY || 120;
    doc.text(`Total Cost: $${orderData.totalCost.toFixed(2)}`, 10, finalY + 10);

    // Add thank you message
    doc.setFontSize(12);
    doc.setTextColor("#9DCA30");
    doc.setFont("helvetica", "bold");
    doc.text(
      "Thank you for choosing TheKitchenTable! We hope you enjoy your culinary experience.",
      doc.internal.pageSize.getWidth() / 2,
      finalY + 30,
      { align: "center" }
    );

    doc.save("invoice.pdf");
  };

  return (
    <Button variant="outline" size="sm" onClick={generateInvoice}>
      <FileText className="h-4 w-4 mr-2" />
      Generate Invoice
    </Button>
  );
};

export default GenerateInvoiceButton;
