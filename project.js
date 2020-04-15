
 const ul = document.querySelector('.list');
 const ulList = document.querySelector('.list li');
 const button = document.querySelector('.button-btn');

 //toggle bar;
 let ulToggle = false;
   button.addEventListener ('click', () => {
       if (ulToggle == false) {
           ul.style.visibility = "visible";
           ul.style.width = "140px";
           ul.style.opacity = "1";

           ulToggle = true;

       } 
       else if (ulToggle == true) {
        ul.style.visibility = "hidden";

           ulToggle = false;
       }
   });

   //main image slide
   const Project1 = function (collectImg, imgAll) {
       this.collectImg = collectImg;
       this.imgAll = imgAll;
       this.active = "";
       this.imgAllIndex = 1;
       this.slide();
   };

     Project1.prototype.slide = function () {
         const current = this.imgAllIndex % this.imgAll.length;
         const currentActive = this.imgAll[current];
         this.collectImg.append(currentActive);
         if (this.imgAllIndex) {
             this.active = currentActive;
             this.imgAllIndex ++;
         };
         setTimeout(()=>this.slide(), 2000);
     };
   document.addEventListener('DOMContentLoaded', () => {
       const collectImg = document.querySelector('.collect-img1');
       const imgAll = document.querySelectorAll('.collect-img1 img');
       new Project1(collectImg, imgAll);
   });

   const Project2 = function (collectImg, imgAll) {
    this.collectImg = collectImg;
    this.imgAll = imgAll;
    this.active = "";
    this.imgAllIndex = 1;
    this.slide();
};

  Project2.prototype.slide = function () {
      const current = this.imgAllIndex % this.imgAll.length;
      const currentActive = this.imgAll[current];
      this.collectImg.append(currentActive);
      if (this.imgAllIndex) {
          this.active = currentActive;
          this.imgAllIndex ++;
      };

      setTimeout(()=>this.slide(), 2000);
  };
document.addEventListener('DOMContentLoaded', () => {
    const collectImg = document.querySelector('.collect-img2');
    const imgAll = document.querySelectorAll('.collect-img2 img');
    new Project2(collectImg, imgAll);
});
const Project3 = function (collectImg, imgAll) {
    this.collectImg = collectImg;
    this.imgAll = imgAll;
    this.active = "";
    this.imgAllIndex = 1;
    this.slide();
};

  Project3.prototype.slide = function () {
      const current = this.imgAllIndex % this.imgAll.length;
      const currentActive = this.imgAll[current];
      this.collectImg.append(currentActive);
      if (this.imgAllIndex) {
          this.active = currentActive;
          this.imgAllIndex ++;
      };
      setTimeout(()=>this.slide(), 2000);
  };
document.addEventListener('DOMContentLoaded', () => {
    const collectImg = document.querySelector('.collect-img3');
    const imgAll = document.querySelectorAll('.collect-img3 img');
    new Project3(collectImg, imgAll);
});