import React, { useRef } from 'react'
import Input from '../../../layouts/form/input'
import TextArea from '../../../layouts/form/text-area'
import Button from '../../../layouts/form/button'
import Dropdown from '../../../layouts/form/dropdown'
import MultiSelect from '../../../layouts/form/multiSelect'
import data from "../../../assets/test.json"
import { Dialog } from '@mui/material'
export default function Form({ showModal, toggleModal }) {
    const singleSelect = useRef();
    const multiSelect = useRef();
    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            fullScreen={true}
            fullWidth={true}
            sx={{
                '& .MuiPaper-root': {
                    width: '80%',
                    height: 650,
                    maxWidth: 'none'
                },
            }}>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Add More Task</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => toggleModal(false)}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <Input label="Task Title" autoComplete={true} placeholder="Enter the task title..." type="text" />
                    <TextArea label="Description" placeholder="Enter the description..." rows={5} />
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Start Date" placeholder="Enter the start date..." type="date" />
                        </div>
                        <div className="col-md-6">
                            <Input label="End Date" placeholder="Enter the end date..." type="date" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown label="Status" options={data.option} ref={singleSelect} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Priority" options={data.option} />
                        </div>
                    </div>
                    <MultiSelect label="Assigned To" options={data.option} ref={multiSelect} />
                    <div className="flex-center">
                        <Button text="Submit" onClick={() => {
                            console.log(singleSelect.current.getValue())
                            console.log(multiSelect.current.getValue())
                        }}
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
