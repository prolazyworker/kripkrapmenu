<template>
    <div class="menu-main">
        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
            <div class="top">
                <h1 class="menu-title">Pije</h1>
                <img class='logo' src="@/assets/krip-krap.png" alt="">
            </div>
            <div class="menu">
                <div class="flex-row menu-option">
                <p>Kafe/machiato<img src="@/assets/menu-items/coffe.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">......................................</span></p><span>0.70€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Kapuçino<img src="@/assets/menu-items/cappuccino.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..............................................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Frape<img id="frappe" src="@/assets/menu-items/frappe.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..................................................</span></p><span>2.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Çokollatë e nxehtë<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">...............................</span></p><span>1.50€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Kakao<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..................................................</span></p><span>4.99€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Ujë natyral ose i gazuar<img id="water" src="@/assets/menu-items/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Çaj i ftohtë<img id="iceTea" src="@/assets/menu-items/ice-tea.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Fanta<img id="fanta" src="@/assets/menu-items/fanta.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Coca Cola<img id="cola" src="@/assets/menu-items/cola.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.............................................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Bravo<img id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">(me shije të ndryshme)</span>
                </div>
                <div class="flex-row menu-option">
                <p>Redbull<img id="redbull" src="@/assets/menu-items/redbull.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.................................................</span></p><span>1.00€</span>
                </div>
            </div>
            <div class="bottom">
                <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
                <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
            </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
            <div class="top">
                <h1 class="menu-title">Toppings</h1>
                <img class='logo' src="@/assets/krip-krap.png" alt="">
            </div>
            <div class="menu">
                <div class="flex-column">
                <h2 class="submenu-title">FRUTA</h2>
                <div class="flex-row topping-main">
                    <div class="flex-column topping">
                    <img :src="topping_1" alt="Topping">
                    <p>Shegë</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_2" alt="Topping">
                    <p>Kumbull</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_3" alt="Topping">
                    <p>Luleshtrydhe</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_4" alt="Topping">
                    <p>Banane</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_5" alt="Topping">
                    <p>Boronicë</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_6" alt="Topping">
                    <p>Qërshi</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_7" alt="Topping">
                    <p>Rrush</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_8" alt="Topping">
                    <p>Dardhë</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_9" alt="Topping">
                    <p>Pjepër</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_10" alt="Topping">
                    <p>Ananas</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_11" alt="Topping">
                    <p>Mjedër</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_12" alt="Topping">
                    <p>Manaferra</p>
                    </div>
                    <div class="flex-column topping">
                    <img :src="topping_13" alt="Topping">
                    <p>Kiwi</p>
                    </div>
                </div>

                <h2 class="submenu-title">RECEL / JAM</h2>
                <div class="flex-row jams-main">
                    <div class="flex-column jam">
                    <img :src="jam_1" alt="Jam">
                    <p>Qërshi</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_2" alt="Jam">
                    <p>Boronicë e Kuqe</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_3" alt="Jam">
                    <p>Shalqi</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_4" alt="Jam">
                    <p>Pjeshkë</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_5" alt="Jam">
                    <p>Luleshtrydhe</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_6" alt="Jam">
                    <p>Mjedër</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_7" alt="Jam">
                    <p>Fik</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_8" alt="Jam">
                    <p>Manaferrë</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_9" alt="Jam">
                    <p>Kumbull</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_10" alt="Jam">
                    <p>Boronicë e zezë</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_11" alt="Jam">
                    <p>Amarena</p>
                    </div>
                    <div class="flex-column jam">
                    <img :src="jam_12" alt="Jam">
                    <p>Fruit Pasion</p>
                    </div>
                </div>

                <h2 class="submenu-title">SALSA / SAUCES</h2>
                <div class="flex-row sauces-main">
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Nutella</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Rafaello</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Lacta</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Grisbi Lemon</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Bacio Perugina</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Çokollatë e Bardhë</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Çokollatë Zezë</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Kinder Bueno</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Oreo</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Otto Biscotto</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Snickers</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Krem Pistak</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Karamel</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Cookies</p>
                    </div>
                    <div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Gjalp Kikiriku</p>
                    </div><div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Unicorn</p>
                    </div><div class="flex-column sauce">
                    <img :src="sauce_1" alt="Sauce">
                    <p>Bubblegum</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="bottom">
                <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
                <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
            </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
            <div class="top">
                <h1 class="menu-title">Ice Cream</h1>
                <img class='logo' src="@/assets/krip-krap.png" alt="">
            </div>
            <div class="menu">
                <div class="ice-option">
                <div class="flex-column">
                    <h5 class="ice-price">1/2 PORCION</h5>
                    <p style="text-align: center;">0.70€</p>
                </div>
                <div class="flex-column">
                    <h5 class="ice-price">1 PORCION</h5>
                    <p style="text-align: center;">1.50€</p>
                </div>
                </div>
                <div class="ice-option">
                <div class="flex-column">
                    <h5 class="ice-price">KUPA SPECIALE</h5>
                    <p style="text-align: center; font-size: 24px;">2.00€</p>
                </div>
                <div class="flex-column">
                    <div class="additional-prices">
                    <div class="flex-row" style="justify-content: space-between;">
                        <p>Vasketa 500gr</p> <p>3.50€</p>
                    </div>
                    <div class="flex-row" style="justify-content: space-between;">
                        <p>Vasketa 1kg </p> <p>7.00€</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="bottom">
                <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
                <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
            </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
            <div class="top">
                <h1 class="menu-title">Waffles</h1>
                <img class='logo' src="@/assets/krip-krap.png" alt="">
            </div>
            <div class="menu">
                <div class="flex-row menu-option">
                <p>Waffles Nutella<img src="@/assets/menu-items/coffe.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.....................................</span></p><span>0.70€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Kapuçino<img src="@/assets/menu-items/cappuccino.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..............................................</span></p><span>1.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Frape<img id="frappe" src="@/assets/menu-items/frappe.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..................................................</span></p><span>2.00€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Çokollatë e nxehtë<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">...............................</span></p><span>1.50€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Kakao<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..................................................</span></p><span>4.99€</span>
                </div>
                <div class="flex-row menu-option">
                <p>Ujë natyral ose i gazuar<img id="water" src="@/assets/menu-items/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........................</span></p><span>1.00€</span>
                </div>
                <div class="ul-options">
                <p>
                    Një shije/topping 50 cent e përfshirë në çmim
                </p>
                <p>
                    Extra mix fruta, pistacchio, kinder, raffaello +1€
                    </p>
                <p>
                    Extra akullore +1€
                </p>
                <p>
                    Extra frozen Yogurt +1€
                </p>
                </div>
            </div>
        <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
        </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
        <div class="top">
            <h1 class="menu-title">Pancakes</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
        </div>

        <div class="flex-row">
            <div class="menu ">
            <div class="flex-row menu-option">
                <p>Shurup panje<img src="@/assets/menu-items/coffe.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">........................................</span></p><span>0.70€</span>
            </div>
            <div class="flex-row menu-option">
                <p>Panna Nutella<img src="@/assets/menu-items/cappuccino.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">.......................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
                <p>Mix fruta të kuqe, mjaltë<img id="frappe" src="@/assets/menu-items/frappe.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">......................</span></p>
                <span>2.00€</span>
                <span class="alternativeText">luleshtrydhe, banane</span>
            </div>
            <div class="flex-row menu-option">
                <p>Frozen yogurt, reçel manaferre<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">.............</span></p><span>1.50€</span>
                <span class="alternativeText">mix fruta & çokollatë</span>
            </div>
            <div class="flex-row menu-option">
                <p>Pancakes krem maskarpone<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">.................</span></p><span>4.99€</span>
                <span class="alternativeText">stracciatella, çokollatë e shkrirë & arra</span>
            </div>
            <div class="flex-row menu-option">
                <p>Ujë natyral ose i gazuar<img id="water" src="@/assets/menu-items/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........................</span></p><span>1.00€</span>
                <span class="alternativeText">ruta të freskëta</span>
                
            </div>
            <div class="flex-row menu-option">
                <p>Çaj i ftohtë<img id="iceTea" src="@/assets/menu-items/ice-tea.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
                <span class="alternativeText">cheesecake dhe fruta të thata</span>
            </div>
            </div>
            <div class="ul-options">
                <p>
                Extra toppings +0.50€ 
                </p>
                <p>
                Extra mix fruta, pistachio, kinder, raffaello + 1€
                </p>
                <p>
                Extra akullore +1€
                </p>
                <p>
                Extra frozen Yogurt +1€
                </p>
            </div>     
            </div>
        <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>       
        </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
        <div class="top">
            <h1 class="menu-title">Crepes</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
        </div>

        <div class="menu">
            <div class="flex-row crepes-main">
            <div class="flex-column crepes">
                <h4>TË ËMBLA</h4>
                <div class="flex-row menu-option">
                <p>Strawberry Love<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Nutella, luleshtrydhe & bajame</span>
                </div>  
                <div class="flex-row menu-option">
                <p>Banana Love<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Nutella, banane, lajthi të karamelizuara</span>
                </div>
                <div class="flex-row menu-option">
                <p>Exotic<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...................................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Çokollatë e bardhë, ananas, arrë kokosi</span>
                </div>
                <div class="flex-row menu-option">
                <p>Fro-yo crepe<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Nutella, luleshtrydhe, frozen yogurt</span>
                </div>

            </div>
            <div class="flex-column crepes">
                <h4>TË KRIPURA</h4>

                <div class="flex-row menu-option">
                <p>El Mexico<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..............................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Sallam pikant, gouda, philadelfia, misër, speca, tabasko</span>
                </div>  
                <div class="flex-row menu-option">
                <p>Creme alla creme<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Gouda, philadelphia, proshutë, kërpudha</span>
                </div>
                <div class="flex-row menu-option">
                <p>Nani<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">......................................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Philadelphia, proshutë, gouda, ham</span>
                </div>
                <div class="flex-row menu-option">
                <p>Chicken Philadelphia<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.............................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Proshutë pule, gouda, philadelphia, domate</span>
                </div>
                <div class="flex-row menu-option">
                <p>Vegetarian<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................................</span></p>
                <span>1.00€</span>
                <span class="alternativeText">Perime, gouda, philadelphia, misër</span>
                </div>
            </div>
            </div>

            <div class="ul-options">
            <p>
                Extra toppings +0.50€ 
            </p>
            <p>
                Extra mix fruta, pistachio, kinder, raffaello + 1€
            </p>
            <p>
                Extra akullore +1€
            </p>
            <p>
                Extra frozen Yogurt +1€
            </p>
            </div>
        </div>
        <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
        </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
            <div class="top">
                <h1 class="menu-title">Juices</h1>
                <img class='logo' src="@/assets/krip-krap.png" alt="">
            </div>

            <div class="menu">
                <div class="menu-1">
                <div class="flex-row menu-option">
                    <p>Lëng portokall, karrotë<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..........................</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Lëng molle, luleshtrydhe, panxhar<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..........</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Lëng portokall, ananas, karrotë<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..............</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Lëng molle, luleshtrydhe, ananas<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...........</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Lëng molle, luleshtrydhe, ananas<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...........</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Lëng mix fruta stine<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..............................</span></p>
                    <span>1.00€</span>
                </div>  
                </div>
                <h1 id="smoothies">Smoothies / Milkshake</h1>
                <div class="menu-2">
                <div class="flex-row menu-option">
                    <p>Smoothie banane, luleshtrydhe, froyo<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Smoothie fruta mali dhe froyo<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...............</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Smoothie me mix frutash & froyo<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..........</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Milkshake banana, akullore<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................</span></p>
                    <span>1.00€</span>
                </div>  
                <div class="flex-row menu-option">
                    <p>Milkshake strawberry, akullore<img class="item-hover" id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...............</span></p>
                    <span>1.00€</span>
                </div>  
                </div>
                <div class="ul-options-2">
                <p>Disa shije/toppings mund të jenë sezonale</p>
                </div>
            </div>

            <div class="bottom">
                <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
                <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        isLoaded: false,

        topping_1: require('../assets/menu-toppings/Asset 1.svg'),
        topping_2: require('../assets/menu-toppings/Asset 3.svg'),
        topping_3: require('../assets/menu-toppings/Asset 4.svg'),
        topping_4: require('../assets/menu-toppings/Asset 5.svg'),
        topping_5: require('../assets/menu-toppings/Asset 7.svg'),
        topping_6: require('../assets/menu-toppings/Asset 8.svg'),
        topping_7: require('../assets/menu-toppings/Asset 11.svg'),
        topping_8: require('../assets/menu-toppings/Asset 12.svg'),
        topping_9: require('../assets/menu-toppings/Asset 13.svg'),
        topping_10: require('../assets/menu-toppings/Asset 16.svg'),
        topping_11: require('../assets/menu-toppings/Asset 17.svg'),
        topping_12: require('../assets/menu-toppings/Asset 18.svg'),
        topping_13: require('../assets/menu-toppings/Asset 19.svg'),

        jam_1: require('../assets/menu-toppings/Asset 21.svg'),
        jam_2: require('../assets/menu-toppings/Asset 21.svg'),
        jam_3: require('../assets/menu-toppings/Asset 22.svg'),
        jam_4: require('../assets/menu-toppings/Asset 24.svg'),
        jam_5: require('../assets/menu-toppings/Asset 25.svg'),
        jam_6: require('../assets/menu-toppings/Asset 26.svg'),
        jam_7: require('../assets/menu-toppings/Asset 27.svg'),
        jam_8: require('../assets/menu-toppings/Asset 28.svg'),
        jam_9: require('../assets/menu-toppings/Asset 29.svg'),
        jam_10: require('../assets/menu-toppings/Asset 31.svg'),
        jam_11: require('../assets/menu-toppings/Asset 31.svg'),
        jam_12: require('../assets/menu-toppings/Asset 30.svg'),

        sauce_1: require('../assets/menu-toppings/Sauce.svg'),
    }
  },
  methods: {
      loadCards() {
        setTimeout(() => { 
          this.isLoaded = true,
          setTimeout(() => {
            var menu = document.getElementsByClassName("menu-page")
            menu.forEach(menuPage => {
              menuPage.style.transitionDuration  = '0.2s';
            });
          }, 700)
        }, 100)
      },
  },
  mounted() {
      this.loadCards();
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300&display=swap');

.menu-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.menu-page {
  width: 1000px;
  padding: 50px;
  border-radius: 12px;
  opacity: 0;
  margin: 25px auto;
  background: #f8eaff;
  transition-property: box-shadow, opacity, transform;
  transition-duration: 0.8s;
  transform: translateY(75px);
}

.menu-loaded {
  opacity: var(--opacity-full);
  transform: translateY(0);
}

.menu-page:hover {
  box-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu-1 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: 306px;
  width: -webkit-fill-available;
}

.menu-2 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: 306px;
  width: -webkit-fill-available;
}

.menu-option {
  width: 425px;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: 100;
  flex-wrap: wrap;
  position: relative;
  cursor: context-menu;
}

.menu-option span {
    margin-left: auto;
}

.bottom {
  display: flex;
  justify-content: space-around;
  font-family: 'Hind Guntur', sans-serif;
  font-size: 1.3em;
  margin-top: 45px;
}

.bottom, .bottom a {
  color: #8b73ff;
}

.bottom a:hover {
  color: hsl(250, 100%, 60%);
}

.topping-main, .jams-main, .sauces-main {
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}

.topping, .jam, .sauce {
  width: auto;
  font-size: 12px;
  color: #000;
  align-items: center;
  cursor: context-menu;
  margin: 5px;
}

.topping img, .jam img{
  width: 45px;
  transition-property: transform;
  transition-duration: 0.3s;
}

.sauce {
  margin: 0;
}

.sauce img, .sauce p {
  width: 50px;
  height: 70px;
  text-align: center;
  transition-property: transform;
  transition-duration: 0.3s;
}

.sauce p {
  margin: 5px 0 0 0;
  line-height: 15px;
}

.jam img{
  width: 55px;
}

.topping:first-child img {
   transform: scale(1.4) translateY(5px);
}

.topping:first-child:hover img {
   transform: scale(1.6) translateY(5px);
}

.topping:hover img, .jam:hover img, .sauce:hover img {
   transform: scale(1.15);
}

.submenu-title {
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 5px;
  font-family: 'Hind Guntur', sans-serif;
}

#frappe {
  width: 50px;
  transform: translate(-10px, -5px);
}

.hotChocolate {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 50px !important;
}

#water {
  width: 60px;
  transform: translateX(-15px)
}

#iceTea {
  width: 50px;
  transform: translate(-5px, -50px);
  filter: drop-shadow(0px 5px 3px rgba(34, 34, 34, 0.15));
}

#fanta {
  width: 25px;
  transform: translateY(-5px);
}

#cola {
  width: 20px;
}

#bravo {
  width: 25px;
}

#redbull {
  width: 60px;
  transform: translate(-18px, 10px);
}

.menu-option img {
  width: 100px;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: -50px;
  left: 0;
  transition-property: opacity, top;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.menu-option:hover img {
  opacity: var(--opacity-full);
  top: -65px;
}

.menu-page:nth-child(2) {
  background: #fdfefe;
}

.menu-page:nth-child(5) .menu, .menu-page:nth-child(2) .menu {
  height: auto;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-family: 'Moontime';
  font-size: 7em;
  font-weight: 400;
  color: #e7018f;
  cursor: context-menu;
  width: 72%;
}

#smoothies {
  font-size: 84px;
  width: auto;
}

.logo {
  width: 300px;
  height: 300px;
  position: absolute;
  right: -50px;
  top: -65px;
}

.top {
  position: relative;
  display: flex;
  margin: 0 0 100px;
}

.menu {
  font-family: 'Hind Guntur', sans-serif;
  color: #233dff;
  font-size: 1.4em;
  font-stretch: expanded;
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu-page:last-child .menu {
  flex-wrap: nowrap;
}

.menu-page:nth-child(3) .menu, .menu-page:nth-child(6) .menu, .menu-page:last-child .menu {
  height: auto;
}

.alternativeText {
  position: absolute;
  top: 25px;
  font-size: 15px;
}

.ice-option {
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin: 25px 0;
}

.ice-price {
  margin: 0;
  padding: 0;
}

.additional-prices {
  width: 250px;
  display: flex; 
  flex-direction: column; 
  margin: auto;
}

.ul-options {
  width: 350px;
}

.ul-options p {
  margin: 20px 0;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
}

.ul-options-2 {
  margin: 20px auto;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
  text-align: center;
  width: fit-content;

}

.ul-options:nth-child(2) {
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  margin: 0 auto;
}

.ul-options:nth-child(2) p {
  margin: 5px;
}

.menu-page:nth-child(5) .ul-options {
  flex-direction: column;
}

.menu-page:nth-child(5) .ul-options p{
  padding: 10px 15px;
  font-size: 24px;
  font-family: 'Hind Guntur', sans-serif;
}

.crepes {
  width: 450px;
}

.crepes h4 {
  font-size: 34px;
}

/* RESPONSIVENESS */

@media (max-width: 1110px) {
  .menu-page {
    width: 90%;
  }
}

@media (max-width: 1101px) {
  #smoothies {
    font-size: 74px;
    text-align: center;
  }
}

@media (max-width: 1080px) {
  .menu {
    height: auto;
    align-content: center;
  }
  .menu-page:nth-child(3) .menu {
    height: auto;
    align-content: unset;
  }

  .ul-options {
    margin: 0 0 0 25px;
  }

  .ul-options:nth-child(2) {
    flex-direction: column;
    width: auto;
  }

  .crepes-main {
    flex-direction: column;
    justify-content: center;
    width: min-content;
  }

  .crepes {
    padding: 0;
    margin: auto;
  }

  .crepes:last-child {
    margin: 25px 0 0 0;
  }

  .ul-options:nth-child(2) {
    margin-top: 30px;
  }

  .menu-1, .menu-2 {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

  .menu-page:nth-child(2) .menu {
    align-content: unset;
  }
}

@media (max-width: 973px) {
  .menu-page:nth-child(5) > div:nth-child(2){
    flex-direction: column;
  }
}

@media (max-width: 781px) {
  .ice-option {
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
}

@media (max-width: 746px) {
  h1 {
    font-size: 64px;
  }
  
  .logo {
    width: 200px;
    height: 200px;
    top: -60px;
  }
}

@media (max-width: 575px) {
  .logo {
    width: 150px;
    height: 150px;
    top: -60px;
  }

  .top {
    margin: 0 0 25px;
  }

  .ul-options {
    width: 100%;
    margin: 0;
  }

  .crepes-main {
    width: auto;
  }

  .crepes {
    width: -webkit-fill-available;
  }
}



@media (max-width: 575px) {
  .spacing{
    display: none;
  }
  .menu-option {
    background: rgb(193, 154, 202);
    color: #fff;
    padding: 0 5px;
    height: auto;
    widows: 100%;
    width: -webkit-fill-available;
  }

  .alternativeText {
    top: 40px;
    left: 0;
    color: rgb(193, 154, 202);
  }

}

@media (max-width: 525px) {
  #smoothies {
    font-size: 48px;;
  }
}

@media (max-width: 515px) {
  .bottom {
    display: flex;
    flex-direction: column;
  }
}
  

@media (max-width: 417px) {
  .menu-page:nth-child(4) .menu-option{
    height: auto;
  }

  #smoothies {
    font-size: 32px;;
  }
}

@media (max-width: 390px) {
  .menu-page:nth-child(5) .crepes:last-child .menu-option:nth-child(5) .alternativeText{
    top: 85px;
  }
}

@media (max-width: 385px) {
  .top .menu-title {
    width: auto;
  }
  .top {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 15px;
  }

  .logo {
    width: 100px;
    height: 100px;
    right: -60px;
  }

  .additional-prices {
    width: 100%;
  }
}

@media (max-width: 371px) {
  .menu-page:nth-child(4) .menu-option {
    height: auto;
  }

}

@media (max-width: 356px) {
  .menu-page:nth-child(5) .crepes:last-child .menu-option:nth-child(3) .alternativeText{
    top: 85px;
  }

}

@media (max-width: 340px) {
  .menu-option {
    height: fit-content;
  }
}

@media (max-width: 349px) {

}

@media (max-width: 348px) {
  .menu-page:first-child .menu > div:first-child {
    width: auto;

  }
  .menu-page:first-child .menu > div:first-child span{ 
    margin-left: auto;
  }

  .menu-page:nth-child(5) .crepes:first-child .menu-option:first-of-type .alternativeText{
    top: 85px;
  }
}


</style>
