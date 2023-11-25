import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const SoldProducts = ({transaction, setTransaction}) => {
    const [soldProducts, setSoldProducts] = useState([])
    const [value, setValue] = useState('')
    const [filterProducts, setFilterProducts] = useState([])
    const [detail, setDetail] = useState('');
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
        {
            id: "6",
            name: "Cardboard",
            price: 499,
        },
    ])
    const CalculateSum = () => {
        let TotalAmount = 0;
        for (let i = 0; i < soldProducts.length; i++) {
            TotalAmount = TotalAmount + (soldProducts[i].price * soldProducts[i].quantity);
        }
        return TotalAmount;
    }
    useEffect(() => {
        if (value) {
            const keyword = value;
            if (keyword !== '') {
                const results = products.filter((user) => {
                    return user.name.toLowerCase().includes(keyword.toLowerCase());
                });
                setFilterProducts(results);
            } else {
                setFilterProducts([]);
            }
        }
    }, [value])
    return <div>
        <h2>Search Products</h2>
        <div>
            <input className={"input-wrapper"}
                   type={"search"}
                   value={value}
                   onChange={(event => {
                       setValue(event.target.value)
                   })}
            />
            {
                filterProducts.length > 0 && <div className={"app-wrapper"}>
                    <table>
                        <tr>
                            <th>Sr.no</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Add</th>
                        </tr>
                        {
                            filterProducts.map((p, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <button className={"add-button"}
                                                onClick={() => {
                                                    setSoldProducts([
                                                        ...soldProducts,
                                                        {
                                                            ...p,
                                                            quantity: 1
                                                        }
                                                    ])
                                                    setFilterProducts([])
                                                    setValue("")
                                                }}>Add
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            }
        </div>
        <div>
            <h2>Sold Products</h2>
            <div className={"app-wrapper"}>
                {
                    soldProducts && soldProducts.length > 0 && <table>
                        <tr>
                            <th>Sr.No</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                        {
                            soldProducts.map((p, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{p.name}</td>
                                    <td>
                                        <form>
                                            <input className={"quantity-input"}
                                                   type={"number"} value={p.quantity} min={"1"}
                                                   onChange={(e) => {
                                                       let products = [...soldProducts];
                                                       products[index].quantity = e.target.value;
                                                       setSoldProducts(products)
                                                   }}/>
                                            {p.quantity}
                                        </form>
                                    </td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <td>
                                        <button className={"delete-button"}
                                                onClick={() => {
                                                    let temp = [...soldProducts];
                                                    temp.splice(index, 1)
                                                    setSoldProducts(temp)
                                                }
                                                }
                                        >Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                }
            </div>
            <h3>Total Amount : <span style={{color: "firebrick"}}>{CalculateSum()}</span></h3>
            <h3>Customer Name</h3>
            <input className={"customer-input"}
                   type="text"
                   name="name"
                   value={detail}
                   onChange={(e) => {
                       setDetail(e.target.value);
                   }}
            />
            <div className={"app-wrapper"}>
                <Link to="/Transactions">
                    <button className={"payment-button"}
                            onClick={() => {
                                setTransaction(
                                    [...transaction,
                                        {
                                            amount: CalculateSum(),
                                            name: detail,
                                            items: [...soldProducts]
                                        },
                                    ]
                                )
                                setSoldProducts([])
                                setDetail("")
                            }}>Payment Done
                    </button>
                </Link>
            </div>
        </div>
    </div>
}
export default SoldProducts;