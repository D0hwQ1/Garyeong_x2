package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetProfile = "set_profile"

var _ sdk.Msg = &MsgSetProfile{}

func NewMsgSetProfile(creator string) *MsgSetProfile {
	return &MsgSetProfile{
		Creator: creator,
	}
}

func (msg *MsgSetProfile) Route() string {
	return RouterKey
}

func (msg *MsgSetProfile) Type() string {
	return TypeMsgSetProfile
}

func (msg *MsgSetProfile) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetProfile) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetProfile) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
