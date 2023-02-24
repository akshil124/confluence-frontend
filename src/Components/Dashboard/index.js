import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImSpinner3 } from 'react-icons/im';
import { CiSearch, CiCalendarDate } from 'react-icons/ci';
import { MdNotes } from 'react-icons/md';
const tasks = [
    { id: '1', content: 'First task' },
    { id: '2', content: 'Second task' },
    { id: '3', content: 'Third task' },
    { id: '4', content: 'Fourth task' },
    { id: '5', content: 'Fifth task' }
];

const taskStatus = {
    requested: {
        name: 'Requested',
        items: tasks
    },
    toDo: {
        name: 'To do',
        items: []
    },
    inProgress: {
        name: 'In Progress',
        items: []
    },
    done: {
        name: 'Done',
        items: []
    }
};

const onDragEnd = (result, columns, setColumns) => {
    // console.log('result, columns, setColumns', result, columns, setColumns);
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function App () {
    const [columns, setColumns] = useState(taskStatus);
    const [showSidebar, setShowSidebar] = useState(false);
    const [cardData, setCardData] = useState();
    const handleSidebar = (data, item) => {
        // console.log('item-->', data, item);
        setShowSidebar(true);
        setCardData({ ...cardData, data, name: item.content });
    };
    // console.log('item', cardData);
    return (
        <div className="antialiased w-full min-h-screen  bg-gray-200 relative">
            <div className=" py-4 gap-2  my-10 px-2 "
                style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
            >
                <div className="grid   mr-36  ">
                    <div id="menu" className=" col-span-3 rounded-lg p-4 ">
                        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white  to-transparent bg-clip-text "><status/>Dashboard<span
                            className="text-indigo-400">.</span></h1>
                        <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
                        <a href="#"
                            className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                            <div>
                                <img className="rounded-full w-10 h-10 relative object-cover"
                                    src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                                    alt=""/>
                            </div>
                            <div>
                                <p className="font-medium group-hover:text-indigo-400 leading-4">Jim
                                    Smith</p>
                                <span className="text-xs text-slate-400">Pantazi LLC</span>
                            </div>
                        </a>
                        <hr className="my-2 border-slate-700"/>
                        <div id="menu" className="flex flex-col space-y-2 my-5">
                            <a href="#"
                                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                                <div
                                    className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 group-hover:text-indigo-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium group-hover:text-indigo-400 leading-4">Project</p>
                                        <p className="text-slate-400 text-sm hidden md:block">Data
                                            overview</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        // console.log('columsssss--->', column.name, columnId);
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                key={columnId}
                            >
                                <div className="flex ">
                                    <h1 className="font-medium font-black group-hover:text-indigo-400  leading-4 " >
                                        <span className="text-indigo-400 mr-1.5 font-bold text-lg lg:text-3xl ">.</span>{column.name.toUpperCase()}</h1></div>
                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        // background: snapshot.isDraggingOver
                                                        // ? 'lightblue'
                                                        // : '',
                                                        padding: 4,
                                                        width: 250,
                                                        minHeight: 500
                                                    }}
                                                    className="rounded-lg bg-white/10"
                                                >
                                                    {column.items.map((item, index) => {
                                                        // console.log("...provided.draggableProps", provided.draggableProps, provided.dragHandleProps)
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            onClick={() => handleSidebar(column.name, item)}
                                                                            style={{
                                                                                userSelect: 'none',
                                                                                // padding: 16,
                                                                                margin: '0 0 1px 0',
                                                                                // minHeight: '50px',
                                                                                // backgroundColor: snapshot.isDragging
                                                                                //     ? '#263B4A'
                                                                                //     : '#456C86',
                                                                                // color: 'white',
                                                                                ...provided.draggableProps.style
                                                                            }} data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                                                                            <div className="group p-4 transition-all duration-300 hover:rotate-1 bg-white shadow-lg lg:p-8 ">
                                                                                <div className="flex items-center gap-x-2">
                                                                                    <h3 className="text-xl font-bold " >{item.content}</h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        );
                    })}
                </DragDropContext>
            </div>
            {showSidebar && <div id="drawer-navigation" onClick={() => setShowSidebar(false)} className="fixed top-0 right-0 z-40 w-2/5  h-screen p-4 bg-white shadow-lg transition-all  overflow-y-auto bg-white-900  " tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button" onClick={() => setShowSidebar(false)} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="grid   mr-36  ">
                    <div id="menu" className=" col-span-3 rounded-lg p-4 ">
                        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white  to-transparent bg-clip-text ">{cardData.name}<span
                            className="text-indigo-400">.</span></h1>
                        <div className="py-4 overflow-y-auto">
                            <div className="space-y-3">
                                <div className="flex gap-12">
                                    <span className="flex ml-3 gap-2"><ImSpinner3 className="mt-1"/>Status</span>
                                    <span className="font-bold">{cardData.data}</span>
                                </div>
                                <span className="flex ml-3 gap-2"><CiSearch className="mt-1"/>Completion</span>
                                <span className="flex ml-3 gap-2"><CiCalendarDate className="mt-1"/>Dates</span>
                                <span className="flex ml-3 gap-2"><MdNotes className="mt-1"/>Description</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default App;
