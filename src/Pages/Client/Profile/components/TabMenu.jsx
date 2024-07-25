import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useClientGlobalContext } from '../../Contexts/ClientGlobalContext';

import MedicalInformation from './ActorProfile/MedicalInformation';
import PhysicalAppearance from './ActorProfile/PhysicalAppearance';
import RequestActors from './ProducerProfile/RequestActors';
import PreviousWork from './ProducerProfile/PreviousWork';
import Lifestyle from './ActorProfile/Lifestyle';
import Media from './ActorProfile/Media';

import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

const TabMenu = () => {
    const { setProfileTab, activeTab, setActiveTab } = useClientGlobalContext();
    const { t } = useTranslation('profile');
    const location = useLocation();

    const [userType, setUserType] = useState()

    const indicatorRef = useRef(null);
    const tabRefs = useRef([]);
    const toast = useRef(null);
    const menu = useRef(null);

    const tabs = [
        {
            id: 0,
            title: t('producer.tabs.tab_1'),
            component: <PreviousWork />,
            type: "PRODUCER"
        },
        {
            id: 1,
            title: t('producer.tabs.tab_2'),
            component: <RequestActors />,
            type: "PRODUCER"
        },
        {
            id: 2,
            title: t('actor.tabs.tab_1'),
            component: <Media />,
            type: "ACTOR"
        },
        {
            id: 3,
            title: t('actor.tabs.tab_2'),
            component: <PhysicalAppearance />,
            type: "ACTOR"
        },
        {
            id: 4,
            title: t('actor.tabs.tab_3'),
            component: <Lifestyle />,
            type: "ACTOR"
        },
        {
            id: 5,
            title: t('actor.tabs.tab_4'),
            component: <MedicalInformation />,
            type: "ACTOR"
        },
    ];

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        setUserType(query.get('user-type') === "ACTOR" ? "ACTOR" : "PRODUCER");

    }, [location.search]);

    useEffect(() => {
        setProfileTab(tabs);
        setActiveTab(userType === "ACTOR" ? 2 : 0);
        return () => setProfileTab("");
    }, []);

    useEffect(() => {
        const updateIndicatorPosition = () => {
            const activeTabElement = tabRefs.current[activeTab];
            const indicatorElement = indicatorRef.current;

            if (activeTabElement && indicatorElement) {
                const { offsetLeft, offsetWidth } = activeTabElement;
                indicatorElement.style.left = `${offsetLeft + offsetWidth / 2 - 20}px`; // Adjust 15px based on the fixed 30px width
            }
        };

        updateIndicatorPosition();
        window.addEventListener('resize', updateIndicatorPosition);

        return () => {
            window.removeEventListener('resize', updateIndicatorPosition);
        };
    }, [activeTab, tabs]);

    const actorItems = [
        {
             items: [
                {
                    label: t('actor.tabs.tab_1'),
                    command: () => {
                        setActiveTab(2)
                    }
                },
                {
                    label: t('actor.tabs.tab_2'),
                    command: () => {
                        setActiveTab(3)
                    }
                },
                {
                    label: t('actor.tabs.tab_3'),
                    command: () => {
                        setActiveTab(4)
                    }
                },
                {
                    label: t('actor.tabs.tab_4'),
                    command: () => {
                        setActiveTab(5)
                    }
                },
            ]
        }
    ];

    const producerItems = [
        {
             items: [
                {
                    label: t('producer.tabs.tab_1'),
                    command: () => {
                        setActiveTab(0)
                    }
                },
                {
                    label: t('producer.tabs.tab_2'),
                    command: () => {
                        setActiveTab(1)
                    }
                }
            ]
        }
    ];

    return (
        <div className="menu-container bg-primary w-full flex justify-end mb-10">
            <ul className="menu w-9/12 relative flex justify-center sm:justify-start">
                {tabs.map((tab, index) => (
                    tab?.type === userType &&
                    <li
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className={`menu-tab xs:text-xl  lg:text-2xl xs:px-5 lg:px-8 py-3 ${activeTab === tab?.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab?.id)}
                    >
                        {tab?.title}
                    </li>
                ))}
                <div ref={indicatorRef} className="menu-indicator"></div>
            </ul>

            <Menu model={userType === "ACTOR" ? actorItems : producerItems} popup ref={menu} id="popup_menu" />
            <Button
                icon="pi pi-ellipsis-v"
                onClick={(event) => menu.current.toggle(event)}
                aria-controls="popup_menu"
                className='sm-profile-menu '
                aria-haspopup />

        </div>
    );
};

export default TabMenu;
