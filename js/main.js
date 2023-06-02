var problems = [
  {
    img: "data:image/jpeg;base64,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",
    vid: "../video/helpp.mp4",
    question: "Domain مشكلة فى فتح ",
    answer: " ........................... على اللينك التالى واختيار نوع المشكلة من خلال الصوره الاتية وبنفس طرقه الفيديو كما فى الفيديو (help) اذا كانت المشكلة فى فتح الدومين سواء لا يوجد اسم للمستخدم او خطا فى تسجيل الدخول يرجى ارسال نموذج على ال ",
   
  },
  {
    img: "./images/slider1.png",
    vid: "../video/helpp.mp4",
    question: "                                       مشكلة عدم وجود ايقونه فينيكال ",
    answer: "فى حالة عدم وجود ايقونه فينيكال الرجاء التواصل مع كيرليس",
  },
  {
    img: "./images/saraff.jpeg",
    vid: "./video/lockop.mp4",
    question: "لا يمكن إلا للصراف الرئيسى الوصول إلى بيانات الموظفين الاخرين",
    answer: " Mcttd يجب عمل عمليه تحويل جزء للمبلغ   قبل الاغلاق من حساب التلر للخزنه الرئيسية من ",
  },
  {
    img: "./images/sarabeb.jpeg",
    vid: "./video/paas.mp4",
    question: "غير مسموح بحسابات غير النظام أو حسابات الصراف فى هذا النوع الفرعي من الحركات",
    answer: "أعمل اضافه لحساب الصراف  برقم الموظف ورقم الفرع التابع له  atca فى حالة عدم وجود حساب صراف الدخول على ",
  },
  // { img: "../images/5.jpg", question: "what is you gender", answer: "male" },
  {
    img: "./images/5.jpg",
    vid: "./video/changerole.mp4",
    question: "الصلاحيات لدى الموظف  ",
    answer: "  جب اختيار حسابات عملاء و ليس حسابات داخليه الإيداع",
  },
  {
    img: "./images/paass.png",
    vid: "./video/changepaass.mp4",
    question: "تغيير الرقم السرى",
    answer: "فى حاله وجود تغيير الرقم السر للمسخدم الخاص به يرجى عمل رقم سرى قوى خاص بالمستخدم ..................",
  },
];

function displayProblems() {
    var cartoona = ``;
    for (var i = 0; i < problems.length; i++) {
      cartoona += `
      <div class="col-md-3  mb-3">
                <div class="card-sl">
                    <div class="card-image ">
                        <img src=${problems[i].img} />
                    </div>                 
                    <div class="card-heading text-center  waleed2">
                        ${problems[i].question}
                    </div>
                    <div class="card-text waleed">
                        ${problems[i].answer}
                    </div>                 
                    <a  href="details.html?img=${problems[i].img}&vid=${problems[i].vid}&question=${problems[i].question}&answer=${problems[i].answer}"
                    class="card-button"> التفاصيــل</a>
                </div>
            </div>`;
    }
    document.getElementById("cardProblem").innerHTML = cartoona;
}

displayProblems();


function searchProducts(term) {
  var cartoona = ``;
  for (var i = 0; i < problems.length; i++) {
    if (
      problems[i].question.toLowerCase().includes(term.toLowerCase()) == true
    ) 
    {
      cartoona += `
      <div class="col-md-3  mb-3">
                <div class="card-sl">
                    <div class="card-image ">
                        <img src=${problems[i].img} />
                    </div>                 
                    <div class="card-heading text-center  waleed2">
                        ${problems[i].question}
                    </div>
                    <div class="card-text waleed">
                        ${problems[i].answer}
                    </div>                 
                    <a  href="details.html?img=${problems[i].img}&vid=${problems[i].vid}&question=${problems[i].question}&answer=${problems[i].answer}"
                    class="card-button"> التفاصيــل</a>
                </div>
            </div>`;
    }
    else{
      cartoona=`<p class="noproblem">لا يوجد مشكلة بهذا الاسم</p>`
    }
  }
  document.getElementById("cardProblem").innerHTML = cartoona;
}





