import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    // console.log(email);
    if (email) {
      fetch(`https://jarin-portals-server.vercel.app/user/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("useadmin theak email", data);
          setAdmin(data.admin);
          setIsAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, isAdminLoading];
};
export default useAdmin;
