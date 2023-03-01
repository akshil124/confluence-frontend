export const createOrderForOrganization = `
    mutation CashFreeMutation(
        $customer_id:String!,
        $customer_email:String!,
        $customer_phone:String!,
        $amount:String!,
    ) {
          createOrder(customer_id:$customer_id,customer_email:$customer_email,customer_phone:$customer_phone,amount:$amount){
            session_id
          }
    }
`;

export const orderPayUrl = `
    mutation CashFreeMutation(
        $upi_id:String!,
        $session_id:String!
    ) {
          orderPay(upi_id:$upi_id,session_id:$session_id){
            url
          }
    }
`;
