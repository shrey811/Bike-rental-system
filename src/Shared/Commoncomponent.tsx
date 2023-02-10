import { CloseCircleFilled, SaveFilled } from "@ant-design/icons";
import { Button, Space, SpaceProps } from "antd";

const FormGroupButtonSpacing = (props: SpaceProps) => {
    return (
        <Space>
            {props.children}
        </Space>
    );
};

export default FormGroupButtonSpacing;

interface formSubmitButtonProps {
    submitLoading?: boolean;
    cancleLoading?: boolean;
    onClickSubmit?: () => void;
    onClickCancle?: () => void;
    isNextButton?: boolean

}
export const FormSubmitButton = (props: formSubmitButtonProps) => {


    return (
        <Space>
            <Button
                icon={<SaveFilled />}
                type="primary"
                htmlType='submit'
                loading={props.submitLoading}
                onClick={props.onClickSubmit}
            >
                {props.isNextButton ? ("Next") : ("Save")}
            </Button>

            <Button
                type="default"
                icon={<CloseCircleFilled />}
                onClick={props.onClickCancle}
                disabled={props.cancleLoading}
            >
                {"Cancel"}
            </Button>
        </Space>
    );
};