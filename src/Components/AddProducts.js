import React, {useState} from "react";

const AddProducts = () => {
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Earphone",
            price: 499,
        },
        {
            id: "2",
            name: "Mobile",
            price: 4699,
        },
        {
            id: "3",
            name: "Charger",
            price: 299,
        },
        {
            id: "4",
            name: "Tablet",
            price: 48999,
        },
        {
            id: "5",
            name: "Cable",
            price: 499,
        },
    ])
    return <div>
        <h2>Product Details</h2>
        <div className={"app-wrapper"}>
            <table>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {
                    products.map((p, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    })
                }
            </table>
        </div>
        <div className={"app-wrapper"}>
            <form onSubmit={(event) => {
                event.preventDefault()
                const product = event.target.product.value;
                const price = event.target.price.value;
                setProducts([...products, {
                    id: Math.random(),
                    name: product,
                    price: price,
                }])
                event.target.reset()
            }}>
                <label><h4>Product Name</h4>
                    <input className={"product-input"}
                           type={"text"}
                           name={"product"}
                           required="required"
                    />
                </label>
                <label><h4>Price</h4>
                    <input className={"product-input"}
                           type={"number"}
                           name={"price"} min={"1"}
                           required="required"
                    />
                    <br/>
                </label>
                <input className={"submit-button"}
                       type="submit" value="submit"
                />
            </form>
        </div>
    </div>
}
export default AddProducts;