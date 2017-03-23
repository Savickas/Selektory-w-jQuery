// Podaj przykłady selektorów, które pozwolą znaleźć na stronie następujące elementy:

// zad1 Wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.

var zad1 = $(".grid .grid-12 div");

// zad2 wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”

var zad2 = $(".nav a[href^='http']");

// zad3 wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).

var zad3 = $(":radio:not(:checked) :checkbox:not(:checked)");

// zad4 wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”

var zad4 = $(".div#text>p:empty:first");

// zad5 wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>

var zad5 = $(".pagination-item:not('span')");