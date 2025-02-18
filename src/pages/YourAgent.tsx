function YourAgent() {
  const agents = [
    { name: "Snake AI", created: "01/5/2025", active: false },
    { name: "Snake AI", created: "01/5/2025", active: true },
    { name: "Snake AI", created: "01/5/2025", active: false },
    { name: "Snake AI", created: "01/5/2025", active: true },
    { name: "Snake AI", created: "01/5/2025", active: false },
    { name: "Snake AI", created: "01/5/2025", active: false },
    { name: "Snake AI", created: "01/5/2025", active: true },
    { name: "Snake AI", created: "01/5/2025", active: false },
    { name: "Snake AI", created: "01/5/2025", active: false },
  ];

  return (
    <div className="h-full bg-black text-white flex items-center justify-center p-0 lg:p-4 ">
      <div className="w-full p-0 lg:p-6 rounded-none lg:rounded-lg shadow-lg overflow-x-auto max-w-full pt-10 pb-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Your Agents</h2>

        {/* Check if there are no agents */}
        {agents.length === 0 ? (
          <div className="text-center text-3xl font-bold text-white pt-40">
            You have not created any agents.
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead className="overflow-hidden">
                <tr className="bg-[#222128] ">
                  <th className="py-2 px-2 md:px-4 text-left rounded-l-lg font-medium ">
                    Name
                  </th>
                  <th className="py-2 px-2 md:px-4 text-center font-medium">
                    Created
                  </th>
                  <th className="py-2 px-2 md:px-4 text-center font-medium">
                    Active
                  </th>
                  <th className="py-2 px-2 md:px-4 text-right rounded-r-lg font-medium">
                    Manage
                  </th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <tr key={index} className="border-b border-[#494848] ">
                    <td className="py-2 px-2 md:px-4 text-left text-nowrap">
                      {agent.name}
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center">
                      {agent.created}
                    </td>
                    <td className="py-2 px-2 md:px-4 text-center">
                      <div
                        className={`w-3 h-3 rounded-full inline-block ${
                          agent.active ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                    </td>
                    <td className="py-4 px-2 md:px-4 text-right">
                      <button className="  px-2 md:px-4 text-right mt-4 cursor-pointer  py-1 text-white rounded-lg transition duration-200 backdrop-blur-lg bg-white/5  hover:bg-white/30">
                        Manage{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default YourAgent;
