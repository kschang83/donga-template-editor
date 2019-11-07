import React, { Component } from "react";

import "./TemplateEditor.css";
import "./TemplateEditorMain.css";
import ListComponentText from "./ListComponentText.js";
import ListComponentImage from "./ListComponentImage.js";
import ListComponentVideo from "./ListComponentVideo.js";

class ListComponent extends Component {
  state = {
    popEdit: false,
    popType: "",
    isText: true,
    isImage: false,
    isVideo: false,
    TEXT: [
      {
        ID: "C1",
        TITLE: "제목",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 550,
            HEIGHT: 40,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            BACKGROUNDCOLOR: "#FFFFFF",
            TEXTALIGN: ""
          },
          ICON: {
            TYPE: "none",
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 19,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#191919",
            LINEHEIGHT: 40
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "TITLE"
          }
        }
      },
      {
        ID: "C2",
        TITLE: "부제목",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 550,
            HEIGHT: 40,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: ""
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 17,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#191919",
            LINEHEIGHT: 40
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "SUBTITLE"
          }
        }
      },
      {
        ID: "C3",
        TITLE: "소제목",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 550,
            HEIGHT: 40,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: ""
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 17,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#191919",
            LINEHEIGHT: 40
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "STRAPLINE"
          }
        }
      },
      {
        ID: "C4",
        TITLE: "표제",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 550,
            HEIGHT: 80,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 15,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#191919",
            LINEHEIGHT: 40
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "HEADLINE"
          }
        }
      },
      {
        ID: "C5",
        TITLE: "본문",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 600,
            HEIGHT: 800,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 10,
              PADDINGRIGHT: 20,
              PADDINGBOTTOM: 10,
              PADDINGLEFT: 20
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#363636",
            LINEHEIGHT: 20
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "BODY"
          }
        }
      },
      {
        ID: "C6",
        TITLE: "발문",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 500,
            HEIGHT: 60,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "",
            COLOR: "#191919",
            LINEHEIGHT: 40
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "EPILOGUE"
          }
        }
      },
      {
        ID: "C7",
        TITLE: "날짜",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 200,
            HEIGHT: 30,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "돋움",
            FONTSIZE: 12,
            FONTSTYLE: "normal",
            FONTWEIGHT: "",
            COLOR: "#8b8b8b",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "REGDATE"
          }
        }
      },
      {
        ID: "C8",
        TITLE: "관련기사",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 500,
            HEIGHT: 40,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 39,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 42
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "",
            COLOR: "#191919",
            "LINE-HEIGHT": 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "RELATE_NEWS"
          }
        }
      },
      {
        ID: "C9",
        TITLE: "주요기사",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 500,
            HEIGHT: 61,
            BORDER: {
              BORDERWIDTH: 1,
              BORDERSTYLE: "solid",
              BORDERCOLOR: "#f2f3f5"
            },
            PADDING: {
              PADDINGTOP: 4,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 4,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 15,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#191919",
            LINEHEIGHT: 20
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "LEADING_NEWS"
          }
        }
      },
      {
        ID: "C10",
        TITLE: "바이라인",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 200,
            HEIGHT: 30,
            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "돋움",
            FONTSIZE: 12,
            FONTSTYLE: "normal",
            FONTWEIGHT: "",
            COLOR: "#191919",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "BYLINE"
          }
        }
      },
      {
        ID: "C11",
        TITLE: "출처",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 200,
            HEIGHT: 30,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "돋움",
            FONTSIZE: 12,
            FONTSTYLE: "normal",
            FONTWEIGHT: "",
            COLOR: "#191919",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "COPYRIGHT"
          }
        }
      },
      {
        ID: "C12",
        TITLE: "분류",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 200,
            HEIGHT: 30,
            BORDER: {
              BORDERWIDTH: 1,
              BORDERSTYLE: "",
              BORDERCOLOR: "#4762ae"
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 3,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#4762ae",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "CATEGORY"
          }
        }
      },
      {
        ID: "C13",
        TITLE: "라벨",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 200,
            HEIGHT: 30,
            BORDER: {
              BORDERWIDTH: 1,
              BORDERSTYLE: "",
              BORDERCOLOR: "#4762ae"
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 3,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#FFFFFF",
            TEXTALIGN: "center"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#4762ae",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "LABEL"
          }
        }
      }
    ],
    IMAGE: [
      {
        ID: "C14",
        TITLE: "이미지일반",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 180,
            HEIGHT: 120,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#e5e5e5",
            TEXTALIGN: "left"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#4762ae",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "LABEL"
          },
          PHOTOINFO: {
            PHOTODATE: "",
            PHOTOPLACE: ""
          },
          FILEINFO: {
            FILENAME: "",
            FILEPATH: "",
            FILEFORMAT: "",
            DESCRIPTION: "",
            CAPTION: "",
            FILESIZE: "",
            RESOLUTION: ""
          },
          WATERMARK: false
        }
      }
    ],
    VIDEO: [
      {
        ID: "C15",
        TITLE: "동영상일반",
        ATTRIBUTE: {
          BOX: {
            WIDTH: 840,
            HEIGHT: 470,

            BORDER: {
              BORDERWIDTH: 0,
              BORDERSTYLE: "",
              BORDERCOLOR: ""
            },
            PADDING: {
              PADDINGTOP: 0,
              PADDINGRIGHT: 0,
              PADDINGBOTTOM: 0,
              PADDINGLEFT: 0
            },
            MARGIN: {
              MARGINTOP: 0,
              MARGINRIGHT: 30,
              MARGINBOTTOM: 0,
              MARGINLEFT: 0
            },
            "BACKGROUND-COLOR": "#000000",
            TEXTALIGN: "left"
          },
          ICON: {
            NUMBER: "",
            LOCATION: "front"
          },
          FONT: {
            FONTFAMILY: "맑은 고딕",
            FONTSIZE: 14,
            FONTSTYLE: "normal",
            FONTWEIGHT: "bold",
            COLOR: "#4762ae",
            LINEHEIGHT: 0
          },
          LINK: {
            URL: "",
            TARGET: "_blank"
          },
          MAPPING: {
            FIELD: "LABEL"
          },
          PHOTOINFO: {
            PHOTODATE: "",
            PHOTOPLACE: ""
          },
          FILEINFO: {
            FILENAME: "",
            FILEPATH: "",
            FILEFORMAT: "",
            FILESIZE: "",
            DESCRIPTION: "",
            RESOLUTION: "",
            PLAYTIME: "",
            HEADIMAGE: ""
          }
        }
      }
    ]
  };

  //메소드 작성 (컴포넌트 유형 선택)
  handleComponentSel = e => {
    const val = e.target.value;
    if (e.target.className === "pop_component_type") {
      this.setState({
        ...this.state,
        popEdit: true,
        popType: val
      });
    } else {
      switch (val) {
        case "text":
          this.setState({
            ...this.state,
            isText: true,
            isImage: false,
            isVideo: false
          });
          break;
        case "image":
          this.setState({
            ...this.state,
            isText: false,
            isImage: true,
            isVideo: false
          });
          break;
        case "video":
          this.setState({
            ...this.state,
            isText: false,
            isImage: false,
            isVideo: true
          });
          break;
        default:
          break;
      }
    }
  };

  render() {
    let editType = "";
    let isPop = false;
    let addInfo = {};

    //main화면에서 component Type 추가 버튼을 통해 component 편집 dialog open
    if (this.props.addInfo !== undefined && this.state.popEdit === false) {
      isPop = true;
      addInfo = this.props.addInfo;
      editType = addInfo.compoType;
    }

    //component 편집 dialog 내에서 type 선택
    if (this.state.popEdit === true) {
      isPop = true;
      const popType = this.state.popType;
      editType = popType;
    }

    return (
      <div>
        <select
          className={isPop ? "pop_component_type" : "component_type"}
          defaultValue={editType}
          onChange={this.handleComponentSel}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <div>
          {this.state.isText ? (
            <ListComponentText
              text_data={this.state.TEXT}
              isPop={isPop}
              addInfo={addInfo}
            />
          ) : null}
          {this.state.isImage ? (
            <ListComponentImage
              image_data={this.state.IMAGE}
              isPop={isPop}
              addInfo={addInfo}
            />
          ) : null}
          {this.state.isVideo ? (
            <ListComponentVideo
              video_data={this.state.VIDEO}
              isPop={isPop}
              addInfo={addInfo}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ListComponent;
