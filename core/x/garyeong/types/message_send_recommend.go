package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendRecommend = "send_recommend"

var _ sdk.Msg = &MsgSendRecommend{}

func NewMsgSendRecommend(creator string, reportId uint64) *MsgSendRecommend {
  return &MsgSendRecommend{
		Creator: creator,
    ReportId: reportId,
	}
}

func (msg *MsgSendRecommend) Route() string {
  return RouterKey
}

func (msg *MsgSendRecommend) Type() string {
  return TypeMsgSendRecommend
}

func (msg *MsgSendRecommend) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgSendRecommend) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgSendRecommend) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  	if err != nil {
  		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  	}
  return nil
}

