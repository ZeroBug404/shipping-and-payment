import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";

const ShipInfoFrom = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };


  return (
    <div className="mt-10">
      <div>
        <button
          onClick={handleGoogleSignIn}
          class="btn btn-success rounded-full w-48 mr-2
        "
        >
          LOG IN WITH
          <FcGoogle size={25} className="ml-3" />
        </button>
        <button
          onClick={handleGoogleSignUp}
          class="btn btn-outline btn-accent w-48 rounded-full"
        >
          SIGN UP WITH
          <FcGoogle size={25} className="ml-3" />
        </button>
      </div>

      <div className="my-12">
        <h4 className="my-4">Shipping information</h4>

        {/* form */}
        <form>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered max-w-xs rounded-full mr-2 w-48"
            />
            <input
              type="text"
              placeholder="Address"
              class="input input-bordered w-48 max-w-xs rounded-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="First name"
              class="input input-bordered max-w-xs rounded-full mr-2 w-48"
            />
            <input
              type="text"
              placeholder="Last name"
              class="input input-bordered w-48 max-w-xs rounded-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="City"
              class="input input-bordered max-w-xs rounded-full mr-2 w-48"
            />
            <input
              type="text"
              placeholder="Postal Code / ZIP"
              class="input input-bordered w-48 max-w-xs rounded-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Phone number"
              class="input input-bordered max-w-xs rounded-full mr-2 w-48"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-48 max-w-xs rounded-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipInfoFrom;
