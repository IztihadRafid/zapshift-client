import { Link } from "react-router";

const PaymentCancelled = () => {
    return (
        <div>
            <h1>PAYMENT CANCELLED</h1>
            <Link to="/dashboard/my-parcels"><button>Back to My Parcels</button></Link>
        </div>
    );
};

export default PaymentCancelled;