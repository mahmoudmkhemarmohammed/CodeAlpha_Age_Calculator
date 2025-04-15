let isArabic = false;

const calculateAge = () => {
  const birthdate = document.getElementById("birthdate").value;
  const resultBox = document.getElementById("result");

  if (!birthdate) {
    resultBox.textContent = isArabic
      ? "من فضلك أدخل تاريخ ميلاد صحيح."
      : "Please enter a valid birthdate.";
    resultBox.classList.remove("hidden");
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultBox.textContent = isArabic
    ? `عمرك هو ${years} سنة و ${months} شهر و ${days} يوم.`
    : `Your age is ${years} years, ${months} months, and ${days} days.`;

  resultBox.classList.remove("hidden");
}

const toggleLanguage = () => {
  isArabic = !isArabic;

  document.getElementById("title").textContent = isArabic ? "حاسبة العمر" : "Age Calculator";
  document.getElementById("subtext").textContent = isArabic
    ? "أدخل تاريخ ميلادك لمعرفة عمرك بدقة"
    : "Enter your birthdate to calculate your age accurately";
  document.getElementById("calcBtn").textContent = isArabic ? "احسب العمر" : "Calculate Age";
  document.getElementById("langBtn").textContent = isArabic ? "English" : "العربية";

  // Edite Diraction
  document.querySelector("html").setAttribute("lang", isArabic ? "ar" : "en");
  document.querySelector("body").style.direction = isArabic ? "rtl" : "ltr";
}
