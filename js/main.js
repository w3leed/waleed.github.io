var problems = [
  {
    img: "../images/help.jpeg",
    vid: "../video/helpp.mp4",
    question: "Domain مشكلة فى فتح ",
    answer: " ........................... على اللينك التالى واختيار نوع المشكلة من خلال الصوره الاتية وبنفس طرقه الفيديو كما فى الفيديو (help) اذا كانت المشكلة فى فتح الدومين سواء لا يوجد اسم للمستخدم او خطا فى تسجيل الدخول يرجى ارسال نموذج على ال ",
   
  },
  {
    img: "../images/slider1.png",
    vid: "../video/helpp.mp4",
    question: "                                       مشكلة عدم وجود ايقونه فينيكال ",
    answer: "فى حالة عدم وجود ايقونه فينيكال الرجاء التواصل مع كيرليس",
  },
  {
    img: "../images/saraff.jpeg",
    vid: "../video/lockop.mp4",
    question: "لا يمكن إلا للصراف الرئيسى الوصول إلى بيانات الموظفين الاخرين",
    answer: " Mcttd يجب عمل عمليه تحويل جزء للمبلغ   قبل الاغلاق من حساب التلر للخزنه الرئيسية من ",
  },
  {
    img: "../images/sarabeb.jpeg",
    vid: "../video/paas.mp4",
    question: "غير مسموح بحسابات غير النظام أو حسابات الصراف فى هذا النوع الفرعي من الحركات",
    answer: "أعمل اضافه لحساب الصراف  برقم الموظف ورقم الفرع التابع له  atca فى حالة عدم وجود حساب صراف الدخول على ",
  },
  // { img: "../images/5.jpg", question: "what is you gender", answer: "male" },
  {
    img: "../images/5.jpg",
    vid: "../video/changerole.mp4",
    question: "الصلاحيات لدى الموظف  ",
    answer: "  جب اختيار حسابات عملاء و ليس حسابات داخليه الإيداع",
  },
  {
    img: "../images/paass.png",
    vid: "../video/changepaass.mp4",
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





