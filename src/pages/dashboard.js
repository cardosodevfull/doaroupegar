import React, { useContext, useState } from 'react';
import withAuth from '../config/withAuth';
import { AuthContext } from '../config/AuthContext';
import { useRouter } from 'next/router';

function Dashboard() {
    const router = useRouter();
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <div>Dashboard</div>
            <a href='#' onClick={()=> logout()}>sair do aplicativo</a>
        </>
    )
}

export default withAuth(Dashboard);