window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    console.log(invoice);
    console.log(window);

    html2pdf().from(invoice).set(opt).save();
  });
};
