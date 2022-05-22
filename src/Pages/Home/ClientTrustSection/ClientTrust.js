import React from "react";
import flag from "../../../img/flag.png";
import hardware from "../../../img/hardware.jpg";
import user from "../../../img/user.png";
import like from "../../../img/like.png";
import ClientService from "./ClientService/ClientService";
const ClientTrust = () => {
  return (
    <div className="my-10 lg:px-12">
      <h1 className="text-4xl font-bold lg:text-5xl text-yellow-400 mb-3">
        Millions Business Trust Us
      </h1>
      <h4 className="text-2xl">Try TO Understand Users Expectation</h4>
      <div className="grid gird-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-4 mt-10">
        <ClientService number="72" img={flag} name="Countries" />
        <ClientService number="535+" img={hardware} name="Complete Projects" />
        <ClientService number="273+" img={user} name="Happy Clients" />
        <ClientService number="432+" img={like} name="Feedbacks" />
      </div>
      <div className="bg-white my-8 shadow-2xl hidden lg:block">
        <div className="grid grid-cols-2 items-center p-12">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-yellow-400">
              Have any question about us oe get a product request ?
            </h1>
            <h2 className="text-2xl mt-2">Don't hesitate to contact us</h2>
          </div>
          <div>
            <button class="btn bg-yellow-400 border-0 hover:bg-yellow-600 mr-6 px-10">
              Request For Quote
            </button>
            <button class="btn bg-sky-800 hover:bg-sky-900 border-0 px-10">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTrust;
