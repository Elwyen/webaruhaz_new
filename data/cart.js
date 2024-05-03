const cartId = 'kosar';

function getKosar() { 
    const mentettKosar = localStorage.getItem(cartId);
    if (mentettKosar) {
        return JSON.parse(mentettKosar);
    }
    return [];
}

function saveKosar(cart) {
    localStorage.setItem(cartId, JSON.stringify(cart));
    console.log('A kosár tartalma el lett mentve.');
}

function clearKosar() {
    localStorage.removeItem(cartId);
}
