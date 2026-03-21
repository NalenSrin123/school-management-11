import { Home, Wallet } from 'lucide-react'
import React, { useState } from 'react'

const MoblieMenuSetting =() =>{
    const [setting, setSetting] = useState({
        home:true,
        explore:true,
        Wallet:true,
        trip:true,
        account:true,
    });

    const handleToggle = (key) => {
        setMenuSettings({
            ...menuSettings,
            [key] : !menuSettings[key],
        });
    };

    const handleSave = () =>{
        console.log("Saving Data to API", settings);
        alert("Setting saved successfully!");
    };

    return(
        <div className="max-w-5xl mx-auto bg-[#f8f9fa] font-sans mt-2">
            <nav className="flex items-center px-6 py-3 bg-grat-400 border-b border-gray-200 text-sm">
                <div className="flex items-center text-blue-600 hover:underline cursor-pointer">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20 ">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                    Dashboard
                </div>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500 font-medium">Moblie Menu</span>
            </nav>
            <main className="p-6 md:p-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Moblie Menu</h2>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 p-6 bg-[#fcfcfc] border-r border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-700">Moblie Menu</h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                    Config moblie menu for system
                                </p>
                            </div>

                            <div className="w-full md:w-2/3 p-8 bg-white space-y-10">
                                <div className="group">
                                    <label className="block text-xs  font-bold text-gray-600 uppercase tracking-wider mb-2">
                                        Enable Home Tap
                                    </label>
                                    <input type="checkbox" checked={FormData.enableHome} onChange={() => handleInputChange('enableHome')}
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition duration-150"
                                    />
                                    <p className="text-([120]) text-gray-400 mt-2 italic">Turn on the mode for home tab</p>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                                        Enable  Explore Tab
                                    </label>
                                    <input type="Checkbox" checked={FormData.enableExplore} onChange={() => handleInputChange('enableExplore')}
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition duration-150"
                                    />
                                    <p className="text-([120]) text-gray-400 mt-2 italic">Turn on the mode for explore tab</p>
                                </div>

                                <div className="group">
                                    <label className="block text-xs  font-bold text-gray-600 uppercase tracking-wider mb-2">
                                        Enable Wallet Tab       
                                    </label>
                                    <input type="checkbox" checked={FormData.enableWallet} onChange={() => handleInputChange('enableWallet')}
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition duration-150"
                                    />
                                    <p className="text-([120]) text-gray-400 mt-2 italic">Turn on the mode for wallet tab</p>
                                </div>

                                <div className="group">
                                    <label className="block text-xs  font-bold text-gray-600 uppercase tracking-wider mb-2">
                                        Enable Trip Planner Tab
                                    </label>
                                    <input type="Checkbox" checked={FormData.enableTripPlanner} onChange={() => handleInputChange('enableWallet')}
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition duration-150"
                                    />
                                    <p className="text-([120]) text-gray-400 mt-2 italic">Turn on the mode for trip planner tab</p>
                                </div>

                                <div className="group">
                                    <label className="block text-xs  font-bold text-gray-600 uppercase tracking-wider mb-2">
                                        Enable Account Tab
                                    </label>
                                    <input type="Checkbox" checked={FormData.enableTripPlanner} onChange={() => handleInputChange('enableWallet')}
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition duration-150"
                                    />
                                    <p className="text-([120]) text-gray-400 mt-2 italic">Turn on the mode for account tab</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-end items-center">
                            <span className="text-xs text-gray-400 mr-4 italic">Please review the data before clicking save</span>
                            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-2.5 px-12 rounded shadow-sm transition-all duration-200 ease-in-out">
                                Save Setting
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MoblieMenuSetting