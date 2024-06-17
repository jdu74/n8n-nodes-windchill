import * as ActionCheckInDocuments from './Action_CheckInDocuments';
import * as ActionCheckOutDocuments from './Action_CheckOutDocuments';
import * as ActionCreateDocuments from './Action_CreateDocuments';
import * as ActionDeleteDocuments from './Action_DeleteDocuments';
import * as ActionEditDocumentsSecurityLabels from './Action_EditDocumentsSecurityLabels';
import * as ActionReviseDocuments from './Action_ReviseDocuments';
import * as ActionSetStateDocuments from './Action_SetStateDocuments';
import * as ActionUndoCheckOutDocuments from './Action_UndoCheckOutDocuments';
import * as ActionUpdateDocuments from './Action_UpdateDocuments';
import * as DeleteDocument from './DeleteDocument';
import * as DocumentAttachmentsDeletePtcContentItem from './Document.Attachments.DeletePTC.ContentItem';
import * as DocumentAttachmentsGetContentItem from './Document.Attachments.GetContentItem';
import * as DocumentAttachmentsGetContentItems from './Document.Attachments.GetContentItems';
import * as DocumentAttachmentsPostContentItem from './Document.Attachments.PostContentItem';
import * as DocumentAttachmentsUpdateContentItem from './Document.Attachments.UpdateContentItem';
import * as DocumentContextGetContainer from './Document.Context.GetContainer';
import * as DocumentCreatorGetUser from './Document.Creator.GetUser';
import * as DocumentDocUsageLinksGetDocumentUsageLink from './Document.DocUsageLinks.GetDocumentUsageLink';
import * as DocumentDocUsageLinksGetDocumentUsageLinks from './Document.DocUsageLinks.GetDocumentUsageLinks';
import * as DocumentFolderGetFolder from './Document.Folder.GetFolder';
import * as DocumentModifierGetUser from './Document.Modifier.GetUser';
import * as DocumentOrganizationGetOrganization from './Document.Organization.GetOrganization';
import * as DocumentPrimaryContentGetContentItem from './Document.PrimaryContent.GetContentItem';
import * as DocumentRepresentationsGetRepresentation from './Document.Representations.GetRepresentation';
import * as DocumentRepresentationsGetRepresentations from './Document.Representations.GetRepresentations';
import * as DocumentRevisionsGetDocument from './Document.Revisions.GetDocument';
import * as DocumentRevisionsGetDocuments from './Document.Revisions.GetDocuments';
import * as DocumentVersionsGetDocument from './Document.Versions.GetDocument';
import * as DocumentVersionsGetDocuments from './Document.Versions.GetDocuments';
import * as GetAgendas from './GetAgendas';
import * as GetDocument from './GetDocument';
import * as GetDocuments from './GetDocuments';
import * as GetGenerals from './GetGenerals';
import * as GetInterCommDatas from './GetInterCommDatas';
import * as GetMinutess from './GetMinutess';
import * as GetPlans from './GetPlans';
import * as GetPresentations from './GetPresentations';
import * as GetReferenceDocuments from './GetReferenceDocuments';
import * as PostDocument from './PostDocument';
import * as PtcDocMgmtDocumentActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.DocMgmt.Document.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcDocMgmtDocumentActionCheckOutWith from './PTC.DocMgmt.Document.Action_CheckOut_With';
import * as PtcDocMgmtDocumentActionReviseWith from './PTC.DocMgmt.Document.Action_Revise_With';
import * as PtcDocMgmtDocumentActionSetStateWith from './PTC.DocMgmt.Document.Action_SetState_With';
import * as PtcDocMgmtDocumentActionUndoCheckOut from './PTC.DocMgmt.Document.Action_UndoCheckOut';
import * as PtcDocMgmtDocumentActionUpdateCommonPropertiesWith from './PTC.DocMgmt.Document.Action_UpdateCommonProperties_With';
import * as PtcDocMgmtDocumentActionUploadStage1ActionWithDelegateName from './PTC.DocMgmt.Document.Action_UploadStage1Action_With_DelegateName';
import * as PtcDocMgmtDocumentActionUploadStage3ActionWith from './PTC.DocMgmt.Document.Action_UploadStage3Action_With';
import * as PtcDocMgmtDocumentFunctionGetLifeCycleTemplate from './PTC.DocMgmt.Document.Function_GetLifeCycleTemplate';
import * as PtcDocMgmtDocumentFunctionGetValidStateTransitions from './PTC.DocMgmt.Document.Function_GetValidStateTransitions';
import * as PtcDocMgmtDocumentFunctionIsCheckoutAllowed from './PTC.DocMgmt.Document.Function_IsCheckoutAllowed';
import * as UpdateDocument from './UpdateDocument';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCheckInDocuments,
	ActionCheckOutDocuments,
	ActionCreateDocuments,
	ActionDeleteDocuments,
	ActionEditDocumentsSecurityLabels,
	ActionReviseDocuments,
	ActionSetStateDocuments,
	ActionUndoCheckOutDocuments,
	ActionUpdateDocuments,
	DeleteDocument,
	DocumentAttachmentsDeletePtcContentItem,
	DocumentAttachmentsGetContentItem,
	DocumentAttachmentsGetContentItems,
	DocumentAttachmentsPostContentItem,
	DocumentAttachmentsUpdateContentItem,
	DocumentContextGetContainer,
	DocumentCreatorGetUser,
	DocumentDocUsageLinksGetDocumentUsageLink,
	DocumentDocUsageLinksGetDocumentUsageLinks,
	DocumentFolderGetFolder,
	DocumentModifierGetUser,
	DocumentOrganizationGetOrganization,
	DocumentPrimaryContentGetContentItem,
	DocumentRepresentationsGetRepresentation,
	DocumentRepresentationsGetRepresentations,
	DocumentRevisionsGetDocument,
	DocumentRevisionsGetDocuments,
	DocumentVersionsGetDocument,
	DocumentVersionsGetDocuments,
	GetAgendas,
	GetDocument,
	GetDocuments,
	GetGenerals,
	GetInterCommDatas,
	GetMinutess,
	GetPlans,
	GetPresentations,
	GetReferenceDocuments,
	PostDocument,
	PtcDocMgmtDocumentActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcDocMgmtDocumentActionCheckOutWith,
	PtcDocMgmtDocumentActionReviseWith,
	PtcDocMgmtDocumentActionSetStateWith,
	PtcDocMgmtDocumentActionUndoCheckOut,
	PtcDocMgmtDocumentActionUpdateCommonPropertiesWith,
	PtcDocMgmtDocumentActionUploadStage1ActionWithDelegateName,
	PtcDocMgmtDocumentActionUploadStage3ActionWith,
	PtcDocMgmtDocumentFunctionGetLifeCycleTemplate,
	PtcDocMgmtDocumentFunctionGetValidStateTransitions,
	PtcDocMgmtDocumentFunctionIsCheckoutAllowed,
	UpdateDocument,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v6/DocMgmt',
		type: 'hidden',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
			},
		},
		default: 'POST /CheckInDocuments',
		options: [
			{
				name: 'Action_CheckInDocuments',
				value: 'POST /CheckInDocuments',
				description: 'Execute CheckInDocuments - post /CheckInDocuments',
				action: 'Action_CheckInDocuments',
			},
			{
				name: 'Action_CheckOutDocuments',
				value: 'POST /CheckOutDocuments',
				description: 'Execute CheckOutDocuments - post /CheckOutDocuments',
				action: 'Action_CheckOutDocuments',
			},
			{
				name: 'Action_CreateDocuments',
				value: 'POST /CreateDocuments',
				description: 'Execute CreateDocuments - post /CreateDocuments',
				action: 'Action_CreateDocuments',
			},
			{
				name: 'Action_DeleteDocuments',
				value: 'POST /DeleteDocuments',
				description: 'Execute DeleteDocuments - post /DeleteDocuments',
				action: 'Action_DeleteDocuments',
			},
			{
				name: 'Action_EditDocumentsSecurityLabels',
				value: 'POST /EditDocumentsSecurityLabels',
				description: 'Execute EditDocumentsSecurityLabels - post /EditDocumentsSecurityLabels',
				action: 'Action_EditDocumentsSecurityLabels',
			},
			{
				name: 'Action_ReviseDocuments',
				value: 'POST /ReviseDocuments',
				description: 'Execute ReviseDocuments - post /ReviseDocuments',
				action: 'Action_ReviseDocuments',
			},
			{
				name: 'Action_SetStateDocuments',
				value: 'POST /SetStateDocuments',
				description: 'Execute SetStateDocuments - post /SetStateDocuments',
				action: 'Action_SetStateDocuments',
			},
			{
				name: 'Action_UndoCheckOutDocuments',
				value: 'POST /UndoCheckOutDocuments',
				description: 'Execute UndoCheckOutDocuments - post /UndoCheckOutDocuments',
				action: 'Action_UndoCheckOutDocuments',
			},
			{
				name: 'Action_UpdateDocuments',
				value: 'POST /UpdateDocuments',
				description: 'Execute UpdateDocuments - post /UpdateDocuments',
				action: 'Action_UpdateDocuments',
			},
			{
				name: 'DeleteDocument',
				value: "DELETE /Documents('{DocumentId}')",
				description: "DeleteDocument - delete /Documents('{DocumentId}')",
				action: 'DeleteDocument',
			},
			{
				name: 'Document.Attachments.DeletePTC.ContentItem',
				value: "DELETE /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				action: 'Document.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'Document.Attachments.GetContentItem',
				value: "GET /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				action: 'Document.Attachments.GetContentItem',
			},
			{
				name: 'Document.Attachments.GetContentItems',
				value: "GET /Documents('{DocumentId}')/Attachments",
				description: "Get ContentItem - get /Documents('{DocumentId}')/Attachments",
				action: 'Document.Attachments.GetContentItems',
			},
			{
				name: 'Document.Attachments.PostContentItem',
				value: "POST /Documents('{DocumentId}')/Attachments",
				description: "Create ContentItem - post /Documents('{DocumentId}')/Attachments",
				action: 'Document.Attachments.PostContentItem',
			},
			{
				name: 'Document.Attachments.UpdateContentItem',
				value: "PATCH /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Documents('{DocumentId}')/Attachments('{ContentItemId}')",
				action: 'Document.Attachments.UpdateContentItem',
			},
			{
				name: 'Document.Context.GetContainer',
				value: "GET /Documents('{DocumentId}')/Context",
				description: "Get Container - get /Documents('{DocumentId}')/Context",
				action: 'Document.Context.GetContainer',
			},
			{
				name: 'Document.Creator.GetUser',
				value: "GET /Documents('{DocumentId}')/Creator",
				description: "Get User - get /Documents('{DocumentId}')/Creator",
				action: 'Document.Creator.GetUser',
			},
			{
				name: 'Document.DocUsageLinks.GetDocumentUsageLink',
				value: "GET /Documents('{DocumentId}')/DocUsageLinks('{DocumentUsageLinkId}')",
				description: "Get DocumentUsageLink for a given DocumentUsageLinkId - get /Documents('{DocumentId}')/DocUsageLinks('{DocumentUsageLinkId}')",
				action: 'Document.DocUsageLinks.GetDocumentUsageLink',
			},
			{
				name: 'Document.DocUsageLinks.GetDocumentUsageLinks',
				value: "GET /Documents('{DocumentId}')/DocUsageLinks",
				description: "Get DocumentUsageLink - get /Documents('{DocumentId}')/DocUsageLinks",
				action: 'Document.DocUsageLinks.GetDocumentUsageLinks',
			},
			{
				name: 'Document.Folder.GetFolder',
				value: "GET /Documents('{DocumentId}')/Folder",
				description: "Get Folder - get /Documents('{DocumentId}')/Folder",
				action: 'Document.Folder.GetFolder',
			},
			{
				name: 'Document.Modifier.GetUser',
				value: "GET /Documents('{DocumentId}')/Modifier",
				description: "Get User - get /Documents('{DocumentId}')/Modifier",
				action: 'Document.Modifier.GetUser',
			},
			{
				name: 'Document.Organization.GetOrganization',
				value: "GET /Documents('{DocumentId}')/Organization",
				description: "Get Organization - get /Documents('{DocumentId}')/Organization",
				action: 'Document.Organization.GetOrganization',
			},
			{
				name: 'Document.PrimaryContent.GetContentItem',
				value: "GET /Documents('{DocumentId}')/PrimaryContent",
				description: "Get ContentItem - get /Documents('{DocumentId}')/PrimaryContent",
				action: 'Document.PrimaryContent.GetContentItem',
			},
			{
				name: 'Document.Representations.GetRepresentation',
				value: "GET /Documents('{DocumentId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Documents('{DocumentId}')/Representations('{RepresentationId}')",
				action: 'Document.Representations.GetRepresentation',
			},
			{
				name: 'Document.Representations.GetRepresentations',
				value: "GET /Documents('{DocumentId}')/Representations",
				description: "Get Representation - get /Documents('{DocumentId}')/Representations",
				action: 'Document.Representations.GetRepresentations',
			},
			{
				name: 'Document.Revisions.GetDocument',
				value: "GET /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				description: "Get Document for a given RevisionsId - get /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				action: 'Document.Revisions.GetDocument',
			},
			{
				name: 'Document.Revisions.GetDocuments',
				value: "GET /Documents('{DocumentId}')/Revisions",
				description: "Get Document - get /Documents('{DocumentId}')/Revisions",
				action: 'Document.Revisions.GetDocuments',
			},
			{
				name: 'Document.Versions.GetDocument',
				value: "GET /Documents('{DocumentId}')/Versions('{VersionsId}')",
				description: "Get Document for a given VersionsId - get /Documents('{DocumentId}')/Versions('{VersionsId}')",
				action: 'Document.Versions.GetDocument',
			},
			{
				name: 'Document.Versions.GetDocuments',
				value: "GET /Documents('{DocumentId}')/Versions",
				description: "Get Document - get /Documents('{DocumentId}')/Versions",
				action: 'Document.Versions.GetDocuments',
			},
			{
				name: 'GetAgendas',
				value: 'GET /Documents/PTC.DocMgmt.Agenda',
				description: 'Get Documents of type Agenda - get /Documents/PTC.DocMgmt.Agenda',
				action: 'GetAgendas',
			},
			{
				name: 'GetDocument',
				value: "GET /Documents('{DocumentId}')",
				description: "Get Document for a given DocumentId - get /Documents('{DocumentId}')",
				action: 'GetDocument',
			},
			{
				name: 'GetDocuments',
				value: 'GET /Documents',
				description: 'Get Documents - get /Documents',
				action: 'GetDocuments',
			},
			{
				name: 'GetGenerals',
				value: 'GET /Documents/PTC.DocMgmt.General',
				description: 'Get Documents of type General - get /Documents/PTC.DocMgmt.General',
				action: 'GetGenerals',
			},
			{
				name: 'GetInterCommDatas',
				value: 'GET /Documents/PTC.DocMgmt.InterCommData',
				description: 'Get Documents of type InterCommData - get /Documents/PTC.DocMgmt.InterCommData',
				action: 'GetInterCommDatas',
			},
			{
				name: 'GetMinutess',
				value: 'GET /Documents/PTC.DocMgmt.Minutes',
				description: 'Get Documents of type Minutes - get /Documents/PTC.DocMgmt.Minutes',
				action: 'GetMinutess',
			},
			{
				name: 'GetPlans',
				value: 'GET /Documents/PTC.DocMgmt.Plan',
				description: 'Get Documents of type Plan - get /Documents/PTC.DocMgmt.Plan',
				action: 'GetPlans',
			},
			{
				name: 'GetPresentations',
				value: 'GET /Documents/PTC.DocMgmt.Presentation',
				description: 'Get Documents of type Presentation - get /Documents/PTC.DocMgmt.Presentation',
				action: 'GetPresentations',
			},
			{
				name: 'GetReferenceDocuments',
				value: 'GET /Documents/PTC.DocMgmt.ReferenceDocument',
				description: 'Get Documents of type ReferenceDocument - get /Documents/PTC.DocMgmt.ReferenceDocument',
				action: 'GetReferenceDocuments',
			},
			{
				name: 'PostDocument',
				value: 'POST /Documents',
				description: 'Create Document - post /Documents',
				action: 'PostDocument',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.CheckIn",
				description: "Execute CheckIn - post /Documents('{DocumentId}')/PTC.DocMgmt.CheckIn",
				action: 'PTC.DocMgmt.Document.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_CheckOut_With',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.CheckOut",
				description: "Execute CheckOut - post /Documents('{DocumentId}')/PTC.DocMgmt.CheckOut",
				action: 'PTC.DocMgmt.Document.Action_CheckOut_With',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_Revise_With',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.Revise",
				description: "Execute Revise - post /Documents('{DocumentId}')/PTC.DocMgmt.Revise",
				action: 'PTC.DocMgmt.Document.Action_Revise_With',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_SetState_With',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.SetState",
				description: "Execute SetState - post /Documents('{DocumentId}')/PTC.DocMgmt.SetState",
				action: 'PTC.DocMgmt.Document.Action_SetState_With',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_UndoCheckOut',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Documents('{DocumentId}')/PTC.DocMgmt.UndoCheckOut",
				action: 'PTC.DocMgmt.Document.Action_UndoCheckOut',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_UpdateCommonProperties_With',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.UpdateCommonProperties",
				description: "Execute UpdateCommonProperties - post /Documents('{DocumentId}')/PTC.DocMgmt.UpdateCommonProperties",
				action: 'PTC.DocMgmt.Document.Action_UpdateCommonProperties_With',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_UploadStage1Action_With_DelegateName',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /Documents('{DocumentId}')/PTC.DocMgmt.UploadStage1Action",
				action: 'PTC.DocMgmt.Document.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.DocMgmt.Document.Action_UploadStage3Action_With',
				value: "POST /Documents('{DocumentId}')/PTC.DocMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /Documents('{DocumentId}')/PTC.DocMgmt.UploadStage3Action",
				action: 'PTC.DocMgmt.Document.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.DocMgmt.Document.Function_GetLifeCycleTemplate',
				value: "GET /Documents('{DocumentId}')/PTC.DocMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Documents('{DocumentId}')/PTC.DocMgmt.GetLifeCycleTemplate()",
				action: 'PTC.DocMgmt.Document.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.DocMgmt.Document.Function_GetValidStateTransitions',
				value: "GET /Documents('{DocumentId}')/PTC.DocMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Documents('{DocumentId}')/PTC.DocMgmt.GetValidStateTransitions()",
				action: 'PTC.DocMgmt.Document.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.DocMgmt.Document.Function_IsCheckoutAllowed',
				value: "GET /Documents('{DocumentId}')/PTC.DocMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Documents('{DocumentId}')/PTC.DocMgmt.IsCheckoutAllowed()",
				action: 'PTC.DocMgmt.Document.Function_IsCheckoutAllowed',
			},
			{
				name: 'UpdateDocument',
				value: "PATCH /Documents('{DocumentId}')",
				description: "Update an existing Document - patch /Documents('{DocumentId}')",
				action: 'UpdateDocument',
			},
		],
	},
	...ActionCheckInDocuments.description,
	...ActionCheckOutDocuments.description,
	...ActionCreateDocuments.description,
	...ActionDeleteDocuments.description,
	...ActionEditDocumentsSecurityLabels.description,
	...ActionReviseDocuments.description,
	...ActionSetStateDocuments.description,
	...ActionUndoCheckOutDocuments.description,
	...ActionUpdateDocuments.description,
	...DeleteDocument.description,
	...DocumentAttachmentsDeletePtcContentItem.description,
	...DocumentAttachmentsGetContentItem.description,
	...DocumentAttachmentsGetContentItems.description,
	...DocumentAttachmentsPostContentItem.description,
	...DocumentAttachmentsUpdateContentItem.description,
	...DocumentContextGetContainer.description,
	...DocumentCreatorGetUser.description,
	...DocumentDocUsageLinksGetDocumentUsageLink.description,
	...DocumentDocUsageLinksGetDocumentUsageLinks.description,
	...DocumentFolderGetFolder.description,
	...DocumentModifierGetUser.description,
	...DocumentOrganizationGetOrganization.description,
	...DocumentPrimaryContentGetContentItem.description,
	...DocumentRepresentationsGetRepresentation.description,
	...DocumentRepresentationsGetRepresentations.description,
	...DocumentRevisionsGetDocument.description,
	...DocumentRevisionsGetDocuments.description,
	...DocumentVersionsGetDocument.description,
	...DocumentVersionsGetDocuments.description,
	...GetAgendas.description,
	...GetDocument.description,
	...GetDocuments.description,
	...GetGenerals.description,
	...GetInterCommDatas.description,
	...GetMinutess.description,
	...GetPlans.description,
	...GetPresentations.description,
	...GetReferenceDocuments.description,
	...PostDocument.description,
	...PtcDocMgmtDocumentActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcDocMgmtDocumentActionCheckOutWith.description,
	...PtcDocMgmtDocumentActionReviseWith.description,
	...PtcDocMgmtDocumentActionSetStateWith.description,
	...PtcDocMgmtDocumentActionUndoCheckOut.description,
	...PtcDocMgmtDocumentActionUpdateCommonPropertiesWith.description,
	...PtcDocMgmtDocumentActionUploadStage1ActionWithDelegateName.description,
	...PtcDocMgmtDocumentActionUploadStage3ActionWith.description,
	...PtcDocMgmtDocumentFunctionGetLifeCycleTemplate.description,
	...PtcDocMgmtDocumentFunctionGetValidStateTransitions.description,
	...PtcDocMgmtDocumentFunctionIsCheckoutAllowed.description,
	...UpdateDocument.description,
];
