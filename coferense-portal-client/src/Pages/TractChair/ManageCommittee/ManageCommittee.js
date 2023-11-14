import React, { useState } from 'react';
import './manageCommittee.css'
import { AiOutlineUserAdd } from 'react-icons/ai'

const ManageCommittee = () => {
    const [formData, setFormData] = useState({
        committeeName: "",
        members: [{
            name: '',
            affiliation: '',
            email: '',
            designation: "",
        }],

    });
    const [subcommittee, setSubCommittee] = useState({
        subCommitteeName: "",
        subCommitteeMembers: []
    })
    const addFields = () => {
        let object = {
            name: '',
            affiliation: '',
            email: '',
            designation: ""
        }
        let members = [...formData['members'], object]
        setFormData({ ...formData, members })
        console.log(formData);
    }
    const addSubCommittee = () => {
        let object = {
            name: '',
            affiliation: '',
            email: '',
            designation: ""
        }
        let subCommitteeMembers = [...subcommittee['subCommitteeMembers'], object]
        setSubCommittee({ ...subcommittee, subCommitteeMembers })
        console.log(subcommittee);
    }
    const handleAddingSubCommittee = () => {
        let object = {
            name: '',
            affiliation: '',
            email: '',
            designation: ""
        }
        let subCommitteeMembers = [...subcommittee['subCommitteeMembers'], object]
        setSubCommittee({ ...subcommittee, subCommitteeMembers })
        console.log(subcommittee);
    }
    const handleFormChange = (event, index) => {

        let data = [...formData['members']];
        data[index][event.target.name] = event.target.value;
        console.log(data);
    }
    return (
        <div className='committeeInputField TitleForCreatingCommittee'>
            <h4 className='text-center'>Add Committee Here</h4>
            <div className='mainCommitteeContainer forWidth'>
                <div className=''>
                    <div className='committeeName'>
                        <label for="name" className='labelStyle'> Committee Name : </label>
                        <input type="text" id="name" name="name" onChange={(e) => handleFormChange(e)} />
                    </div>
                    {

                        formData.members.map((val, index) => {
                            return (
                                <div className='d-flex subCommitteeInputContainer'>
                                    <div>
                                        <label for="name">Name : </label>
                                        <input type="text" id="name" name="name" onChange={(e) => handleFormChange(e, index)} />
                                    </div>
                                    <div>
                                        <label for="affiliation">Affiliation : </label>
                                        <input type="text" id="affiliation" name="affiliation" onChange={(e) => handleFormChange(e, index)} />
                                    </div>
                                    <div>
                                        <label for="email">Email : </label>
                                        <input type="email" id="email" name="email" onChange={(e) => handleFormChange(e, index)} />
                                    </div>
                                    <div>
                                        <label for="designation">Designation : </label>
                                        <input type="text" id="designation" name="designation" onChange={(e) => handleFormChange(e, index)} />
                                    </div>
                                </div>
                            );
                        })

                    }
                </div>

                <div className='buttonContainer'>
                    <button onClick={addFields} className="add btn btn-outline-secondary buttonStyle"><AiOutlineUserAdd className="fs-4" /> <strong className="mx-2">Add New Member</strong></button>
                </div>

            </div>


            <section className='text-center'>
                <div className='mainCommitteeContainer'>


                    {
                        subcommittee.subCommitteeMembers.length ? "" : <button onClick={addSubCommittee} className="btn btn-outline-secondary d-flex align-items-center"><AiOutlineUserAdd className="fs-4" /> <strong className="mx-2">Add SubCommittee</strong></button>
                    }


                    <div className=''>
                    {
                        subcommittee.subCommitteeMembers.length ? <h4>Add Sub Committee Member Here</h4> : ""
                    }
                    
                        {

                            subcommittee.subCommitteeMembers.map((val, index) => {
                                return (
                                    <>
                                        
                                        <div className='d-flex subCommitteeInputContainer'>

                                            <div>
                                                <label for="name">Name : </label>
                                                <input type="text" id="name" name="name" onChange={(e) => handleFormChange(e, index)} />
                                            </div>
                                            <div>
                                                <label for="affiliation">Affiliation : </label>
                                                <input type="text" id="affiliation" name="affiliation" onChange={(e) => handleFormChange(e, index)} />
                                            </div>
                                            <div>
                                                <label for="email">Email : </label>
                                                <input type="email" id="email" name="email" onChange={(e) => handleFormChange(e, index)} />
                                            </div>
                                            <div>
                                                <label for="designation">Designation : </label>
                                                <input type="text" id="designation" name="designation" onChange={(e) => handleFormChange(e, index)} />
                                            </div>
                                        </div>
                                    </>

                                );
                            })

                        }
                        {
                            subcommittee.subCommitteeMembers.length ? <div className='buttonContainer'>
                                <button onClick={handleAddingSubCommittee} className=" btn btn-outline-secondary"><AiOutlineUserAdd className="fs-4" /> <strong>Add More Member</strong></button>
                            </div> : ""
                        }



                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageCommittee;