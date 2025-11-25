import React from 'react'

/*✅ Big Picture

InputBox is “dumb” (UI-only).

It just shows inputs and dropdowns.

It does not hold state; instead, it calls parent functions when user types or selects something.

Parent (App.jsx) is the “smart” component that actually stores state and does conversion logic. */

function InputBox({ // Props passed to the InputBox component are:-
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",

    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* Left side */}
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} // Disable the input if amountDisable is true
                    value = {amount} // Value of the input box
                    onChange={(e) => onAmountChange(e.target.value)} // Call onAmountChange when the input value changes
                />
            </div>

           { /* Right side (Currency dropdown) */}

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency} // Value of the select box
                    onChange={(e) => onCurrencyChange(e.target.value)} // Call onCurrencyChange when the selected option changes
                    disabled = {currencyDisable} // Disable the select if currencyDisable is true
                >
                   
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))} 
                        
                        {/* Map through currencyOptions to create option elements

                         // NOTE :- Whenever we are using map function in react we have to provide a unique key to each element.
                */}
                </select>
            </div>
        </div>
    );
}

export default InputBox;