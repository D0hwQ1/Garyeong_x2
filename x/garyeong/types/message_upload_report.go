package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUploadReport = "upload_report"

var _ sdk.Msg = &MsgUploadReport{}

func NewMsgUploadReport(creator string, target string, link string, description string, tags []string) *MsgUploadReport {
	return &MsgUploadReport{
		Creator:     creator,
		Target:      target,
		Link:        link,
		Description: description,
		Tags:        tags,
	}
}

func (msg *MsgUploadReport) Route() string {
	return RouterKey
}

func (msg *MsgUploadReport) Type() string {
	return TypeMsgUploadReport
}

func (msg *MsgUploadReport) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUploadReport) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUploadReport) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
