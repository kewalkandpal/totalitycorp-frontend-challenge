import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { userImage } from "../redux/cartSlice";

function LogIn() {
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState<boolean>(true);
    const [regError, setRegError] = useState<boolean>(false);
    const [logError, setlogError] = useState<boolean>(false);

    const [fname, setName] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [image, setimage] = useState<File | null | any>();

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    function register(e: React.FormEvent) {
        e.preventDefault();
        if (fname && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (res) => {
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: fname,
                    });
                    getDownloadURL(ref(storage, email))
                    .then((url) => {
                        dispatch(userImage(url));
                    })
                    .catch((error) => {
                        console.log(error);
        
                    });
                    setRegError(false);
                })
                .catch((error) => {
                    setRegError(true);

                });
            uploadBytes(ref(storage, email), image).then((snapshot) => {
            });
        }

    }

    function logIn(e: React.FormEvent) {
        e.preventDefault();
        if (userEmail && userPassword) {
            signInWithEmailAndPassword(auth, userEmail, userPassword)
                .then((res) => {
                    const user = res.user;
                    setlogError(false);
                })
                .catch((error) => {
                    setlogError(true);
                });
            getDownloadURL(ref(storage, userEmail))
                .then((url) => {
                    dispatch(userImage(url));
                })
                .catch((error) => {
                    console.log(error);

                });
        }
    }

    return (
        <div className="w-full flex justify-center items-center flex-col mt-10">
            <div className="w-[300px] border-2 border-orange-500 pt-2 pb-5 pl-2 pr-2 rounded-md shadow-lg">
                {
                    toggle ? <form onSubmit={register} className="flex flex-col items-center w-full h-auto p-3">
                        <h2 className="text-xl md:text-2xl text-orange-500 font-bold mb-6 border-b-2 border-orange-500">Register</h2>
                        <input type="text" placeholder="Name" className="border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" value={fname} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="email" className="border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" value={email} onChange={(e) => setemail(e.target.value)} />
                        <input type="password" placeholder="Password" className="border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" value={password} onChange={(e) => setpassword(e.target.value)} />
                        <input type="file" className="cursor-pointer border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" onChange={(e) => setimage(e.target?.files?.[0])} />
                        {regError ? <p className="font-serif text-red-500">Something went wrong!</p> : null}
                        <button className="mt-2 p-[6px] md:p-[8px] text-sm md:text-[16px] bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Register</button>
                    </form> : <form onSubmit={logIn} className="flex flex-col items-center w-full h-auto p-3">
                        <h2 className="text-xl md:text-2xl text-orange-500 font-bold mb-6 border-b-2 border-orange-500">Sign In</h2>
                        <input type="email" placeholder="Enter email" className="border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        <input type="password" placeholder="Enter password" className="border-0 outline-none border-b-2 border-gray-400 mb-3 p-1 w-full" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        {logError ? <p className="font-serif text-red-500">Something went wrong!</p> : null}
                        <button className="mt-2 p-[6px] md:p-[8px] text-sm md:text-[16px] bg-orange-500 text-white border-2 rounded-md font-medium hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all shadow-lg">Sign In</button>
                    </form>
                }
                <div className="flex justify-center items-center mt-2 space-x-5">
                    <p className="text-orange-500 font-bold cursor-pointer border-b-2 border-orange-500" onClick={() => setToggle(true)}>Register</p>
                    <p className="text-orange-500 font-bold cursor-pointer border-b-2 border-orange-500" onClick={() => setToggle(false)}>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default LogIn;