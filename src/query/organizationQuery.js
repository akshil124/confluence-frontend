export const createOrganizationQuery = `
    mutation OrganizationMutation(
        $name:String!,
        $email:String!,
        $category:String!,
        $employees:String!,
        $password:String!,
        $number:String!
    ) {
          createOrganization(name:$name,email:$email,category:$category,number:$number,employees:$employees,password:$password){
            _id
            name
            email
            category
            employees
            password
            number
            plan
            planStatus
          }
    }
`;
