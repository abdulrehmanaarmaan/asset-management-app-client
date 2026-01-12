import { CircleUserRound, Clipboard, ClipboardList, ClipboardPlus, FileText, House, Info, PackageCheck, PackagePlus, PanelLeftClose, PanelLeftOpen, PhoneCall, PieChart, Sparkles, User, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import useUserInfo from '../hooks/UseUserInfo';
import { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {

    const [sidebar, openSidebar] = useState(false);

    const { role } = useUserInfo();
    console.log(role)

    const location = useLocation()

    console.log(location)

    useEffect(() => {
        const checkbox = document.getElementById('my-drawer-4');
        if (!checkbox) return;
        const handleChange = () => openSidebar(checkbox.checked);
        checkbox.addEventListener('change', handleChange);
        return () => checkbox.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300 gap-3 sticky top-0 z-1">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost hover:bg-blue-100 border-0 sidebar-toggle-btn" onClick={() => openSidebar(!sidebar)}>
                        {/* Sidebar toggle icon */}
                        {!sidebar ? <PanelLeftOpen></PanelLeftOpen> : <PanelLeftClose></PanelLeftClose>}
                    </label>

                    <NavLink to='/' className="font-extrabold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-tight">
                        AssetVerse
                    </NavLink>
                </nav>
                {/* Page content here */}
                <div className='py-12 bg-linear-to-b from-gray-50 to-gray-200 min-h-screen bg-color'>
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow gap-3.5">

                        <li>
                            <NavLink to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-600" data-tip="Home">
                                {/* Home icon */}
                                <House className='w-4 h-4'></House>
                                <span className="is-drawer-close:hidden">Home</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/about' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-600" data-tip="About">
                                {/* Home icon */}
                                <Info className='w-4 h-4'></Info>
                                <span className="is-drawer-close:hidden">About</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/blog' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-600" data-tip="Blog">
                                {/* Home icon */}
                                <FileText className='w-4 h-4'></FileText>
                                <span className="is-drawer-close:hidden">Blog</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/contact' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-600" data-tip="Contact">
                                {/* Home icon */}
                                <PhoneCall className='w-4 h-4'></PhoneCall>
                                <span className="is-drawer-close:hidden">Contact</span>
                            </NavLink>
                        </li>


                        {role === 'hr' ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/asset-list' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="Asset List">
                                        <Clipboard className='w-4 h-4'></Clipboard>
                                        <span className="is-drawer-close:hidden">Asset List</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/add-asset' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="Add an Asset">
                                        {/* Settings icon */}
                                        <PackagePlus className='w-4 h-4'></PackagePlus>
                                        <span className="is-drawer-close:hidden">Add an Asset</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/all-requests' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="All Requests">
                                        {/* Settings icon */}
                                        <ClipboardList className='w-4 h-4'></ClipboardList>
                                        <span className="is-drawer-close:hidden">All Requests</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/my-employee-list' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="My Employee List">
                                        {/* Settings icon */}
                                        <User className='w-4 h-4'></User>
                                        <span className="is-drawer-close:hidden">My Employee List</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/upgrade-package' className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="Upgrade Package">
                                        {/* Settings icon */}
                                        <Sparkles className='w-4 h-4'></Sparkles>
                                        <span className="is-drawer-close:hidden">Upgrade Package</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/analytics'
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800"
                                        data-tip="Analytics">
                                        {/* Settings icon */}
                                        <PieChart className='w-4 h-4'></PieChart>
                                        <span className="is-drawer-close:hidden">Analytics</span>
                                    </NavLink>
                                </li>
                            </>
                            : <>
                                <li>
                                    <NavLink to='/dashboard/my-assets'
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="My Assets">
                                        {/* Settings icon */}
                                        <PackageCheck className='w-4 h-4'></PackageCheck>
                                        <span className="is-drawer-close:hidden">My Assets</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/request-asset'
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="Request an Asset">
                                        {/* Settings icon */}
                                        <ClipboardPlus className='w-4 h-4'></ClipboardPlus>
                                        <span className="is-drawer-close:hidden">Request an Asset</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/my-team'
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="My Team">
                                        {/* Settings icon */}
                                        <Users className='w-4 h-4'></Users>
                                        <span className="is-drawer-close:hidden">My Team</span>
                                    </NavLink>
                                </li>
                            </>
                        }
                        <li>
                            <NavLink to='/dashboard/profile'
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center bg-transparent text-gray-800" data-tip="Profile">
                                {/* Settings icon */}
                                <CircleUserRound className='w-4 h-4'></CircleUserRound>
                                <span className="is-drawer-close:hidden">Profile</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default DashboardLayout;