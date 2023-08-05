(()=>{"use strict";function n(n,e){const i=document.createElement("li");return i.setAttribute("id",n),i.innerHTML=e,i}function e(){const n=document.getElementById("contentContainer");return n.innerHTML='\n    <section id="menu">\n      <div class="hero">\n        <h1>Menu</h1>\n        <img src="./img/chef.svg" alt="Chef" class="icon" />\n      </div>\n    \n      <div class="menu-container">\n        <h1 class="menu-type">Appetizer</h1>\n        <div class="meals">\n          <div class="meal-box">\n            <h3>Chin Chin</h3>\n            <p>Crispy, sweet fried dough snacks</p>\n          </div>\n          <div class="meal-box">\n            <h3>Puff Puff</h3>\n            <p>Fluffy Deep-fried flour dough</p>\n          </div>\n          <div class="meal-box">\n            <h3>Suya</h3>\n            <p>Grilled spicy meat skewers</p>\n          </div>\n        </div>\n        \n        <h1 class="menu-type">Soups</h1>\n        <div class="meals">\n          <div class="meal-box">\n            <h3> Egusi Soup</h3>\n            <p>Ground melon seeds, spinach, and choice of meat or fish</p>\n          </div>\n          <div class="meal-box">\n            <h3>Efo Soup</h3>\n            <p>Savory soup with vegetables, stockfish, and dried fish</p>\n          </div>\n          <div class="meal-box">\n            <h3>Ogbono Soup</h3>\n            <p>Hearty soup with ground ogbono seeds and assorted meat or fish</p>\n          </div>\n        </div>\n        \n        <h1 class="menu-type">Swallow Dishes</h1>\n        <div class="meals">\n          <div class="meal-box">\n            <h3>Pounded Yam</h3>\n            <p>Smooth and stretchy yam served with soup</p>\n          </div>\n          <div class="meal-box">\n            <h3>Fufu</h3>\n            <p> Fluffy swallow made from cassava or yam</p>\n          </div>\n          <div class="meal-box">\n            <h3>Amala</h3>\n            <p>Dark swallow made from yam flour</p>\n          </div>\n        </div>\n        \n        <h1 class="menu-type">Drinks</h1>\n        <div class="meals">\n          <div class="meal-box">\n            <h3>Chapman</h3>\n            <p>Refreshing non-alcoholic cocktail with grenadine</p>\n          </div>\n          <div class="meal-box">\n            <h3>Zobo</h3>\n            <p>Hibiscus-infused drink with a hint of ginger and spices</p>\n          </div>\n          <div class="meal-box">\n            <h3>Palmwine</h3>\n            <p>Traditional drink made from fermented palm sap</p>\n          </div>\n        </div>\n      </div>\n    </section>\n  ',n}function i(){const n=document.getElementById("contentContainer");return n.innerHTML='\n    <section id="hero">\n      <div class="heading">\n        <h1> Experience the genuine taste of Nigeria\'s classic swallow dishes</h1>\n        <p>Delightful and affordable cuisine</p>\n        <div class="btn-container">\n          <button id="orderBtn">Order Now</button>\n        </div>\n      </div>\n\n      <div id="details">\n        <div class="address">\n          <span>\n            <img src="./img/address.svg" alt="Address" class="icon">\n          </span>\n          <div class="detail-info">\n            <p>123 Savory Street, Aromaland, Lagos, Nigeria</p>\n          </div>\n        </div>\n        <div class="hours">\n          <img src="./img/time1.svg" alt="Time" class="icon">\n          <div class="detail-info">\n            <p><span class="day">Mon-Thurs:</span>8am-8pm</p>\n            <p><span class="day">Fri-Sun:</span>8am-11pm</p>\n          </div>\n        </div>\n      </div>\n    </section>\n  ',document.getElementById("orderBtn").onclick=e,n}function s(){const n=document.getElementById("contentContainer");return n.innerHTML='\n    <section id="contact">\n      <div class="hero">\n        <h1>Contact Us<h1>\n      </div>\n      \n      <div class="contact-container">\n        <div id="cntDetail">\n          <div>\n            <span>\n              <img src="./img/address.svg" alt="" class="icon">\n            </span>\n            <p>123 Savory Street, Aromaland, Lagos, Nigeria</p>\n          </div>\n          <div>\n            <span>\n              <img src="./img/time1.svg" alt="" class="icon">\n            </span>\n            <p id="break">\n              <span><span class="day">Mon-Thurs:</span>8am-8pm</span>\n              <span><span class="day">Fri-Sun:</span>8am-11pm</span>\n            </p>\n          </div>\n          <div>\n            <span>\n            <img src="./img/phone.svg" alt="" class="icon">\n            </span>\n            <p>08059997903</p>\n          </div>\n          <div>\n            <span>\n              <img src="./img/mail.svg" alt="" class="icon">\n            </span>\n            <p>perfectlyRealEmail@notFake.com</p>\n          </div>\n        </div>\n        <form action="">\n          <h3>Message Us</h3>\n          <input type="text" name="" id="name" placeholder="Full name">\n          <input type="email" name="" id="email" placeholder="Email">\n          <Textarea id="message" rows="5" cols="20" placeholder="Type Your message..."></Textarea>\n          <button id="mssgBtn">Send</button>\n        </form>\n      </div>\n    </section>\n  ',n}(function(){const e=document.getElementById("content"),i=function(e){const i=document.createElement("header");i.setAttribute("id",e);const s=function(){const e=document.createElement("nav"),i=document.createElement("ul"),s=document.createElement("div");e.setAttribute("id","nav"),i.setAttribute("id","navLinks"),s.setAttribute("id","navContainer");const t=document.createElement("h1");t.textContent="elege",e.appendChild(t);const a=n("home","Home"),d=n("menu","Menu"),c=n("contact","Contact"),o=function(){const n=document.createElement("div");return n.setAttribute("id","hamburger"),n.insertAdjacentHTML("beforeend",'\n    <div class="line" id="line1"></div>\n    <div class="line" id="line2"></div>\n    <div class="line" id="line3"></div>\n  '),n}();return i.appendChild(a),i.appendChild(d),i.appendChild(c),s.appendChild(i),e.appendChild(s),e.appendChild(o),e}();return i.appendChild(s),i}("header");e.appendChild(i);const s=function(){const n=document.createElement("div");return n.innerHTML="",n.setAttribute("id","contentContainer"),n}();e.appendChild(s)})(),i(),function(){const n=document.getElementById("home"),t=document.getElementById("menu"),a=document.getElementById("contact");n.addEventListener("click",(function(){i()})),t.addEventListener("click",(function(){e(),navContainer.classList.remove("change"),hamburgerbtn.classList.remove("change")})),a.addEventListener("click",s)}(),function(){const n=document.getElementById("hamburger"),e=document.getElementById("navContainer");n.addEventListener("click",(function(){e.classList.toggle("change"),n.classList.toggle("change")}))}()})();