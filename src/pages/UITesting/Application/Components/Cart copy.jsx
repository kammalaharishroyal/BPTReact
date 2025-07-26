function Cart({cartItems}) {
   
    return (
    <div>
     
      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.module} – {item.action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
    
}
export default Cart;