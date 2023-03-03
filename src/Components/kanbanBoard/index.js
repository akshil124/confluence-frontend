import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImSpinner3 } from 'react-icons/im';
import { CiSearch, CiCalendarDate } from 'react-icons/ci';
import { MdNotes, MdAttachFile, MdAlternateEmail, MdOutlinePeople } from 'react-icons/md';
import { AiOutlineUpload, AiOutlineCloudUpload } from 'react-icons/ai';
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

const cloudName = 'dr2ggviyh'; // replace with your own cloud name
const uploadPreset = 'an3moc8v'; // replace with your own upload preset

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

function CanBanBoard () {
    const [columns, setColumns] = useState(taskStatus);
    const [showSidebar, setShowSidebar] = useState(false);
    const [cardData, setCardData] = useState();
    const [imageUrl, setImageUrl] = useState([]);
    useEffect(() => {
    }, [columns]);
    const handleSidebar = (data, item) => {
        // console.log('item-->', data, item);
        setShowSidebar(true);
        setCardData({ ...cardData, data, name: item.content });
    };
    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]');
        const formData = new FormData();
        // console.log('filew', files);
        formData.append('file', files[0]);
        formData.append('upload_preset', uploadPreset);
        const options = {
            method: 'POST',
            body: formData
        };
        return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, options)
            .then(res => res.json())
            .then(res => {
                // console.log('res', res);
                setImageUrl([...imageUrl, res.secure_url]);
            })
            // eslint-disable-next-line no-console
            .catch(err => console.log(err));
    };
    // console.log('item', cardData);
    return (
        <div className="antialiased w-full min-h-screen relative">
            <div className="py-4 gap-2 px-2"

                style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
            >
                <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                className='w-1/4'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                key={columnId}
                            >
                                <div className="flex ">
                                    <h1 className="font-medium font-black group-hover:text-indigo-400  leading-4 " >
                                        <span className="text-indigo-400 mr-1.5 font-bold text-lg lg:text-3xl ">.</span>{column.name}</h1></div>
                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    className="rounded-lg bg-white/10 p-4 w-full"
                                                >
                                                    {column.items && column.items.map((item, index) => {
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
                                                                            className='w-full mb-3'
                                                                            style={{
                                                                                ...provided.draggableProps.style
                                                                            }} data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                                                                            <div className="group p-4 transition-all duration-300  bg-white shadow-lg lg:p-5 ">
                                                                                <div className="flex items-center gap-x-2">
                                                                                    {/* <h3 className="text-xl font-bold " >{item.content}</h3> */}
                                                                                    {/* <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl "> */}
                                                                                    <div className="flex items-start px-4 py-6">
                                                                                        <div className="">
                                                                                            <div className="flex items-center justify-between">
                                                                                                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{item.content}</h2>
                                                                                                <small className="text-sm text-gray-700">22h ago</small>
                                                                                            </div>
                                                                                            <p className="text-gray-700">Joined 12 SEP 2012. </p>
                                                                                            <p className="mt-3 text-gray-700 text-sm">
                                                                                                Lorem ipsum,
                                                                                                dolor sit amet
                                                                                                conse. Saepe
                                                                                                optio minus rem
                                                                                                dolor sit amet!
                                                                                            </p>
                                                                                            <div className="mt-4 flex items-center">
                                                                                                <div
                                                                                                    className="flex mr-2 text-gray-700 text-sm mr-8">
                                                                                                    <svg
                                                                                                        fill="none"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        className="w-4 h-4 mr-1"
                                                                                                        stroke="currentColor">
                                                                                                        <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2"
                                                                                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                                                                                    </svg>
                                                                                                    <span>8</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
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
            {showSidebar && <div id="drawer-navigation" className="fixed top-0 right-0 group p-4 transition-all duration-300  bg-white  lg:p-8 w-2/5  h-screen p-4 shadow-2xl bg-white z-50 transition-all  overflow-y-auto bg-white-900  " tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button" onClick={() => setShowSidebar(false)} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="grid   mr-36">
                    <div id="menu" className=" col-span-3 rounded-lg p-4 ">
                        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white  to-transparent bg-clip-text ">{cardData.name}<span
                            className="text-indigo-400">.</span></h1>
                        <div className="py-4 overflow-y-auto">
                            <div className="space-y-3">
                                <div className="flex gap-12">
                                    <span className="flex ml-3 gap-2"><ImSpinner3 className="mt-1"/>Status</span>
                                    <span className="font-bold">{cardData.data}</span>
                                </div>
                                <div className="flex gap-12">
                                    <span className="flex ml-3 gap-2"><MdOutlinePeople className="mt-1"/>People</span>
                                </div>
                                <span className="flex ml-3 gap-2"><CiSearch className="mt-1"/>Completion</span>
                                <div className="flex gap-12">
                                    <span className="flex ml-3 gap-2"><CiCalendarDate className="mt-1"/>Dates</span>
                                    <span className="font-bold">{new Date().toLocaleString()}</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="flex ml-3 gap-2"><MdNotes className="mt-1"/>Description</span>
                                    <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="flex gap-6">
                                    <span className="flex ml-3 gap-2"><AiOutlineUpload className="mt-1"/>Upload</span>
                                    <input type="file" multiple/>
                                    <button type="button" className="" onClick={handleImageUpload}>Submit</button>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex ml-3"> <img className="rounded-full w-6 h-6 relative object-cover mt-1"
                                        src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                                        alt=""/></div>
                                    <div className="flex gap-5">
                                        <input placeholder='add a comment.....' className="w-full rounded-md border border-[#e0e0e0] bg-white  text-base font-medium text-[#6B7280] outline-none py-1 px-6 focus:border-[#6A64F1] focus:shadow-md"/>
                                        <div className='flex'> <MdAttachFile className="mt-2" /><MdAlternateEmail className="mt-2 ml-5"/><AiOutlineCloudUpload className="mt-2 ml-5" /></div>
                                    </div>
                                </div>
                                <div>
                                    {imageUrl && imageUrl.map((img, index) => (
                                        <img src={img} alt="" key={index} className="w-[500px]"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default CanBanBoard;
