import React, { useState } from "react";
import ReactModal from "react-modal";

import "./TemplateEditor.css";
import "./TemplateEditorMain.css";
import "./MainBodyCenterTemplateEditor.css";

import newTemplateIcon from "../img/positive-sign.png";
import rightArrow from "../img/right-arrow.png";
import leftArrow from "../img/left-arrow.png";

const MainBodyCenterTemplateEditor = ({
  editDatas,
  onInsert,
  setActiveTab
}) => {
  console.log("MainBodyCenterTemplateEditor", editDatas);

  const [isOpenDlg, setIsOpenDlg] = useState(false);
  const [datas, setDatas] = useState({
    id: "",
    name: "",
    description: "",
    width: 0,
    height: 0
  });

  const { id, name, description, width, height } = datas;

  const handleOpenDialog = e => {
    setIsOpenDlg(true);
  };

  const handleCloseDialog = e => {
    setIsOpenDlg(false);
  };

  const handleOnChange = e => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value
    });
  };

  const handleMakeNewTemplate = e => {
    setIsOpenDlg(false);
    onInsert(datas);

    const activeTab = {
      tabActive: true,
      tabIndex: 0 // 0:템플릿속성Tab 1:컴포넌트속성Tab
    };
    setActiveTab(activeTab);
  };

  return (
    <div>
      <div className="editorHeader" id="editorHeader">
        <div className="openDialogBtn">
          <img
            className="newTemplateDialogOpen"
            src={newTemplateIcon}
            alt="newTemplateDialogOpenBtn"
            onClick={handleOpenDialog}
          />
          <ReactModal
            isOpen={isOpenDlg}
            contentLabel="신규 템플릿 생성"
            className="newTemplateModalOveray"
            ariaHideApp={false}
          >
            <div className="createBox">
              <div className="templateId">템플릿 아이디 : {id}</div>
              <input
                type="text"
                className="templateName"
                placeholder="템플릿 이름"
                name="name"
                value={name}
                onChange={handleOnChange}
              />
              <div className="template_width_tx">width</div>{" "}
              <input
                type="number"
                className="template_width"
                name="width"
                value={width}
                onChange={handleOnChange}
              />
              <div className="width_px">px</div>
              <div className="template_height_tx">height</div>{" "}
              <input
                type="number"
                className="template_height"
                name="height"
                value={height}
                onChange={handleOnChange}
              />
              <div className="height_px">px</div>
              <button
                className="NewTemplate_cancle"
                onClick={handleCloseDialog}
              >
                취소
              </button>
              <button
                className="NewTemplate_create"
                onClick={handleMakeNewTemplate}
              >
                생성
              </button>
            </div>
          </ReactModal>
        </div>
        <div className="openTemplateName">
          <span className="tName">{editDatas.name} </span>
          <span className="tSize">
            {editDatas.width > 0 && editDatas.height > 0
              ? "(" + editDatas.width + " X " + editDatas.height + ")"
              : ""}
          </span>
        </div>
        <div className="openTemplateRegInfo"></div>
      </div>
      <div className="editorMain" id="TemplateEditorAreaMain"></div>
      <div className="editorFooter">
        <div className="actionBtn">
          <button className="reset">초기화</button>
          <button className="save">저장</button>
        </div>
      </div>
    </div>
  );
};

export default MainBodyCenterTemplateEditor;
