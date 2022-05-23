import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {useListView} from '../core/ListViewProvider'

import {Editor} from 'react-draft-wysiwyg'
import {EditorState} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import clsx from 'clsx'

type Props = {
  values: any
  setFieldValue: any
}

const Step2: FC<Props> = ({values, setFieldValue}) => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
  const [options, setOptions] = useState<any>([{option: '', right_option: 0}])

  const editor: any = React.useRef(null)

  useEffect(() => {
    console.log(options, 'options')
  }, [options])

  const log = () => {
    if (editor.current) {
      console.log(editor?.current.getContent())
    }
  }

  React.useEffect(() => {
    focusEditor()
  }, [])

  function focusEditor () {
    editor?.current?.focus()
  }

  return (
    <div className='w-100'>
      <div className='fv-row mb-10'>
        <label className='form-label'>Select Language</label>

        <Field
          as='select'
          name='question.language'
          className='form-select mb-2'
          data-control='select2'
          data-hide-search='true'
          data-placeholder='Select an option'
        >
          <option></option>
          <option>HINDI</option>
          <option>ENGLISH</option>
        </Field>
        {/* <div className='text-danger mt-2'>
              <ErrorMessage name='bank.bank_status' />
            </div> */}
      </div>

      {values?.question?.language != '' && (
        <>
          <div className='fv-row w-100 mb-10'>
            <label className='form-label required'>Question</label>
            <Editor
              editorState={editorState}
              toolbarClassName='toolbarClassName'
              wrapperClassName='demo-wrapper'
              editorClassName='editorClassName'
              // onEditorStateChange={onEditorStateChange}
            />
            {/* <div className='text-danger mt-2'>
              <ErrorMessage name='question.question' />
            </div> */}
          </div>
          <div className='fv-row w-100 mb-10'>
            <label className='form-label required'>Solution</label>
            <Editor
              editorState={editorState}
              toolbarClassName='toolbarClassName'
              wrapperClassName='wrapperClassName'
              editorClassName='editorClassName'
              // onEditorStateChange={onEditorStateChange}
            />
            {/* <div className='text-danger mt-2'>
              <ErrorMessage name='question.solution' />
            </div> */}
          </div>
          <div className='fv-row w-100 mb-10'>
            <label className='form-label required'>Question Hint</label>
            <textarea rows={3} className='form-control mb-2' />
            {/* <div className='text-danger mt-2'>
              <ErrorMessage name='question.hint' />
            </div> */}
          </div>
          <div className='fv-row w-100 mb-10'>
            <div id='kt_ecommerce_add_category_conditions'>
              <div data-repeater-item='' className='form-group d-flex flex-wrap gap-5 mb-5'>
                <div className='w-100 mw-100 w-550px'>
                  <label className='form-label required'>Options</label>
                </div>
                <label className='form-label w-50px'>Right Option</label>
                <label className='form-label w-40px'>Remove</label>
              </div>

              {options.map((item: any, i: any) => (
                <div className='form-group' key={i}>
                  <div
                    data-repeater-list='kt_ecommerce_add_category_conditions'
                    className='d-flex flex-column gap-3'
                  >
                    <div data-repeater-item='' className='form-group d-flex flex-wrap gap-10'>
                      <div className='w-100 mw-100 w-550px'>
                        <Editor
                          editorState={editorState}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='wrapperClassName'
                          editorClassName='editorClassName'
                          // onEditorStateChange={onEditorStateChange}
                        />
                      </div>
                      {values.question_type == 'MCQ' ? (
                        <Field
                          className='form-check-input'
                          type='checkbox'
                          checked={item.right_option == 1 ? true : false}
                          name='right_option'
                          onChange={(e: any) => {
                            const data = [...options]
                            data[i] = {...data[i], right_option: e.currentTarget.checked ? 1 : 0}
                            setOptions(data)
                          }}
                        />
                      ) : (
                        <input
                          name='right_option'
                          type={'radio'}
                          value={i}
                          onChange={async (e: any) => {
                            const data = [...options]
                            await data.map((x: any) => {
                              x.right_option = 0
                            })
                            data[i] = {...data[i], right_option: 1}
                            setOptions(data)
                          }}
                          checked={item.right_option == 1}
                          id={`right_option_${i}`}
                          className={clsx('form-check-input mb-3 mb-lg-0')}
                          autoComplete='off'
                        />
                      )}
                      <button
                        type='button'
                        onClick={() => {
                          const data = [...options]
                          data.splice(i, 1)
                          setOptions(data)
                        }}
                        data-repeater-delete=''
                        className='btn btn-sm btn-icon btn-light-danger'
                      >
                        <span className='svg-icon svg-icon-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <rect
                              opacity='0.5'
                              x='7.05025'
                              y='15.5356'
                              width='12'
                              height='2'
                              rx='1'
                              transform='rotate(-45 7.05025 15.5356)'
                              fill='currentColor'
                            />
                            <rect
                              x='8.46447'
                              y='7.05029'
                              width='12'
                              height='2'
                              rx='1'
                              transform='rotate(45 8.46447 7.05029)'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className='form-group mt-5'>
                <button
                  type='button'
                  onClick={() => setOptions([...options, {option: '', right_option: 0}])}
                  data-repeater-create=''
                  className='btn btn-sm btn-light-primary'
                >
                  <span className='svg-icon svg-icon-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <rect
                        opacity='0.5'
                        x='11'
                        y='18'
                        width='12'
                        height='2'
                        rx='1'
                        transform='rotate(-90 11 18)'
                        fill='currentColor'
                      />
                      <rect x='6' y='11' width='12' height='2' rx='1' fill='currentColor' />
                    </svg>
                  </span>
                  Add another option
                </button>
              </div>
            </div>
          </div>{' '}
        </>
      )}
    </div>
  )
}

export {Step2}
