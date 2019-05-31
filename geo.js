function init() {
    let myMap = new ymaps.Map('map', {
        center: [51.50643, -0.0732534],
        zoom: 13,
        controls: []
    });
    
    /**
     * Creating an instance of the "Search on map" control
     * with the option enabled for the business search data provider.
     */
    let searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    
    myMap.controls.add(searchControl);
    
    /**
     * Programmatically performing a search for specific cafes within the
     * rectangular map area.
     */
    searchControl.search('park');
}

ymaps.ready(init);