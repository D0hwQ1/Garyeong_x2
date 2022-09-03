package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendReport = "send_report"

var _ sdk.Msg = &MsgSendReport{}

func NewMsgSendReport(creator string, target string, link string, description string, tags string) *MsgSendReport {
	return &MsgSendReport{
		Creator:     creator,
		Target:      target,
		Link:        link,
		Description: description,
		Tags:        tags,
	}
}

func (msg *MsgSendReport) Route() string {
	return RouterKey
}

func (msg *MsgSendReport) Type() string {
	return TypeMsgSendReport
}

func (msg *MsgSendReport) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendReport) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendReport) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
