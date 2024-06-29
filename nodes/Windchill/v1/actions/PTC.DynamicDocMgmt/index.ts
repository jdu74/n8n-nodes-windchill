import * as ActionCreateXliffLink from './Action_CreateXliffLink';
import * as ActionEditDynamicDocumentsSecurityLabels from './Action_EditDynamicDocumentsSecurityLabels';
import * as ActionReviseBurstConfigurations from './Action_ReviseBurstConfigurations';
import * as ActionReviseDynamicDocuments from './Action_ReviseDynamicDocuments';
import * as ActionReviseNotes from './Action_ReviseNotes';
import * as ActionSetStateBurstConfigurations from './Action_SetStateBurstConfigurations';
import * as ActionSetStateDynamicDocuments from './Action_SetStateDynamicDocuments';
import * as ActionSetStateNotes from './Action_SetStateNotes';
import * as ActionUpdateDynamicDocuments from './Action_UpdateDynamicDocuments';
import * as BurstConfigurationAttachmentsGetContentItem from './BurstConfiguration.Attachments.GetContentItem';
import * as BurstConfigurationAttachmentsGetContentItems from './BurstConfiguration.Attachments.GetContentItems';
import * as BurstConfigurationContextGetContainer from './BurstConfiguration.Context.GetContainer';
import * as BurstConfigurationCreatorGetUser from './BurstConfiguration.Creator.GetUser';
import * as BurstConfigurationFolderGetFolder from './BurstConfiguration.Folder.GetFolder';
import * as BurstConfigurationMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember from './BurstConfiguration.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember';
import * as BurstConfigurationMemberLinksGetDynamicDocumentMember from './BurstConfiguration.MemberLinks.GetDynamicDocumentMember';
import * as BurstConfigurationMemberLinksGetDynamicDocumentMembers from './BurstConfiguration.MemberLinks.GetDynamicDocumentMembers';
import * as BurstConfigurationMemberLinksPostDynamicDocumentMember from './BurstConfiguration.MemberLinks.PostDynamicDocumentMember';
import * as BurstConfigurationMemberLinksUpdateDynamicDocumentMember from './BurstConfiguration.MemberLinks.UpdateDynamicDocumentMember';
import * as BurstConfigurationModifierGetUser from './BurstConfiguration.Modifier.GetUser';
import * as BurstConfigurationOrganizationGetOrganization from './BurstConfiguration.Organization.GetOrganization';
import * as BurstConfigurationPrimaryContentGetContentItem from './BurstConfiguration.PrimaryContent.GetContentItem';
import * as BurstConfigurationReferencedByGetDynamicDocument from './BurstConfiguration.ReferencedBy.GetDynamicDocument';
import * as BurstConfigurationReferencedByGetDynamicDocuments from './BurstConfiguration.ReferencedBy.GetDynamicDocuments';
import * as BurstConfigurationReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference from './BurstConfiguration.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference';
import * as BurstConfigurationReferenceLinksGetDynamicDocumentReference from './BurstConfiguration.ReferenceLinks.GetDynamicDocumentReference';
import * as BurstConfigurationReferenceLinksGetDynamicDocumentReferences from './BurstConfiguration.ReferenceLinks.GetDynamicDocumentReferences';
import * as BurstConfigurationReferenceLinksPostDynamicDocumentReference from './BurstConfiguration.ReferenceLinks.PostDynamicDocumentReference';
import * as BurstConfigurationReferenceLinksUpdateDynamicDocumentReference from './BurstConfiguration.ReferenceLinks.UpdateDynamicDocumentReference';
import * as BurstConfigurationRepresentationsGetRepresentation from './BurstConfiguration.Representations.GetRepresentation';
import * as BurstConfigurationRepresentationsGetRepresentations from './BurstConfiguration.Representations.GetRepresentations';
import * as BurstConfigurationRevisionsGetDynamicDocument from './BurstConfiguration.Revisions.GetDynamicDocument';
import * as BurstConfigurationRevisionsGetDynamicDocuments from './BurstConfiguration.Revisions.GetDynamicDocuments';
import * as BurstConfigurationTranslationsGetDynamicDocument from './BurstConfiguration.Translations.GetDynamicDocument';
import * as BurstConfigurationTranslationsGetDynamicDocuments from './BurstConfiguration.Translations.GetDynamicDocuments';
import * as BurstConfigurationUsedByGetDynamicDocument from './BurstConfiguration.UsedBy.GetDynamicDocument';
import * as BurstConfigurationUsedByGetDynamicDocuments from './BurstConfiguration.UsedBy.GetDynamicDocuments';
import * as BurstConfigurationVersionsGetDynamicDocument from './BurstConfiguration.Versions.GetDynamicDocument';
import * as BurstConfigurationVersionsGetDynamicDocuments from './BurstConfiguration.Versions.GetDynamicDocuments';
import * as BurstConfigurationXliffGetDynamicDocument from './BurstConfiguration.Xliff.GetDynamicDocument';
import * as BurstConfigurationXliffGetDynamicDocuments from './BurstConfiguration.Xliff.GetDynamicDocuments';
import * as DynamicDocumentAttachmentsGetContentItem from './DynamicDocument.Attachments.GetContentItem';
import * as DynamicDocumentAttachmentsGetContentItems from './DynamicDocument.Attachments.GetContentItems';
import * as DynamicDocumentContextGetContainer from './DynamicDocument.Context.GetContainer';
import * as DynamicDocumentCreatorGetUser from './DynamicDocument.Creator.GetUser';
import * as DynamicDocumentFolderGetFolder from './DynamicDocument.Folder.GetFolder';
import * as DynamicDocumentMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember from './DynamicDocument.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember';
import * as DynamicDocumentMemberLinksGetDynamicDocumentMember from './DynamicDocument.MemberLinks.GetDynamicDocumentMember';
import * as DynamicDocumentMemberLinksGetDynamicDocumentMembers from './DynamicDocument.MemberLinks.GetDynamicDocumentMembers';
import * as DynamicDocumentMemberLinksPostDynamicDocumentMember from './DynamicDocument.MemberLinks.PostDynamicDocumentMember';
import * as DynamicDocumentMemberLinksUpdateDynamicDocumentMember from './DynamicDocument.MemberLinks.UpdateDynamicDocumentMember';
import * as DynamicDocumentModifierGetUser from './DynamicDocument.Modifier.GetUser';
import * as DynamicDocumentOrganizationGetOrganization from './DynamicDocument.Organization.GetOrganization';
import * as DynamicDocumentPrimaryContentGetContentItem from './DynamicDocument.PrimaryContent.GetContentItem';
import * as DynamicDocumentReferencedByGetDynamicDocument from './DynamicDocument.ReferencedBy.GetDynamicDocument';
import * as DynamicDocumentReferencedByGetDynamicDocuments from './DynamicDocument.ReferencedBy.GetDynamicDocuments';
import * as DynamicDocumentReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference from './DynamicDocument.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference';
import * as DynamicDocumentReferenceLinksGetDynamicDocumentReference from './DynamicDocument.ReferenceLinks.GetDynamicDocumentReference';
import * as DynamicDocumentReferenceLinksGetDynamicDocumentReferences from './DynamicDocument.ReferenceLinks.GetDynamicDocumentReferences';
import * as DynamicDocumentReferenceLinksPostDynamicDocumentReference from './DynamicDocument.ReferenceLinks.PostDynamicDocumentReference';
import * as DynamicDocumentReferenceLinksUpdateDynamicDocumentReference from './DynamicDocument.ReferenceLinks.UpdateDynamicDocumentReference';
import * as DynamicDocumentRepresentationsGetRepresentation from './DynamicDocument.Representations.GetRepresentation';
import * as DynamicDocumentRepresentationsGetRepresentations from './DynamicDocument.Representations.GetRepresentations';
import * as DynamicDocumentRevisionsGetDynamicDocument from './DynamicDocument.Revisions.GetDynamicDocument';
import * as DynamicDocumentRevisionsGetDynamicDocuments from './DynamicDocument.Revisions.GetDynamicDocuments';
import * as DynamicDocumentTranslationsGetDynamicDocument from './DynamicDocument.Translations.GetDynamicDocument';
import * as DynamicDocumentTranslationsGetDynamicDocuments from './DynamicDocument.Translations.GetDynamicDocuments';
import * as DynamicDocumentUsedByGetDynamicDocument from './DynamicDocument.UsedBy.GetDynamicDocument';
import * as DynamicDocumentUsedByGetDynamicDocuments from './DynamicDocument.UsedBy.GetDynamicDocuments';
import * as DynamicDocumentVersionsGetDynamicDocument from './DynamicDocument.Versions.GetDynamicDocument';
import * as DynamicDocumentVersionsGetDynamicDocuments from './DynamicDocument.Versions.GetDynamicDocuments';
import * as DynamicDocumentXliffGetDynamicDocument from './DynamicDocument.Xliff.GetDynamicDocument';
import * as DynamicDocumentXliffGetDynamicDocuments from './DynamicDocument.Xliff.GetDynamicDocuments';
import * as FunctionXliffPreferencesWithSourceLanguage from './Function_XliffPreferences_With_sourceLanguage';
import * as GetBurstConfiguration from './GetBurstConfiguration';
import * as GetBurstConfigurations from './GetBurstConfigurations';
import * as GetDynamicDocument from './GetDynamicDocument';
import * as GetDynamicDocuments from './GetDynamicDocuments';
import * as GetNote from './GetNote';
import * as GetNotes from './GetNotes';
import * as NoteAttachmentsGetContentItem from './Note.Attachments.GetContentItem';
import * as NoteAttachmentsGetContentItems from './Note.Attachments.GetContentItems';
import * as NoteContextGetContainer from './Note.Context.GetContainer';
import * as NoteCreatorGetUser from './Note.Creator.GetUser';
import * as NoteFolderGetFolder from './Note.Folder.GetFolder';
import * as NoteMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember from './Note.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember';
import * as NoteMemberLinksGetDynamicDocumentMember from './Note.MemberLinks.GetDynamicDocumentMember';
import * as NoteMemberLinksGetDynamicDocumentMembers from './Note.MemberLinks.GetDynamicDocumentMembers';
import * as NoteMemberLinksPostDynamicDocumentMember from './Note.MemberLinks.PostDynamicDocumentMember';
import * as NoteMemberLinksUpdateDynamicDocumentMember from './Note.MemberLinks.UpdateDynamicDocumentMember';
import * as NoteModifierGetUser from './Note.Modifier.GetUser';
import * as NoteOrganizationGetOrganization from './Note.Organization.GetOrganization';
import * as NotePrimaryContentGetContentItem from './Note.PrimaryContent.GetContentItem';
import * as NoteReferencedByGetDynamicDocument from './Note.ReferencedBy.GetDynamicDocument';
import * as NoteReferencedByGetDynamicDocuments from './Note.ReferencedBy.GetDynamicDocuments';
import * as NoteReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference from './Note.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference';
import * as NoteReferenceLinksGetDynamicDocumentReference from './Note.ReferenceLinks.GetDynamicDocumentReference';
import * as NoteReferenceLinksGetDynamicDocumentReferences from './Note.ReferenceLinks.GetDynamicDocumentReferences';
import * as NoteReferenceLinksPostDynamicDocumentReference from './Note.ReferenceLinks.PostDynamicDocumentReference';
import * as NoteReferenceLinksUpdateDynamicDocumentReference from './Note.ReferenceLinks.UpdateDynamicDocumentReference';
import * as NoteRepresentationsGetRepresentation from './Note.Representations.GetRepresentation';
import * as NoteRepresentationsGetRepresentations from './Note.Representations.GetRepresentations';
import * as NoteRevisionsGetDynamicDocument from './Note.Revisions.GetDynamicDocument';
import * as NoteRevisionsGetDynamicDocuments from './Note.Revisions.GetDynamicDocuments';
import * as NoteTranslationsGetDynamicDocument from './Note.Translations.GetDynamicDocument';
import * as NoteTranslationsGetDynamicDocuments from './Note.Translations.GetDynamicDocuments';
import * as NoteUsedByGetDynamicDocument from './Note.UsedBy.GetDynamicDocument';
import * as NoteUsedByGetDynamicDocuments from './Note.UsedBy.GetDynamicDocuments';
import * as NoteVersionsGetDynamicDocument from './Note.Versions.GetDynamicDocument';
import * as NoteVersionsGetDynamicDocuments from './Note.Versions.GetDynamicDocuments';
import * as NoteXliffGetDynamicDocument from './Note.Xliff.GetDynamicDocument';
import * as NoteXliffGetDynamicDocuments from './Note.Xliff.GetDynamicDocuments';
import * as PtcDynamicDocMgmtBurstConfigurationActionCheckInWithKeepCheckedOut from './PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckIn_With_KeepCheckedOut';
import * as PtcDynamicDocMgmtBurstConfigurationActionCheckOut from './PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckOut';
import * as PtcDynamicDocMgmtBurstConfigurationActionReviseWith from './PTC.DynamicDocMgmt.BurstConfiguration.Action_Revise_With';
import * as PtcDynamicDocMgmtBurstConfigurationActionSetStateWith from './PTC.DynamicDocMgmt.BurstConfiguration.Action_SetState_With';
import * as PtcDynamicDocMgmtBurstConfigurationActionUndoCheckOut from './PTC.DynamicDocMgmt.BurstConfiguration.Action_UndoCheckOut';
import * as PtcDynamicDocMgmtBurstConfigurationFunctionGetLifeCycleTemplate from './PTC.DynamicDocMgmt.BurstConfiguration.Function_GetLifeCycleTemplate';
import * as PtcDynamicDocMgmtBurstConfigurationFunctionGetValidStateTransitions from './PTC.DynamicDocMgmt.BurstConfiguration.Function_GetValidStateTransitions';
import * as PtcDynamicDocMgmtBurstConfigurationFunctionIsCheckoutAllowed from './PTC.DynamicDocMgmt.BurstConfiguration.Function_IsCheckoutAllowed';
import * as PtcDynamicDocMgmtDynamicDocumentActionCheckInWithKeepCheckedOut from './PTC.DynamicDocMgmt.DynamicDocument.Action_CheckIn_With_KeepCheckedOut';
import * as PtcDynamicDocMgmtDynamicDocumentActionCheckOut from './PTC.DynamicDocMgmt.DynamicDocument.Action_CheckOut';
import * as PtcDynamicDocMgmtDynamicDocumentActionReviseWith from './PTC.DynamicDocMgmt.DynamicDocument.Action_Revise_With';
import * as PtcDynamicDocMgmtDynamicDocumentActionSetStateWith from './PTC.DynamicDocMgmt.DynamicDocument.Action_SetState_With';
import * as PtcDynamicDocMgmtDynamicDocumentActionUndoCheckOut from './PTC.DynamicDocMgmt.DynamicDocument.Action_UndoCheckOut';
import * as PtcDynamicDocMgmtDynamicDocumentActionUpdateCommonPropertiesWith from './PTC.DynamicDocMgmt.DynamicDocument.Action_UpdateCommonProperties_With';
import * as PtcDynamicDocMgmtDynamicDocumentFunctionGetLifeCycleTemplate from './PTC.DynamicDocMgmt.DynamicDocument.Function_GetLifeCycleTemplate';
import * as PtcDynamicDocMgmtDynamicDocumentFunctionGetValidStateTransitions from './PTC.DynamicDocMgmt.DynamicDocument.Function_GetValidStateTransitions';
import * as PtcDynamicDocMgmtDynamicDocumentFunctionIsCheckoutAllowed from './PTC.DynamicDocMgmt.DynamicDocument.Function_IsCheckoutAllowed';
import * as PtcDynamicDocMgmtNoteActionCheckInWithKeepCheckedOut from './PTC.DynamicDocMgmt.Note.Action_CheckIn_With_KeepCheckedOut';
import * as PtcDynamicDocMgmtNoteActionCheckOut from './PTC.DynamicDocMgmt.Note.Action_CheckOut';
import * as PtcDynamicDocMgmtNoteActionReviseWith from './PTC.DynamicDocMgmt.Note.Action_Revise_With';
import * as PtcDynamicDocMgmtNoteActionSetStateWith from './PTC.DynamicDocMgmt.Note.Action_SetState_With';
import * as PtcDynamicDocMgmtNoteActionUndoCheckOut from './PTC.DynamicDocMgmt.Note.Action_UndoCheckOut';
import * as PtcDynamicDocMgmtNoteFunctionGetLifeCycleTemplate from './PTC.DynamicDocMgmt.Note.Function_GetLifeCycleTemplate';
import * as PtcDynamicDocMgmtNoteFunctionGetValidStateTransitions from './PTC.DynamicDocMgmt.Note.Function_GetValidStateTransitions';
import * as PtcDynamicDocMgmtNoteFunctionIsCheckoutAllowed from './PTC.DynamicDocMgmt.Note.Function_IsCheckoutAllowed';
import * as UpdateBurstConfiguration from './UpdateBurstConfiguration';
import * as UpdateDynamicDocument from './UpdateDynamicDocument';
import * as UpdateNote from './UpdateNote';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCreateXliffLink,
	ActionEditDynamicDocumentsSecurityLabels,
	ActionReviseBurstConfigurations,
	ActionReviseDynamicDocuments,
	ActionReviseNotes,
	ActionSetStateBurstConfigurations,
	ActionSetStateDynamicDocuments,
	ActionSetStateNotes,
	ActionUpdateDynamicDocuments,
	BurstConfigurationAttachmentsGetContentItem,
	BurstConfigurationAttachmentsGetContentItems,
	BurstConfigurationContextGetContainer,
	BurstConfigurationCreatorGetUser,
	BurstConfigurationFolderGetFolder,
	BurstConfigurationMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember,
	BurstConfigurationMemberLinksGetDynamicDocumentMember,
	BurstConfigurationMemberLinksGetDynamicDocumentMembers,
	BurstConfigurationMemberLinksPostDynamicDocumentMember,
	BurstConfigurationMemberLinksUpdateDynamicDocumentMember,
	BurstConfigurationModifierGetUser,
	BurstConfigurationOrganizationGetOrganization,
	BurstConfigurationPrimaryContentGetContentItem,
	BurstConfigurationReferencedByGetDynamicDocument,
	BurstConfigurationReferencedByGetDynamicDocuments,
	BurstConfigurationReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference,
	BurstConfigurationReferenceLinksGetDynamicDocumentReference,
	BurstConfigurationReferenceLinksGetDynamicDocumentReferences,
	BurstConfigurationReferenceLinksPostDynamicDocumentReference,
	BurstConfigurationReferenceLinksUpdateDynamicDocumentReference,
	BurstConfigurationRepresentationsGetRepresentation,
	BurstConfigurationRepresentationsGetRepresentations,
	BurstConfigurationRevisionsGetDynamicDocument,
	BurstConfigurationRevisionsGetDynamicDocuments,
	BurstConfigurationTranslationsGetDynamicDocument,
	BurstConfigurationTranslationsGetDynamicDocuments,
	BurstConfigurationUsedByGetDynamicDocument,
	BurstConfigurationUsedByGetDynamicDocuments,
	BurstConfigurationVersionsGetDynamicDocument,
	BurstConfigurationVersionsGetDynamicDocuments,
	BurstConfigurationXliffGetDynamicDocument,
	BurstConfigurationXliffGetDynamicDocuments,
	DynamicDocumentAttachmentsGetContentItem,
	DynamicDocumentAttachmentsGetContentItems,
	DynamicDocumentContextGetContainer,
	DynamicDocumentCreatorGetUser,
	DynamicDocumentFolderGetFolder,
	DynamicDocumentMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember,
	DynamicDocumentMemberLinksGetDynamicDocumentMember,
	DynamicDocumentMemberLinksGetDynamicDocumentMembers,
	DynamicDocumentMemberLinksPostDynamicDocumentMember,
	DynamicDocumentMemberLinksUpdateDynamicDocumentMember,
	DynamicDocumentModifierGetUser,
	DynamicDocumentOrganizationGetOrganization,
	DynamicDocumentPrimaryContentGetContentItem,
	DynamicDocumentReferencedByGetDynamicDocument,
	DynamicDocumentReferencedByGetDynamicDocuments,
	DynamicDocumentReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference,
	DynamicDocumentReferenceLinksGetDynamicDocumentReference,
	DynamicDocumentReferenceLinksGetDynamicDocumentReferences,
	DynamicDocumentReferenceLinksPostDynamicDocumentReference,
	DynamicDocumentReferenceLinksUpdateDynamicDocumentReference,
	DynamicDocumentRepresentationsGetRepresentation,
	DynamicDocumentRepresentationsGetRepresentations,
	DynamicDocumentRevisionsGetDynamicDocument,
	DynamicDocumentRevisionsGetDynamicDocuments,
	DynamicDocumentTranslationsGetDynamicDocument,
	DynamicDocumentTranslationsGetDynamicDocuments,
	DynamicDocumentUsedByGetDynamicDocument,
	DynamicDocumentUsedByGetDynamicDocuments,
	DynamicDocumentVersionsGetDynamicDocument,
	DynamicDocumentVersionsGetDynamicDocuments,
	DynamicDocumentXliffGetDynamicDocument,
	DynamicDocumentXliffGetDynamicDocuments,
	FunctionXliffPreferencesWithSourceLanguage,
	GetBurstConfiguration,
	GetBurstConfigurations,
	GetDynamicDocument,
	GetDynamicDocuments,
	GetNote,
	GetNotes,
	NoteAttachmentsGetContentItem,
	NoteAttachmentsGetContentItems,
	NoteContextGetContainer,
	NoteCreatorGetUser,
	NoteFolderGetFolder,
	NoteMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember,
	NoteMemberLinksGetDynamicDocumentMember,
	NoteMemberLinksGetDynamicDocumentMembers,
	NoteMemberLinksPostDynamicDocumentMember,
	NoteMemberLinksUpdateDynamicDocumentMember,
	NoteModifierGetUser,
	NoteOrganizationGetOrganization,
	NotePrimaryContentGetContentItem,
	NoteReferencedByGetDynamicDocument,
	NoteReferencedByGetDynamicDocuments,
	NoteReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference,
	NoteReferenceLinksGetDynamicDocumentReference,
	NoteReferenceLinksGetDynamicDocumentReferences,
	NoteReferenceLinksPostDynamicDocumentReference,
	NoteReferenceLinksUpdateDynamicDocumentReference,
	NoteRepresentationsGetRepresentation,
	NoteRepresentationsGetRepresentations,
	NoteRevisionsGetDynamicDocument,
	NoteRevisionsGetDynamicDocuments,
	NoteTranslationsGetDynamicDocument,
	NoteTranslationsGetDynamicDocuments,
	NoteUsedByGetDynamicDocument,
	NoteUsedByGetDynamicDocuments,
	NoteVersionsGetDynamicDocument,
	NoteVersionsGetDynamicDocuments,
	NoteXliffGetDynamicDocument,
	NoteXliffGetDynamicDocuments,
	PtcDynamicDocMgmtBurstConfigurationActionCheckInWithKeepCheckedOut,
	PtcDynamicDocMgmtBurstConfigurationActionCheckOut,
	PtcDynamicDocMgmtBurstConfigurationActionReviseWith,
	PtcDynamicDocMgmtBurstConfigurationActionSetStateWith,
	PtcDynamicDocMgmtBurstConfigurationActionUndoCheckOut,
	PtcDynamicDocMgmtBurstConfigurationFunctionGetLifeCycleTemplate,
	PtcDynamicDocMgmtBurstConfigurationFunctionGetValidStateTransitions,
	PtcDynamicDocMgmtBurstConfigurationFunctionIsCheckoutAllowed,
	PtcDynamicDocMgmtDynamicDocumentActionCheckInWithKeepCheckedOut,
	PtcDynamicDocMgmtDynamicDocumentActionCheckOut,
	PtcDynamicDocMgmtDynamicDocumentActionReviseWith,
	PtcDynamicDocMgmtDynamicDocumentActionSetStateWith,
	PtcDynamicDocMgmtDynamicDocumentActionUndoCheckOut,
	PtcDynamicDocMgmtDynamicDocumentActionUpdateCommonPropertiesWith,
	PtcDynamicDocMgmtDynamicDocumentFunctionGetLifeCycleTemplate,
	PtcDynamicDocMgmtDynamicDocumentFunctionGetValidStateTransitions,
	PtcDynamicDocMgmtDynamicDocumentFunctionIsCheckoutAllowed,
	PtcDynamicDocMgmtNoteActionCheckInWithKeepCheckedOut,
	PtcDynamicDocMgmtNoteActionCheckOut,
	PtcDynamicDocMgmtNoteActionReviseWith,
	PtcDynamicDocMgmtNoteActionSetStateWith,
	PtcDynamicDocMgmtNoteActionUndoCheckOut,
	PtcDynamicDocMgmtNoteFunctionGetLifeCycleTemplate,
	PtcDynamicDocMgmtNoteFunctionGetValidStateTransitions,
	PtcDynamicDocMgmtNoteFunctionIsCheckoutAllowed,
	UpdateBurstConfiguration,
	UpdateDynamicDocument,
	UpdateNote,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v5/DynamicDocMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
			},
		},
		default: 'GET /BurstConfigurations',
		options: [
			{
				name: 'Action_CreateXliffLink',
				value: 'POST /CreateXliffLink',
				description: 'Action to create Xliff link. - post /CreateXliffLink',
				action: 'Action_CreateXliffLink',
			},
			{
				name: 'Action_EditDynamicDocumentsSecurityLabels',
				value: 'POST /EditDynamicDocumentsSecurityLabels',
				description: 'Execute EditDynamicDocumentsSecurityLabels - post /EditDynamicDocumentsSecurityLabels',
				action: 'Action_EditDynamicDocumentsSecurityLabels',
			},
			{
				name: 'Action_ReviseBurstConfigurations',
				value: 'POST /ReviseBurstConfigurations',
				description: 'Execute ReviseBurstConfigurations - post /ReviseBurstConfigurations',
				action: 'Action_ReviseBurstConfigurations',
			},
			{
				name: 'Action_ReviseDynamicDocuments',
				value: 'POST /ReviseDynamicDocuments',
				description: 'Execute ReviseDynamicDocuments - post /ReviseDynamicDocuments',
				action: 'Action_ReviseDynamicDocuments',
			},
			{
				name: 'Action_ReviseNotes',
				value: 'POST /ReviseNotes',
				description: 'Execute ReviseNotes - post /ReviseNotes',
				action: 'Action_ReviseNotes',
			},
			{
				name: 'Action_SetStateBurstConfigurations',
				value: 'POST /SetStateBurstConfigurations',
				description: 'Execute SetStateBurstConfigurations - post /SetStateBurstConfigurations',
				action: 'Action_SetStateBurstConfigurations',
			},
			{
				name: 'Action_SetStateDynamicDocuments',
				value: 'POST /SetStateDynamicDocuments',
				description: 'Execute SetStateDynamicDocuments - post /SetStateDynamicDocuments',
				action: 'Action_SetStateDynamicDocuments',
			},
			{
				name: 'Action_SetStateNotes',
				value: 'POST /SetStateNotes',
				description: 'Execute SetStateNotes - post /SetStateNotes',
				action: 'Action_SetStateNotes',
			},
			{
				name: 'Action_UpdateDynamicDocuments',
				value: 'POST /UpdateDynamicDocuments',
				description: 'Execute UpdateDynamicDocuments - post /UpdateDynamicDocuments',
				action: 'Action_UpdateDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.Attachments.GetContentItem',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /BurstConfigurations('{BurstConfigurationId}')/Attachments('{ContentItemId}')",
				action: 'BurstConfiguration.Attachments.GetContentItem',
			},
			{
				name: 'BurstConfiguration.Attachments.GetContentItems',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Attachments",
				description: "Get ContentItem - get /BurstConfigurations('{BurstConfigurationId}')/Attachments",
				action: 'BurstConfiguration.Attachments.GetContentItems',
			},
			{
				name: 'BurstConfiguration.Context.GetContainer',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Context",
				description: "Get Container - get /BurstConfigurations('{BurstConfigurationId}')/Context",
				action: 'BurstConfiguration.Context.GetContainer',
			},
			{
				name: 'BurstConfiguration.Creator.GetUser',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Creator",
				description: "Get User - get /BurstConfigurations('{BurstConfigurationId}')/Creator",
				action: 'BurstConfiguration.Creator.GetUser',
			},
			{
				name: 'BurstConfiguration.Folder.GetFolder',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Folder",
				description: "Get Folder - get /BurstConfigurations('{BurstConfigurationId}')/Folder",
				action: 'BurstConfiguration.Folder.GetFolder',
			},
			{
				name: 'BurstConfiguration.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
				value: "DELETE /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Delete an existing DynamicDocumentMember - delete /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'BurstConfiguration.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
			},
			{
				name: 'BurstConfiguration.MemberLinks.GetDynamicDocumentMember',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Get DynamicDocumentMember for a given DynamicDocumentMemberId - get /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'BurstConfiguration.MemberLinks.GetDynamicDocumentMember',
			},
			{
				name: 'BurstConfiguration.MemberLinks.GetDynamicDocumentMembers',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/MemberLinks",
				description: "Get DynamicDocumentMember - get /BurstConfigurations('{BurstConfigurationId}')/MemberLinks",
				action: 'BurstConfiguration.MemberLinks.GetDynamicDocumentMembers',
			},
			{
				name: 'BurstConfiguration.MemberLinks.PostDynamicDocumentMember',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/MemberLinks",
				description: "Create DynamicDocumentMember - post /BurstConfigurations('{BurstConfigurationId}')/MemberLinks",
				action: 'BurstConfiguration.MemberLinks.PostDynamicDocumentMember',
			},
			{
				name: 'BurstConfiguration.MemberLinks.UpdateDynamicDocumentMember',
				value: "PATCH /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Update an existing DynamicDocumentMember - patch /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'BurstConfiguration.MemberLinks.UpdateDynamicDocumentMember',
			},
			{
				name: 'BurstConfiguration.Modifier.GetUser',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Modifier",
				description: "Get User - get /BurstConfigurations('{BurstConfigurationId}')/Modifier",
				action: 'BurstConfiguration.Modifier.GetUser',
			},
			{
				name: 'BurstConfiguration.Organization.GetOrganization',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Organization",
				description: "Get Organization - get /BurstConfigurations('{BurstConfigurationId}')/Organization",
				action: 'BurstConfiguration.Organization.GetOrganization',
			},
			{
				name: 'BurstConfiguration.PrimaryContent.GetContentItem',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/PrimaryContent",
				description: "Get ContentItem - get /BurstConfigurations('{BurstConfigurationId}')/PrimaryContent",
				action: 'BurstConfiguration.PrimaryContent.GetContentItem',
			},
			{
				name: 'BurstConfiguration.ReferencedBy.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/ReferencedBy('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/ReferencedBy('{DynamicDocumentId}')",
				action: 'BurstConfiguration.ReferencedBy.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.ReferencedBy.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/ReferencedBy",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/ReferencedBy",
				action: 'BurstConfiguration.ReferencedBy.GetDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
				value: "DELETE /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Delete an existing DynamicDocumentReference - delete /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'BurstConfiguration.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
			},
			{
				name: 'BurstConfiguration.ReferenceLinks.GetDynamicDocumentReference',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Get DynamicDocumentReference for a given DynamicDocumentReferenceId - get /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'BurstConfiguration.ReferenceLinks.GetDynamicDocumentReference',
			},
			{
				name: 'BurstConfiguration.ReferenceLinks.GetDynamicDocumentReferences',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks",
				description: "Get DynamicDocumentReference - get /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks",
				action: 'BurstConfiguration.ReferenceLinks.GetDynamicDocumentReferences',
			},
			{
				name: 'BurstConfiguration.ReferenceLinks.PostDynamicDocumentReference',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks",
				description: "Create DynamicDocumentReference - post /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks",
				action: 'BurstConfiguration.ReferenceLinks.PostDynamicDocumentReference',
			},
			{
				name: 'BurstConfiguration.ReferenceLinks.UpdateDynamicDocumentReference',
				value: "PATCH /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Update an existing DynamicDocumentReference - patch /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'BurstConfiguration.ReferenceLinks.UpdateDynamicDocumentReference',
			},
			{
				name: 'BurstConfiguration.Representations.GetRepresentation',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /BurstConfigurations('{BurstConfigurationId}')/Representations('{RepresentationId}')",
				action: 'BurstConfiguration.Representations.GetRepresentation',
			},
			{
				name: 'BurstConfiguration.Representations.GetRepresentations',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Representations",
				description: "Get Representation - get /BurstConfigurations('{BurstConfigurationId}')/Representations",
				action: 'BurstConfiguration.Representations.GetRepresentations',
			},
			{
				name: 'BurstConfiguration.Revisions.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Revisions('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/Revisions('{DynamicDocumentId}')",
				action: 'BurstConfiguration.Revisions.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.Revisions.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Revisions",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/Revisions",
				action: 'BurstConfiguration.Revisions.GetDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.Translations.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Translations('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/Translations('{DynamicDocumentId}')",
				action: 'BurstConfiguration.Translations.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.Translations.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Translations",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/Translations",
				action: 'BurstConfiguration.Translations.GetDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.UsedBy.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/UsedBy('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/UsedBy('{DynamicDocumentId}')",
				action: 'BurstConfiguration.UsedBy.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.UsedBy.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/UsedBy",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/UsedBy",
				action: 'BurstConfiguration.UsedBy.GetDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.Versions.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Versions('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/Versions('{DynamicDocumentId}')",
				action: 'BurstConfiguration.Versions.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.Versions.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Versions",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/Versions",
				action: 'BurstConfiguration.Versions.GetDynamicDocuments',
			},
			{
				name: 'BurstConfiguration.Xliff.GetDynamicDocument',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Xliff('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /BurstConfigurations('{BurstConfigurationId}')/Xliff('{DynamicDocumentId}')",
				action: 'BurstConfiguration.Xliff.GetDynamicDocument',
			},
			{
				name: 'BurstConfiguration.Xliff.GetDynamicDocuments',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/Xliff",
				description: "Get DynamicDocument - get /BurstConfigurations('{BurstConfigurationId}')/Xliff",
				action: 'BurstConfiguration.Xliff.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.Attachments.GetContentItem',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /DynamicDocuments('{DynamicDocumentId}')/Attachments('{ContentItemId}')",
				action: 'DynamicDocument.Attachments.GetContentItem',
			},
			{
				name: 'DynamicDocument.Attachments.GetContentItems',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Attachments",
				description: "Get ContentItem - get /DynamicDocuments('{DynamicDocumentId}')/Attachments",
				action: 'DynamicDocument.Attachments.GetContentItems',
			},
			{
				name: 'DynamicDocument.Context.GetContainer',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Context",
				description: "Get Container - get /DynamicDocuments('{DynamicDocumentId}')/Context",
				action: 'DynamicDocument.Context.GetContainer',
			},
			{
				name: 'DynamicDocument.Creator.GetUser',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Creator",
				description: "Get User - get /DynamicDocuments('{DynamicDocumentId}')/Creator",
				action: 'DynamicDocument.Creator.GetUser',
			},
			{
				name: 'DynamicDocument.Folder.GetFolder',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Folder",
				description: "Get Folder - get /DynamicDocuments('{DynamicDocumentId}')/Folder",
				action: 'DynamicDocument.Folder.GetFolder',
			},
			{
				name: 'DynamicDocument.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
				value: "DELETE /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Delete an existing DynamicDocumentMember - delete /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'DynamicDocument.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
			},
			{
				name: 'DynamicDocument.MemberLinks.GetDynamicDocumentMember',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Get DynamicDocumentMember for a given DynamicDocumentMemberId - get /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'DynamicDocument.MemberLinks.GetDynamicDocumentMember',
			},
			{
				name: 'DynamicDocument.MemberLinks.GetDynamicDocumentMembers',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/MemberLinks",
				description: "Get DynamicDocumentMember - get /DynamicDocuments('{DynamicDocumentId}')/MemberLinks",
				action: 'DynamicDocument.MemberLinks.GetDynamicDocumentMembers',
			},
			{
				name: 'DynamicDocument.MemberLinks.PostDynamicDocumentMember',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/MemberLinks",
				description: "Create DynamicDocumentMember - post /DynamicDocuments('{DynamicDocumentId}')/MemberLinks",
				action: 'DynamicDocument.MemberLinks.PostDynamicDocumentMember',
			},
			{
				name: 'DynamicDocument.MemberLinks.UpdateDynamicDocumentMember',
				value: "PATCH /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Update an existing DynamicDocumentMember - patch /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'DynamicDocument.MemberLinks.UpdateDynamicDocumentMember',
			},
			{
				name: 'DynamicDocument.Modifier.GetUser',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Modifier",
				description: "Get User - get /DynamicDocuments('{DynamicDocumentId}')/Modifier",
				action: 'DynamicDocument.Modifier.GetUser',
			},
			{
				name: 'DynamicDocument.Organization.GetOrganization',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Organization",
				description: "Get Organization - get /DynamicDocuments('{DynamicDocumentId}')/Organization",
				action: 'DynamicDocument.Organization.GetOrganization',
			},
			{
				name: 'DynamicDocument.PrimaryContent.GetContentItem',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/PrimaryContent",
				description: "Get ContentItem - get /DynamicDocuments('{DynamicDocumentId}')/PrimaryContent",
				action: 'DynamicDocument.PrimaryContent.GetContentItem',
			},
			{
				name: 'DynamicDocument.ReferencedBy.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/ReferencedBy('{ReferencedById}')",
				description: "Get DynamicDocument for a given ReferencedById - get /DynamicDocuments('{DynamicDocumentId}')/ReferencedBy('{ReferencedById}')",
				action: 'DynamicDocument.ReferencedBy.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.ReferencedBy.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/ReferencedBy",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/ReferencedBy",
				action: 'DynamicDocument.ReferencedBy.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
				value: "DELETE /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Delete an existing DynamicDocumentReference - delete /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'DynamicDocument.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
			},
			{
				name: 'DynamicDocument.ReferenceLinks.GetDynamicDocumentReference',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Get DynamicDocumentReference for a given DynamicDocumentReferenceId - get /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'DynamicDocument.ReferenceLinks.GetDynamicDocumentReference',
			},
			{
				name: 'DynamicDocument.ReferenceLinks.GetDynamicDocumentReferences',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks",
				description: "Get DynamicDocumentReference - get /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks",
				action: 'DynamicDocument.ReferenceLinks.GetDynamicDocumentReferences',
			},
			{
				name: 'DynamicDocument.ReferenceLinks.PostDynamicDocumentReference',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks",
				description: "Create DynamicDocumentReference - post /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks",
				action: 'DynamicDocument.ReferenceLinks.PostDynamicDocumentReference',
			},
			{
				name: 'DynamicDocument.ReferenceLinks.UpdateDynamicDocumentReference',
				value: "PATCH /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Update an existing DynamicDocumentReference - patch /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'DynamicDocument.ReferenceLinks.UpdateDynamicDocumentReference',
			},
			{
				name: 'DynamicDocument.Representations.GetRepresentation',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /DynamicDocuments('{DynamicDocumentId}')/Representations('{RepresentationId}')",
				action: 'DynamicDocument.Representations.GetRepresentation',
			},
			{
				name: 'DynamicDocument.Representations.GetRepresentations',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Representations",
				description: "Get Representation - get /DynamicDocuments('{DynamicDocumentId}')/Representations",
				action: 'DynamicDocument.Representations.GetRepresentations',
			},
			{
				name: 'DynamicDocument.Revisions.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Revisions('{RevisionsId}')",
				description: "Get DynamicDocument for a given RevisionsId - get /DynamicDocuments('{DynamicDocumentId}')/Revisions('{RevisionsId}')",
				action: 'DynamicDocument.Revisions.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.Revisions.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Revisions",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/Revisions",
				action: 'DynamicDocument.Revisions.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.Translations.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Translations('{TranslationsId}')",
				description: "Get DynamicDocument for a given TranslationsId - get /DynamicDocuments('{DynamicDocumentId}')/Translations('{TranslationsId}')",
				action: 'DynamicDocument.Translations.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.Translations.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Translations",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/Translations",
				action: 'DynamicDocument.Translations.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.UsedBy.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/UsedBy('{UsedById}')",
				description: "Get DynamicDocument for a given UsedById - get /DynamicDocuments('{DynamicDocumentId}')/UsedBy('{UsedById}')",
				action: 'DynamicDocument.UsedBy.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.UsedBy.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/UsedBy",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/UsedBy",
				action: 'DynamicDocument.UsedBy.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.Versions.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Versions('{VersionsId}')",
				description: "Get DynamicDocument for a given VersionsId - get /DynamicDocuments('{DynamicDocumentId}')/Versions('{VersionsId}')",
				action: 'DynamicDocument.Versions.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.Versions.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Versions",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/Versions",
				action: 'DynamicDocument.Versions.GetDynamicDocuments',
			},
			{
				name: 'DynamicDocument.Xliff.GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Xliff('{XliffId}')",
				description: "Get DynamicDocument for a given XliffId - get /DynamicDocuments('{DynamicDocumentId}')/Xliff('{XliffId}')",
				action: 'DynamicDocument.Xliff.GetDynamicDocument',
			},
			{
				name: 'DynamicDocument.Xliff.GetDynamicDocuments',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/Xliff",
				description: "Get DynamicDocument - get /DynamicDocuments('{DynamicDocumentId}')/Xliff",
				action: 'DynamicDocument.Xliff.GetDynamicDocuments',
			},
			{
				name: 'Function_XliffPreferences_With_sourceLanguage',
				value: "GET /XliffPreferences(oidForC3diDocument='{oidForC3diDocument}',sourceLanguage='{sourceLanguage}')",
				description: "Function to get preferences for xliff document creation - get /XliffPreferences(oidForC3diDocument='{oidForC3diDocument}',sourceLanguage='{sourceLanguage}')",
				action: 'Function_XliffPreferences_With_sourceLanguage',
			},
			{
				name: 'GetBurstConfiguration',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')",
				description: "Get BurstConfiguration for a given BurstConfigurationId - get /BurstConfigurations('{BurstConfigurationId}')",
				action: 'GetBurstConfiguration',
			},
			{
				name: 'GetBurstConfigurations',
				value: 'GET /BurstConfigurations',
				description: 'Get BurstConfigurations - get /BurstConfigurations',
				action: 'GetBurstConfigurations',
			},
			{
				name: 'GetDynamicDocument',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /DynamicDocuments('{DynamicDocumentId}')",
				action: 'GetDynamicDocument',
			},
			{
				name: 'GetDynamicDocuments',
				value: 'GET /DynamicDocuments',
				description: 'Get DynamicDocuments - get /DynamicDocuments',
				action: 'GetDynamicDocuments',
			},
			{
				name: 'GetNote',
				value: "GET /Notes('{NoteId}')",
				description: "Get Note for a given NoteId - get /Notes('{NoteId}')",
				action: 'GetNote',
			},
			{
				name: 'GetNotes',
				value: 'GET /Notes',
				description: 'Get Notes - get /Notes',
				action: 'GetNotes',
			},
			{
				name: 'Note.Attachments.GetContentItem',
				value: "GET /Notes('{NoteId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Notes('{NoteId}')/Attachments('{ContentItemId}')",
				action: 'Note.Attachments.GetContentItem',
			},
			{
				name: 'Note.Attachments.GetContentItems',
				value: "GET /Notes('{NoteId}')/Attachments",
				description: "Get ContentItem - get /Notes('{NoteId}')/Attachments",
				action: 'Note.Attachments.GetContentItems',
			},
			{
				name: 'Note.Context.GetContainer',
				value: "GET /Notes('{NoteId}')/Context",
				description: "Get Container - get /Notes('{NoteId}')/Context",
				action: 'Note.Context.GetContainer',
			},
			{
				name: 'Note.Creator.GetUser',
				value: "GET /Notes('{NoteId}')/Creator",
				description: "Get User - get /Notes('{NoteId}')/Creator",
				action: 'Note.Creator.GetUser',
			},
			{
				name: 'Note.Folder.GetFolder',
				value: "GET /Notes('{NoteId}')/Folder",
				description: "Get Folder - get /Notes('{NoteId}')/Folder",
				action: 'Note.Folder.GetFolder',
			},
			{
				name: 'Note.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
				value: "DELETE /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Delete an existing DynamicDocumentMember - delete /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'Note.MemberLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentMember',
			},
			{
				name: 'Note.MemberLinks.GetDynamicDocumentMember',
				value: "GET /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Get DynamicDocumentMember for a given DynamicDocumentMemberId - get /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'Note.MemberLinks.GetDynamicDocumentMember',
			},
			{
				name: 'Note.MemberLinks.GetDynamicDocumentMembers',
				value: "GET /Notes('{NoteId}')/MemberLinks",
				description: "Get DynamicDocumentMember - get /Notes('{NoteId}')/MemberLinks",
				action: 'Note.MemberLinks.GetDynamicDocumentMembers',
			},
			{
				name: 'Note.MemberLinks.PostDynamicDocumentMember',
				value: "POST /Notes('{NoteId}')/MemberLinks",
				description: "Create DynamicDocumentMember - post /Notes('{NoteId}')/MemberLinks",
				action: 'Note.MemberLinks.PostDynamicDocumentMember',
			},
			{
				name: 'Note.MemberLinks.UpdateDynamicDocumentMember',
				value: "PATCH /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				description: "Update an existing DynamicDocumentMember - patch /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				action: 'Note.MemberLinks.UpdateDynamicDocumentMember',
			},
			{
				name: 'Note.Modifier.GetUser',
				value: "GET /Notes('{NoteId}')/Modifier",
				description: "Get User - get /Notes('{NoteId}')/Modifier",
				action: 'Note.Modifier.GetUser',
			},
			{
				name: 'Note.Organization.GetOrganization',
				value: "GET /Notes('{NoteId}')/Organization",
				description: "Get Organization - get /Notes('{NoteId}')/Organization",
				action: 'Note.Organization.GetOrganization',
			},
			{
				name: 'Note.PrimaryContent.GetContentItem',
				value: "GET /Notes('{NoteId}')/PrimaryContent",
				description: "Get ContentItem - get /Notes('{NoteId}')/PrimaryContent",
				action: 'Note.PrimaryContent.GetContentItem',
			},
			{
				name: 'Note.ReferencedBy.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/ReferencedBy('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/ReferencedBy('{DynamicDocumentId}')",
				action: 'Note.ReferencedBy.GetDynamicDocument',
			},
			{
				name: 'Note.ReferencedBy.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/ReferencedBy",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/ReferencedBy",
				action: 'Note.ReferencedBy.GetDynamicDocuments',
			},
			{
				name: 'Note.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
				value: "DELETE /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Delete an existing DynamicDocumentReference - delete /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'Note.ReferenceLinks.DeletePTC.DynamicDocMgmt.DynamicDocumentReference',
			},
			{
				name: 'Note.ReferenceLinks.GetDynamicDocumentReference',
				value: "GET /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Get DynamicDocumentReference for a given DynamicDocumentReferenceId - get /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'Note.ReferenceLinks.GetDynamicDocumentReference',
			},
			{
				name: 'Note.ReferenceLinks.GetDynamicDocumentReferences',
				value: "GET /Notes('{NoteId}')/ReferenceLinks",
				description: "Get DynamicDocumentReference - get /Notes('{NoteId}')/ReferenceLinks",
				action: 'Note.ReferenceLinks.GetDynamicDocumentReferences',
			},
			{
				name: 'Note.ReferenceLinks.PostDynamicDocumentReference',
				value: "POST /Notes('{NoteId}')/ReferenceLinks",
				description: "Create DynamicDocumentReference - post /Notes('{NoteId}')/ReferenceLinks",
				action: 'Note.ReferenceLinks.PostDynamicDocumentReference',
			},
			{
				name: 'Note.ReferenceLinks.UpdateDynamicDocumentReference',
				value: "PATCH /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				description: "Update an existing DynamicDocumentReference - patch /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				action: 'Note.ReferenceLinks.UpdateDynamicDocumentReference',
			},
			{
				name: 'Note.Representations.GetRepresentation',
				value: "GET /Notes('{NoteId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Notes('{NoteId}')/Representations('{RepresentationId}')",
				action: 'Note.Representations.GetRepresentation',
			},
			{
				name: 'Note.Representations.GetRepresentations',
				value: "GET /Notes('{NoteId}')/Representations",
				description: "Get Representation - get /Notes('{NoteId}')/Representations",
				action: 'Note.Representations.GetRepresentations',
			},
			{
				name: 'Note.Revisions.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/Revisions('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/Revisions('{DynamicDocumentId}')",
				action: 'Note.Revisions.GetDynamicDocument',
			},
			{
				name: 'Note.Revisions.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/Revisions",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/Revisions",
				action: 'Note.Revisions.GetDynamicDocuments',
			},
			{
				name: 'Note.Translations.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/Translations('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/Translations('{DynamicDocumentId}')",
				action: 'Note.Translations.GetDynamicDocument',
			},
			{
				name: 'Note.Translations.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/Translations",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/Translations",
				action: 'Note.Translations.GetDynamicDocuments',
			},
			{
				name: 'Note.UsedBy.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/UsedBy('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/UsedBy('{DynamicDocumentId}')",
				action: 'Note.UsedBy.GetDynamicDocument',
			},
			{
				name: 'Note.UsedBy.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/UsedBy",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/UsedBy",
				action: 'Note.UsedBy.GetDynamicDocuments',
			},
			{
				name: 'Note.Versions.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/Versions('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/Versions('{DynamicDocumentId}')",
				action: 'Note.Versions.GetDynamicDocument',
			},
			{
				name: 'Note.Versions.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/Versions",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/Versions",
				action: 'Note.Versions.GetDynamicDocuments',
			},
			{
				name: 'Note.Xliff.GetDynamicDocument',
				value: "GET /Notes('{NoteId}')/Xliff('{DynamicDocumentId}')",
				description: "Get DynamicDocument for a given DynamicDocumentId - get /Notes('{NoteId}')/Xliff('{DynamicDocumentId}')",
				action: 'Note.Xliff.GetDynamicDocument',
			},
			{
				name: 'Note.Xliff.GetDynamicDocuments',
				value: "GET /Notes('{NoteId}')/Xliff",
				description: "Get DynamicDocument - get /Notes('{NoteId}')/Xliff",
				action: 'Note.Xliff.GetDynamicDocuments',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckIn_With_KeepCheckedOut',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.CheckIn",
				description: "Execute CheckIn - post /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.CheckIn",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckIn_With_KeepCheckedOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckOut',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.CheckOut",
				description: "Execute CheckOut - post /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.CheckOut",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_CheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_Revise_With',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.Revise",
				description: "Execute Revise - post /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.Revise",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_Revise_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_SetState_With',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.SetState",
				description: "Execute SetState - post /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.SetState",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_SetState_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_UndoCheckOut',
				value: "POST /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Action_UndoCheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_GetLifeCycleTemplate',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_GetValidStateTransitions',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_IsCheckoutAllowed',
				value: "GET /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				action: 'PTC.DynamicDocMgmt.BurstConfiguration.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_CheckIn_With_KeepCheckedOut',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.CheckIn",
				description: "Execute CheckIn - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.CheckIn",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_CheckIn_With_KeepCheckedOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_CheckOut',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.CheckOut",
				description: "Execute CheckOut - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.CheckOut",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_CheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_Revise_With',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.Revise",
				description: "Execute Revise - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.Revise",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_Revise_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_SetState_With',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.SetState",
				description: "Execute SetState - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.SetState",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_SetState_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_UndoCheckOut',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_UndoCheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Action_UpdateCommonProperties_With',
				value: "POST /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.UpdateCommonProperties",
				description: "Execute UpdateCommonProperties - post /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.UpdateCommonProperties",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Action_UpdateCommonProperties_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Function_GetLifeCycleTemplate',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Function_GetValidStateTransitions',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.DynamicDocMgmt.DynamicDocument.Function_IsCheckoutAllowed',
				value: "GET /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				action: 'PTC.DynamicDocMgmt.DynamicDocument.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Action_CheckIn_With_KeepCheckedOut',
				value: "POST /Notes('{NoteId}')/PTC.DynamicDocMgmt.CheckIn",
				description: "Execute CheckIn - post /Notes('{NoteId}')/PTC.DynamicDocMgmt.CheckIn",
				action: 'PTC.DynamicDocMgmt.Note.Action_CheckIn_With_KeepCheckedOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Action_CheckOut',
				value: "POST /Notes('{NoteId}')/PTC.DynamicDocMgmt.CheckOut",
				description: "Execute CheckOut - post /Notes('{NoteId}')/PTC.DynamicDocMgmt.CheckOut",
				action: 'PTC.DynamicDocMgmt.Note.Action_CheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Action_Revise_With',
				value: "POST /Notes('{NoteId}')/PTC.DynamicDocMgmt.Revise",
				description: "Execute Revise - post /Notes('{NoteId}')/PTC.DynamicDocMgmt.Revise",
				action: 'PTC.DynamicDocMgmt.Note.Action_Revise_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Action_SetState_With',
				value: "POST /Notes('{NoteId}')/PTC.DynamicDocMgmt.SetState",
				description: "Execute SetState - post /Notes('{NoteId}')/PTC.DynamicDocMgmt.SetState",
				action: 'PTC.DynamicDocMgmt.Note.Action_SetState_With',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Action_UndoCheckOut',
				value: "POST /Notes('{NoteId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Notes('{NoteId}')/PTC.DynamicDocMgmt.UndoCheckOut",
				action: 'PTC.DynamicDocMgmt.Note.Action_UndoCheckOut',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Function_GetLifeCycleTemplate',
				value: "GET /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				action: 'PTC.DynamicDocMgmt.Note.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Function_GetValidStateTransitions',
				value: "GET /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				action: 'PTC.DynamicDocMgmt.Note.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.DynamicDocMgmt.Note.Function_IsCheckoutAllowed',
				value: "GET /Notes('{NoteId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Notes('{NoteId}')/PTC.DynamicDocMgmt.IsCheckoutAllowed()",
				action: 'PTC.DynamicDocMgmt.Note.Function_IsCheckoutAllowed',
			},
			{
				name: 'UpdateBurstConfiguration',
				value: "PATCH /BurstConfigurations('{BurstConfigurationId}')",
				description: "Update an existing BurstConfiguration - patch /BurstConfigurations('{BurstConfigurationId}')",
				action: 'UpdateBurstConfiguration',
			},
			{
				name: 'UpdateDynamicDocument',
				value: "PATCH /DynamicDocuments('{DynamicDocumentId}')",
				description: "Update an existing DynamicDocument - patch /DynamicDocuments('{DynamicDocumentId}')",
				action: 'UpdateDynamicDocument',
			},
			{
				name: 'UpdateNote',
				value: "PATCH /Notes('{NoteId}')",
				description: "Update an existing Note - patch /Notes('{NoteId}')",
				action: 'UpdateNote',
			},
		],
	},
	...ActionCreateXliffLink.description,
	...ActionEditDynamicDocumentsSecurityLabels.description,
	...ActionReviseBurstConfigurations.description,
	...ActionReviseDynamicDocuments.description,
	...ActionReviseNotes.description,
	...ActionSetStateBurstConfigurations.description,
	...ActionSetStateDynamicDocuments.description,
	...ActionSetStateNotes.description,
	...ActionUpdateDynamicDocuments.description,
	...BurstConfigurationAttachmentsGetContentItem.description,
	...BurstConfigurationAttachmentsGetContentItems.description,
	...BurstConfigurationContextGetContainer.description,
	...BurstConfigurationCreatorGetUser.description,
	...BurstConfigurationFolderGetFolder.description,
	...BurstConfigurationMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember.description,
	...BurstConfigurationMemberLinksGetDynamicDocumentMember.description,
	...BurstConfigurationMemberLinksGetDynamicDocumentMembers.description,
	...BurstConfigurationMemberLinksPostDynamicDocumentMember.description,
	...BurstConfigurationMemberLinksUpdateDynamicDocumentMember.description,
	...BurstConfigurationModifierGetUser.description,
	...BurstConfigurationOrganizationGetOrganization.description,
	...BurstConfigurationPrimaryContentGetContentItem.description,
	...BurstConfigurationReferencedByGetDynamicDocument.description,
	...BurstConfigurationReferencedByGetDynamicDocuments.description,
	...BurstConfigurationReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference.description,
	...BurstConfigurationReferenceLinksGetDynamicDocumentReference.description,
	...BurstConfigurationReferenceLinksGetDynamicDocumentReferences.description,
	...BurstConfigurationReferenceLinksPostDynamicDocumentReference.description,
	...BurstConfigurationReferenceLinksUpdateDynamicDocumentReference.description,
	...BurstConfigurationRepresentationsGetRepresentation.description,
	...BurstConfigurationRepresentationsGetRepresentations.description,
	...BurstConfigurationRevisionsGetDynamicDocument.description,
	...BurstConfigurationRevisionsGetDynamicDocuments.description,
	...BurstConfigurationTranslationsGetDynamicDocument.description,
	...BurstConfigurationTranslationsGetDynamicDocuments.description,
	...BurstConfigurationUsedByGetDynamicDocument.description,
	...BurstConfigurationUsedByGetDynamicDocuments.description,
	...BurstConfigurationVersionsGetDynamicDocument.description,
	...BurstConfigurationVersionsGetDynamicDocuments.description,
	...BurstConfigurationXliffGetDynamicDocument.description,
	...BurstConfigurationXliffGetDynamicDocuments.description,
	...DynamicDocumentAttachmentsGetContentItem.description,
	...DynamicDocumentAttachmentsGetContentItems.description,
	...DynamicDocumentContextGetContainer.description,
	...DynamicDocumentCreatorGetUser.description,
	...DynamicDocumentFolderGetFolder.description,
	...DynamicDocumentMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember.description,
	...DynamicDocumentMemberLinksGetDynamicDocumentMember.description,
	...DynamicDocumentMemberLinksGetDynamicDocumentMembers.description,
	...DynamicDocumentMemberLinksPostDynamicDocumentMember.description,
	...DynamicDocumentMemberLinksUpdateDynamicDocumentMember.description,
	...DynamicDocumentModifierGetUser.description,
	...DynamicDocumentOrganizationGetOrganization.description,
	...DynamicDocumentPrimaryContentGetContentItem.description,
	...DynamicDocumentReferencedByGetDynamicDocument.description,
	...DynamicDocumentReferencedByGetDynamicDocuments.description,
	...DynamicDocumentReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference.description,
	...DynamicDocumentReferenceLinksGetDynamicDocumentReference.description,
	...DynamicDocumentReferenceLinksGetDynamicDocumentReferences.description,
	...DynamicDocumentReferenceLinksPostDynamicDocumentReference.description,
	...DynamicDocumentReferenceLinksUpdateDynamicDocumentReference.description,
	...DynamicDocumentRepresentationsGetRepresentation.description,
	...DynamicDocumentRepresentationsGetRepresentations.description,
	...DynamicDocumentRevisionsGetDynamicDocument.description,
	...DynamicDocumentRevisionsGetDynamicDocuments.description,
	...DynamicDocumentTranslationsGetDynamicDocument.description,
	...DynamicDocumentTranslationsGetDynamicDocuments.description,
	...DynamicDocumentUsedByGetDynamicDocument.description,
	...DynamicDocumentUsedByGetDynamicDocuments.description,
	...DynamicDocumentVersionsGetDynamicDocument.description,
	...DynamicDocumentVersionsGetDynamicDocuments.description,
	...DynamicDocumentXliffGetDynamicDocument.description,
	...DynamicDocumentXliffGetDynamicDocuments.description,
	...FunctionXliffPreferencesWithSourceLanguage.description,
	...GetBurstConfiguration.description,
	...GetBurstConfigurations.description,
	...GetDynamicDocument.description,
	...GetDynamicDocuments.description,
	...GetNote.description,
	...GetNotes.description,
	...NoteAttachmentsGetContentItem.description,
	...NoteAttachmentsGetContentItems.description,
	...NoteContextGetContainer.description,
	...NoteCreatorGetUser.description,
	...NoteFolderGetFolder.description,
	...NoteMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMember.description,
	...NoteMemberLinksGetDynamicDocumentMember.description,
	...NoteMemberLinksGetDynamicDocumentMembers.description,
	...NoteMemberLinksPostDynamicDocumentMember.description,
	...NoteMemberLinksUpdateDynamicDocumentMember.description,
	...NoteModifierGetUser.description,
	...NoteOrganizationGetOrganization.description,
	...NotePrimaryContentGetContentItem.description,
	...NoteReferencedByGetDynamicDocument.description,
	...NoteReferencedByGetDynamicDocuments.description,
	...NoteReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReference.description,
	...NoteReferenceLinksGetDynamicDocumentReference.description,
	...NoteReferenceLinksGetDynamicDocumentReferences.description,
	...NoteReferenceLinksPostDynamicDocumentReference.description,
	...NoteReferenceLinksUpdateDynamicDocumentReference.description,
	...NoteRepresentationsGetRepresentation.description,
	...NoteRepresentationsGetRepresentations.description,
	...NoteRevisionsGetDynamicDocument.description,
	...NoteRevisionsGetDynamicDocuments.description,
	...NoteTranslationsGetDynamicDocument.description,
	...NoteTranslationsGetDynamicDocuments.description,
	...NoteUsedByGetDynamicDocument.description,
	...NoteUsedByGetDynamicDocuments.description,
	...NoteVersionsGetDynamicDocument.description,
	...NoteVersionsGetDynamicDocuments.description,
	...NoteXliffGetDynamicDocument.description,
	...NoteXliffGetDynamicDocuments.description,
	...PtcDynamicDocMgmtBurstConfigurationActionCheckInWithKeepCheckedOut.description,
	...PtcDynamicDocMgmtBurstConfigurationActionCheckOut.description,
	...PtcDynamicDocMgmtBurstConfigurationActionReviseWith.description,
	...PtcDynamicDocMgmtBurstConfigurationActionSetStateWith.description,
	...PtcDynamicDocMgmtBurstConfigurationActionUndoCheckOut.description,
	...PtcDynamicDocMgmtBurstConfigurationFunctionGetLifeCycleTemplate.description,
	...PtcDynamicDocMgmtBurstConfigurationFunctionGetValidStateTransitions.description,
	...PtcDynamicDocMgmtBurstConfigurationFunctionIsCheckoutAllowed.description,
	...PtcDynamicDocMgmtDynamicDocumentActionCheckInWithKeepCheckedOut.description,
	...PtcDynamicDocMgmtDynamicDocumentActionCheckOut.description,
	...PtcDynamicDocMgmtDynamicDocumentActionReviseWith.description,
	...PtcDynamicDocMgmtDynamicDocumentActionSetStateWith.description,
	...PtcDynamicDocMgmtDynamicDocumentActionUndoCheckOut.description,
	...PtcDynamicDocMgmtDynamicDocumentActionUpdateCommonPropertiesWith.description,
	...PtcDynamicDocMgmtDynamicDocumentFunctionGetLifeCycleTemplate.description,
	...PtcDynamicDocMgmtDynamicDocumentFunctionGetValidStateTransitions.description,
	...PtcDynamicDocMgmtDynamicDocumentFunctionIsCheckoutAllowed.description,
	...PtcDynamicDocMgmtNoteActionCheckInWithKeepCheckedOut.description,
	...PtcDynamicDocMgmtNoteActionCheckOut.description,
	...PtcDynamicDocMgmtNoteActionReviseWith.description,
	...PtcDynamicDocMgmtNoteActionSetStateWith.description,
	...PtcDynamicDocMgmtNoteActionUndoCheckOut.description,
	...PtcDynamicDocMgmtNoteFunctionGetLifeCycleTemplate.description,
	...PtcDynamicDocMgmtNoteFunctionGetValidStateTransitions.description,
	...PtcDynamicDocMgmtNoteFunctionIsCheckoutAllowed.description,
	...UpdateBurstConfiguration.description,
	...UpdateDynamicDocument.description,
	...UpdateNote.description,
];
