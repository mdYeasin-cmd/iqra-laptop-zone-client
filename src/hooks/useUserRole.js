import { useEffect, useState } from "react";

const useUserRole = email => {

    const [isUserRole, setIsUserRole] = useState('');
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5000/users?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsUserRole(data.userRole);
                    setIsUserLoading(false);
                })
        }

    }, [email]);

    return [isUserRole, isUserLoading];

}

export default useUserRole;