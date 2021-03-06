
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    agreement_number : String,
    schedule_number : Number,
    customer_number : String,
    customer_address_number : Number,
    market_product : String,
    status_code : String,
    remaining_payments : Number,
    future_rentals : Number,
    lease_start_date : String,
    term : Number,
    lease_end_date : String,
    primary_arrears : Number,
    last_due_date : Number,
    financed_amount : String,
    residual_amount : Number,
    early_settlement_amount : Number,
    upgrade_amount : Number,
    dealer_reference : String,
    dealer_branch_reference : Number,
    next_due_date : String,
    maintenance_charge_amount : Number,
    sales_person_id : String,
    branch_id : String,
    division_id : String,
    upgrade_quote_expiry_date : Number,
    early_settlement_quote_expiry_date : Number,
    vendor_sales_id : String,
    agreement_currency : String,
    invoicing_customer_number : String,
    invoicing_customer_billing_address : Number,
    repurchaser_number : String,
    repurchaser_billing_address : Number,
    siesmart_proposal_id : String,
    rental_age : Number,
    rental_remaining : Number,
    actual_age : Number,
    actual_remaining : Number,
    activation_date : String,
    activation_user : String,
    activation_user_description : String,
    original_maturity_date : Number,
    dealer_arrears : Number,
    total_write_offs : Number,
    sales_person : String,
    sales_administrator : String,
    thirty_day_arrears : Number,
    bad_debt_write_offs : Number,
    lessee_irr : Number,
    lessor_irr : Number,
    pto : Number,
    buyback_guarantee_amount : Number,
    rv_covered_by_rv_guarantee : Number,
    other_rv_guarantee : Number,
    first_year_bad_debt : Number,
    notice_of_termination_received : String,
    termination_notice_date : Number
});

export default mongoose.model('agreement', Schema,'agreement');


