import * as ActionCheckInDocuments from './Action_CheckInDocuments';
import * as ActionCheckInStandardControlCharacteristics from './Action_CheckInStandardControlCharacteristics';
import * as ActionCheckInStandardOperations from './Action_CheckInStandardOperations';
import * as ActionCheckInStandardProcedures from './Action_CheckInStandardProcedures';
import * as ActionCheckOutDocuments from './Action_CheckOutDocuments';
import * as ActionCheckOutStandardControlCharacteristics from './Action_CheckOutStandardControlCharacteristics';
import * as ActionCheckOutStandardOperations from './Action_CheckOutStandardOperations';
import * as ActionCheckOutStandardProcedures from './Action_CheckOutStandardProcedures';
import * as ActionReviseDocuments from './Action_ReviseDocuments';
import * as ActionReviseStandardControlCharacteristics from './Action_ReviseStandardControlCharacteristics';
import * as ActionReviseStandardOperations from './Action_ReviseStandardOperations';
import * as ActionReviseStandardProcedures from './Action_ReviseStandardProcedures';
import * as ActionSetStateDocuments from './Action_SetStateDocuments';
import * as ActionSetStateStandardControlCharacteristics from './Action_SetStateStandardControlCharacteristics';
import * as ActionSetStateStandardOperations from './Action_SetStateStandardOperations';
import * as ActionSetStateStandardProcedures from './Action_SetStateStandardProcedures';
import * as ActionUndoCheckOutDocuments from './Action_UndoCheckOutDocuments';
import * as ActionUndoCheckOutStandardControlCharacteristics from './Action_UndoCheckOutStandardControlCharacteristics';
import * as ActionUndoCheckOutStandardOperations from './Action_UndoCheckOutStandardOperations';
import * as ActionUndoCheckOutStandardProcedures from './Action_UndoCheckOutStandardProcedures';
import * as DeleteDocument from './DeleteDocument';
import * as DeleteReferenceDocument from './DeleteReferenceDocument';
import * as DocumentContextGetContainer from './Document.Context.GetContainer';
import * as DocumentCreatorGetUser from './Document.Creator.GetUser';
import * as DocumentModifierGetUser from './Document.Modifier.GetUser';
import * as DocumentRepresentationsGetRepresentation from './Document.Representations.GetRepresentation';
import * as DocumentRepresentationsGetRepresentations from './Document.Representations.GetRepresentations';
import * as DocumentRevisionsDeletePtcFactoryDocument from './Document.Revisions.DeletePTC.Factory.Document';
import * as DocumentRevisionsGetDocument from './Document.Revisions.GetDocument';
import * as DocumentRevisionsGetDocuments from './Document.Revisions.GetDocuments';
import * as DocumentRevisionsPostDocument from './Document.Revisions.PostDocument';
import * as DocumentRevisionsUpdateDocument from './Document.Revisions.UpdateDocument';
import * as DocumentVersionsDeletePtcFactoryDocument from './Document.Versions.DeletePTC.Factory.Document';
import * as DocumentVersionsGetDocument from './Document.Versions.GetDocument';
import * as DocumentVersionsGetDocuments from './Document.Versions.GetDocuments';
import * as DocumentVersionsPostDocument from './Document.Versions.PostDocument';
import * as DocumentVersionsUpdateDocument from './Document.Versions.UpdateDocument';
import * as GetDocument from './GetDocument';
import * as GetDocuments from './GetDocuments';
import * as GetReferenceDocument from './GetReferenceDocument';
import * as GetReferenceDocuments from './GetReferenceDocuments';
import * as GetResource from './GetResource';
import * as GetResources from './GetResources';
import * as GetStandardControlCharacteristic from './GetStandardControlCharacteristic';
import * as GetStandardControlCharacteristics from './GetStandardControlCharacteristics';
import * as GetStandardOperation from './GetStandardOperation';
import * as GetStandardOperations from './GetStandardOperations';
import * as GetStandardProcedure from './GetStandardProcedure';
import * as GetStandardProcedures from './GetStandardProcedures';
import * as PostDocument from './PostDocument';
import * as PtcFactoryStandardControlCharacteristicActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.Factory.StandardControlCharacteristic.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcFactoryStandardControlCharacteristicActionCheckOutWith from './PTC.Factory.StandardControlCharacteristic.Action_CheckOut_With';
import * as PtcFactoryStandardControlCharacteristicActionReviseWith from './PTC.Factory.StandardControlCharacteristic.Action_Revise_With';
import * as PtcFactoryStandardControlCharacteristicActionSetStateWith from './PTC.Factory.StandardControlCharacteristic.Action_SetState_With';
import * as PtcFactoryStandardControlCharacteristicActionUndoCheckOut from './PTC.Factory.StandardControlCharacteristic.Action_UndoCheckOut';
import * as PtcFactoryStandardControlCharacteristicActionUpdateSccRelatedLinksWithUpdateRequests from './PTC.Factory.StandardControlCharacteristic.Action_updateSCCRelatedLinks_With_UpdateRequests';
import * as PtcFactoryStandardControlCharacteristicFunctionGetLifeCycleTemplate from './PTC.Factory.StandardControlCharacteristic.Function_GetLifeCycleTemplate';
import * as PtcFactoryStandardControlCharacteristicFunctionGetValidStateTransitions from './PTC.Factory.StandardControlCharacteristic.Function_GetValidStateTransitions';
import * as PtcFactoryStandardControlCharacteristicFunctionIsCheckoutAllowed from './PTC.Factory.StandardControlCharacteristic.Function_IsCheckoutAllowed';
import * as PtcFactoryStandardOperationActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.Factory.StandardOperation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcFactoryStandardOperationActionCheckOutWith from './PTC.Factory.StandardOperation.Action_CheckOut_With';
import * as PtcFactoryStandardOperationActionReviseWith from './PTC.Factory.StandardOperation.Action_Revise_With';
import * as PtcFactoryStandardOperationActionSetStateWith from './PTC.Factory.StandardOperation.Action_SetState_With';
import * as PtcFactoryStandardOperationActionUndoCheckOut from './PTC.Factory.StandardOperation.Action_UndoCheckOut';
import * as PtcFactoryStandardOperationActionUpdateSopRelatedLinksWithUpdateRequests from './PTC.Factory.StandardOperation.Action_updateSOPRelatedLinks_With_UpdateRequests';
import * as PtcFactoryStandardOperationFunctionGetLifeCycleTemplate from './PTC.Factory.StandardOperation.Function_GetLifeCycleTemplate';
import * as PtcFactoryStandardOperationFunctionGetSopDetailsWith from './PTC.Factory.StandardOperation.Function_getSOPDetails_With';
import * as PtcFactoryStandardOperationFunctionGetValidStateTransitions from './PTC.Factory.StandardOperation.Function_GetValidStateTransitions';
import * as PtcFactoryStandardOperationFunctionIsCheckoutAllowed from './PTC.Factory.StandardOperation.Function_IsCheckoutAllowed';
import * as PtcFactoryStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.Factory.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcFactoryStandardProcedureActionCheckOutWith from './PTC.Factory.StandardProcedure.Action_CheckOut_With';
import * as PtcFactoryStandardProcedureActionReviseWith from './PTC.Factory.StandardProcedure.Action_Revise_With';
import * as PtcFactoryStandardProcedureActionSetStateWith from './PTC.Factory.StandardProcedure.Action_SetState_With';
import * as PtcFactoryStandardProcedureActionUndoCheckOut from './PTC.Factory.StandardProcedure.Action_UndoCheckOut';
import * as PtcFactoryStandardProcedureFunctionGetLifeCycleTemplate from './PTC.Factory.StandardProcedure.Function_GetLifeCycleTemplate';
import * as PtcFactoryStandardProcedureFunctionGetValidStateTransitions from './PTC.Factory.StandardProcedure.Function_GetValidStateTransitions';
import * as PtcFactoryStandardProcedureFunctionIsCheckoutAllowed from './PTC.Factory.StandardProcedure.Function_IsCheckoutAllowed';
import * as ReferenceDocumentRefDocumentsGetDocument from './ReferenceDocument.RefDocuments.GetDocument';
import * as ReferenceDocumentRefDocumentsGetDocuments from './ReferenceDocument.RefDocuments.GetDocuments';
import * as ResourceCreatorGetUser from './Resource.Creator.GetUser';
import * as ResourceModifierGetUser from './Resource.Modifier.GetUser';
import * as StandardControlCharacteristicContextGetContainer from './StandardControlCharacteristic.Context.GetContainer';
import * as StandardControlCharacteristicCreatorGetUser from './StandardControlCharacteristic.Creator.GetUser';
import * as StandardControlCharacteristicModifierGetUser from './StandardControlCharacteristic.Modifier.GetUser';
import * as StandardControlCharacteristicRevisionsGetStandardControlCharacteristic from './StandardControlCharacteristic.Revisions.GetStandardControlCharacteristic';
import * as StandardControlCharacteristicRevisionsGetStandardControlCharacteristics from './StandardControlCharacteristic.Revisions.GetStandardControlCharacteristics';
import * as StandardControlCharacteristicSccddLinksDeletePtcFactorySccDescribedByDocument from './StandardControlCharacteristic.SCCDDLinks.DeletePTC.Factory.SCCDescribedByDocument';
import * as StandardControlCharacteristicSccddLinksGetSccDescribedByDocument from './StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocument';
import * as StandardControlCharacteristicSccddLinksGetSccDescribedByDocuments from './StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocuments';
import * as StandardControlCharacteristicSccddLinksUpdateSccDescribedByDocument from './StandardControlCharacteristic.SCCDDLinks.UpdateSCCDescribedByDocument';
import * as StandardControlCharacteristicSccdrLinksDeletePtcFactorySccReferenceDocument from './StandardControlCharacteristic.SCCDRLinks.DeletePTC.Factory.SCCReferenceDocument';
import * as StandardControlCharacteristicSccdrLinksGetSccReferenceDocument from './StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocument';
import * as StandardControlCharacteristicSccdrLinksGetSccReferenceDocuments from './StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocuments';
import * as StandardControlCharacteristicSccdrLinksUpdateSccReferenceDocument from './StandardControlCharacteristic.SCCDRLinks.UpdateSCCReferenceDocument';
import * as StandardControlCharacteristicSccResourceLinksDeletePtcFactorySccResourceUsage from './StandardControlCharacteristic.SCCResourceLinks.DeletePTC.Factory.SCCResourceUsage';
import * as StandardControlCharacteristicSccResourceLinksGetSccResourceUsage from './StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsage';
import * as StandardControlCharacteristicSccResourceLinksGetSccResourceUsages from './StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsages';
import * as StandardControlCharacteristicSccResourceLinksUpdateSccResourceUsage from './StandardControlCharacteristic.SCCResourceLinks.UpdateSCCResourceUsage';
import * as StandardControlCharacteristicSccspLinksDeletePtcFactorySccStandardProcedureUsage from './StandardControlCharacteristic.SCCSPLinks.DeletePTC.Factory.SCCStandardProcedureUsage';
import * as StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsage from './StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsage';
import * as StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsages from './StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsages';
import * as StandardControlCharacteristicSccspLinksUpdateSccStandardProcedureUsage from './StandardControlCharacteristic.SCCSPLinks.UpdateSCCStandardProcedureUsage';
import * as StandardControlCharacteristicVersionsGetStandardControlCharacteristic from './StandardControlCharacteristic.Versions.GetStandardControlCharacteristic';
import * as StandardControlCharacteristicVersionsGetStandardControlCharacteristics from './StandardControlCharacteristic.Versions.GetStandardControlCharacteristics';
import * as StandardOperationContextGetContainer from './StandardOperation.Context.GetContainer';
import * as StandardOperationCreatorGetUser from './StandardOperation.Creator.GetUser';
import * as StandardOperationModifierGetUser from './StandardOperation.Modifier.GetUser';
import * as StandardOperationRevisionsGetStandardOperation from './StandardOperation.Revisions.GetStandardOperation';
import * as StandardOperationRevisionsGetStandardOperations from './StandardOperation.Revisions.GetStandardOperations';
import * as StandardOperationSopsccLinksDeletePtcFactorySopToSccLink from './StandardOperation.SOPSCCLinks.DeletePTC.Factory.SOPToSCCLink';
import * as StandardOperationSopsccLinksGetSopToSccLink from './StandardOperation.SOPSCCLinks.GetSOPToSCCLink';
import * as StandardOperationSopsccLinksGetSopToSccLinks from './StandardOperation.SOPSCCLinks.GetSOPToSCCLinks';
import * as StandardOperationSopsccLinksUpdateSopToSccLink from './StandardOperation.SOPSCCLinks.UpdateSOPToSCCLink';
import * as StandardOperationVersionsGetStandardOperation from './StandardOperation.Versions.GetStandardOperation';
import * as StandardOperationVersionsGetStandardOperations from './StandardOperation.Versions.GetStandardOperations';
import * as StandardProcedureContextGetContainer from './StandardProcedure.Context.GetContainer';
import * as StandardProcedureCreatorGetUser from './StandardProcedure.Creator.GetUser';
import * as StandardProcedureModifierGetUser from './StandardProcedure.Modifier.GetUser';
import * as StandardProcedureRevisionsGetStandardProcedure from './StandardProcedure.Revisions.GetStandardProcedure';
import * as StandardProcedureRevisionsGetStandardProcedures from './StandardProcedure.Revisions.GetStandardProcedures';
import * as StandardProcedureVersionsGetStandardProcedure from './StandardProcedure.Versions.GetStandardProcedure';
import * as StandardProcedureVersionsGetStandardProcedures from './StandardProcedure.Versions.GetStandardProcedures';
import * as UpdateDocument from './UpdateDocument';
import * as UpdateReferenceDocument from './UpdateReferenceDocument';
import * as UpdateStandardControlCharacteristic from './UpdateStandardControlCharacteristic';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCheckInDocuments,
	ActionCheckInStandardControlCharacteristics,
	ActionCheckInStandardOperations,
	ActionCheckInStandardProcedures,
	ActionCheckOutDocuments,
	ActionCheckOutStandardControlCharacteristics,
	ActionCheckOutStandardOperations,
	ActionCheckOutStandardProcedures,
	ActionReviseDocuments,
	ActionReviseStandardControlCharacteristics,
	ActionReviseStandardOperations,
	ActionReviseStandardProcedures,
	ActionSetStateDocuments,
	ActionSetStateStandardControlCharacteristics,
	ActionSetStateStandardOperations,
	ActionSetStateStandardProcedures,
	ActionUndoCheckOutDocuments,
	ActionUndoCheckOutStandardControlCharacteristics,
	ActionUndoCheckOutStandardOperations,
	ActionUndoCheckOutStandardProcedures,
	DeleteDocument,
	DeleteReferenceDocument,
	DocumentContextGetContainer,
	DocumentCreatorGetUser,
	DocumentModifierGetUser,
	DocumentRepresentationsGetRepresentation,
	DocumentRepresentationsGetRepresentations,
	DocumentRevisionsDeletePtcFactoryDocument,
	DocumentRevisionsGetDocument,
	DocumentRevisionsGetDocuments,
	DocumentRevisionsPostDocument,
	DocumentRevisionsUpdateDocument,
	DocumentVersionsDeletePtcFactoryDocument,
	DocumentVersionsGetDocument,
	DocumentVersionsGetDocuments,
	DocumentVersionsPostDocument,
	DocumentVersionsUpdateDocument,
	GetDocument,
	GetDocuments,
	GetReferenceDocument,
	GetReferenceDocuments,
	GetResource,
	GetResources,
	GetStandardControlCharacteristic,
	GetStandardControlCharacteristics,
	GetStandardOperation,
	GetStandardOperations,
	GetStandardProcedure,
	GetStandardProcedures,
	PostDocument,
	PtcFactoryStandardControlCharacteristicActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcFactoryStandardControlCharacteristicActionCheckOutWith,
	PtcFactoryStandardControlCharacteristicActionReviseWith,
	PtcFactoryStandardControlCharacteristicActionSetStateWith,
	PtcFactoryStandardControlCharacteristicActionUndoCheckOut,
	PtcFactoryStandardControlCharacteristicActionUpdateSccRelatedLinksWithUpdateRequests,
	PtcFactoryStandardControlCharacteristicFunctionGetLifeCycleTemplate,
	PtcFactoryStandardControlCharacteristicFunctionGetValidStateTransitions,
	PtcFactoryStandardControlCharacteristicFunctionIsCheckoutAllowed,
	PtcFactoryStandardOperationActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcFactoryStandardOperationActionCheckOutWith,
	PtcFactoryStandardOperationActionReviseWith,
	PtcFactoryStandardOperationActionSetStateWith,
	PtcFactoryStandardOperationActionUndoCheckOut,
	PtcFactoryStandardOperationActionUpdateSopRelatedLinksWithUpdateRequests,
	PtcFactoryStandardOperationFunctionGetLifeCycleTemplate,
	PtcFactoryStandardOperationFunctionGetSopDetailsWith,
	PtcFactoryStandardOperationFunctionGetValidStateTransitions,
	PtcFactoryStandardOperationFunctionIsCheckoutAllowed,
	PtcFactoryStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcFactoryStandardProcedureActionCheckOutWith,
	PtcFactoryStandardProcedureActionReviseWith,
	PtcFactoryStandardProcedureActionSetStateWith,
	PtcFactoryStandardProcedureActionUndoCheckOut,
	PtcFactoryStandardProcedureFunctionGetLifeCycleTemplate,
	PtcFactoryStandardProcedureFunctionGetValidStateTransitions,
	PtcFactoryStandardProcedureFunctionIsCheckoutAllowed,
	ReferenceDocumentRefDocumentsGetDocument,
	ReferenceDocumentRefDocumentsGetDocuments,
	ResourceCreatorGetUser,
	ResourceModifierGetUser,
	StandardControlCharacteristicContextGetContainer,
	StandardControlCharacteristicCreatorGetUser,
	StandardControlCharacteristicModifierGetUser,
	StandardControlCharacteristicRevisionsGetStandardControlCharacteristic,
	StandardControlCharacteristicRevisionsGetStandardControlCharacteristics,
	StandardControlCharacteristicSccddLinksDeletePtcFactorySccDescribedByDocument,
	StandardControlCharacteristicSccddLinksGetSccDescribedByDocument,
	StandardControlCharacteristicSccddLinksGetSccDescribedByDocuments,
	StandardControlCharacteristicSccddLinksUpdateSccDescribedByDocument,
	StandardControlCharacteristicSccdrLinksDeletePtcFactorySccReferenceDocument,
	StandardControlCharacteristicSccdrLinksGetSccReferenceDocument,
	StandardControlCharacteristicSccdrLinksGetSccReferenceDocuments,
	StandardControlCharacteristicSccdrLinksUpdateSccReferenceDocument,
	StandardControlCharacteristicSccResourceLinksDeletePtcFactorySccResourceUsage,
	StandardControlCharacteristicSccResourceLinksGetSccResourceUsage,
	StandardControlCharacteristicSccResourceLinksGetSccResourceUsages,
	StandardControlCharacteristicSccResourceLinksUpdateSccResourceUsage,
	StandardControlCharacteristicSccspLinksDeletePtcFactorySccStandardProcedureUsage,
	StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsage,
	StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsages,
	StandardControlCharacteristicSccspLinksUpdateSccStandardProcedureUsage,
	StandardControlCharacteristicVersionsGetStandardControlCharacteristic,
	StandardControlCharacteristicVersionsGetStandardControlCharacteristics,
	StandardOperationContextGetContainer,
	StandardOperationCreatorGetUser,
	StandardOperationModifierGetUser,
	StandardOperationRevisionsGetStandardOperation,
	StandardOperationRevisionsGetStandardOperations,
	StandardOperationSopsccLinksDeletePtcFactorySopToSccLink,
	StandardOperationSopsccLinksGetSopToSccLink,
	StandardOperationSopsccLinksGetSopToSccLinks,
	StandardOperationSopsccLinksUpdateSopToSccLink,
	StandardOperationVersionsGetStandardOperation,
	StandardOperationVersionsGetStandardOperations,
	StandardProcedureContextGetContainer,
	StandardProcedureCreatorGetUser,
	StandardProcedureModifierGetUser,
	StandardProcedureRevisionsGetStandardProcedure,
	StandardProcedureRevisionsGetStandardProcedures,
	StandardProcedureVersionsGetStandardProcedure,
	StandardProcedureVersionsGetStandardProcedures,
	UpdateDocument,
	UpdateReferenceDocument,
	UpdateStandardControlCharacteristic,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v5/Factory',
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
					'PTC.Factory',
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
				name: 'Action_CheckInStandardControlCharacteristics',
				value: 'POST /CheckInStandardControlCharacteristics',
				description: 'Execute CheckInStandardControlCharacteristics - post /CheckInStandardControlCharacteristics',
				action: 'Action_CheckInStandardControlCharacteristics',
			},
			{
				name: 'Action_CheckInStandardOperations',
				value: 'POST /CheckInStandardOperations',
				description: 'Execute CheckInStandardOperations - post /CheckInStandardOperations',
				action: 'Action_CheckInStandardOperations',
			},
			{
				name: 'Action_CheckInStandardProcedures',
				value: 'POST /CheckInStandardProcedures',
				description: 'Execute CheckInStandardProcedures - post /CheckInStandardProcedures',
				action: 'Action_CheckInStandardProcedures',
			},
			{
				name: 'Action_CheckOutDocuments',
				value: 'POST /CheckOutDocuments',
				description: 'Execute CheckOutDocuments - post /CheckOutDocuments',
				action: 'Action_CheckOutDocuments',
			},
			{
				name: 'Action_CheckOutStandardControlCharacteristics',
				value: 'POST /CheckOutStandardControlCharacteristics',
				description: 'Execute CheckOutStandardControlCharacteristics - post /CheckOutStandardControlCharacteristics',
				action: 'Action_CheckOutStandardControlCharacteristics',
			},
			{
				name: 'Action_CheckOutStandardOperations',
				value: 'POST /CheckOutStandardOperations',
				description: 'Execute CheckOutStandardOperations - post /CheckOutStandardOperations',
				action: 'Action_CheckOutStandardOperations',
			},
			{
				name: 'Action_CheckOutStandardProcedures',
				value: 'POST /CheckOutStandardProcedures',
				description: 'Execute CheckOutStandardProcedures - post /CheckOutStandardProcedures',
				action: 'Action_CheckOutStandardProcedures',
			},
			{
				name: 'Action_ReviseDocuments',
				value: 'POST /ReviseDocuments',
				description: 'Execute ReviseDocuments - post /ReviseDocuments',
				action: 'Action_ReviseDocuments',
			},
			{
				name: 'Action_ReviseStandardControlCharacteristics',
				value: 'POST /ReviseStandardControlCharacteristics',
				description: 'Execute ReviseStandardControlCharacteristics - post /ReviseStandardControlCharacteristics',
				action: 'Action_ReviseStandardControlCharacteristics',
			},
			{
				name: 'Action_ReviseStandardOperations',
				value: 'POST /ReviseStandardOperations',
				description: 'Execute ReviseStandardOperations - post /ReviseStandardOperations',
				action: 'Action_ReviseStandardOperations',
			},
			{
				name: 'Action_ReviseStandardProcedures',
				value: 'POST /ReviseStandardProcedures',
				description: 'Execute ReviseStandardProcedures - post /ReviseStandardProcedures',
				action: 'Action_ReviseStandardProcedures',
			},
			{
				name: 'Action_SetStateDocuments',
				value: 'POST /SetStateDocuments',
				description: 'Execute SetStateDocuments - post /SetStateDocuments',
				action: 'Action_SetStateDocuments',
			},
			{
				name: 'Action_SetStateStandardControlCharacteristics',
				value: 'POST /SetStateStandardControlCharacteristics',
				description: 'Execute SetStateStandardControlCharacteristics - post /SetStateStandardControlCharacteristics',
				action: 'Action_SetStateStandardControlCharacteristics',
			},
			{
				name: 'Action_SetStateStandardOperations',
				value: 'POST /SetStateStandardOperations',
				description: 'Execute SetStateStandardOperations - post /SetStateStandardOperations',
				action: 'Action_SetStateStandardOperations',
			},
			{
				name: 'Action_SetStateStandardProcedures',
				value: 'POST /SetStateStandardProcedures',
				description: 'Execute SetStateStandardProcedures - post /SetStateStandardProcedures',
				action: 'Action_SetStateStandardProcedures',
			},
			{
				name: 'Action_UndoCheckOutDocuments',
				value: 'POST /UndoCheckOutDocuments',
				description: 'Execute UndoCheckOutDocuments - post /UndoCheckOutDocuments',
				action: 'Action_UndoCheckOutDocuments',
			},
			{
				name: 'Action_UndoCheckOutStandardControlCharacteristics',
				value: 'POST /UndoCheckOutStandardControlCharacteristics',
				description: 'Execute UndoCheckOutStandardControlCharacteristics - post /UndoCheckOutStandardControlCharacteristics',
				action: 'Action_UndoCheckOutStandardControlCharacteristics',
			},
			{
				name: 'Action_UndoCheckOutStandardOperations',
				value: 'POST /UndoCheckOutStandardOperations',
				description: 'Execute UndoCheckOutStandardOperations - post /UndoCheckOutStandardOperations',
				action: 'Action_UndoCheckOutStandardOperations',
			},
			{
				name: 'Action_UndoCheckOutStandardProcedures',
				value: 'POST /UndoCheckOutStandardProcedures',
				description: 'Execute UndoCheckOutStandardProcedures - post /UndoCheckOutStandardProcedures',
				action: 'Action_UndoCheckOutStandardProcedures',
			},
			{
				name: 'DeleteDocument',
				value: "DELETE /Documents('{DocumentId}')",
				description: "DeleteDocument - delete /Documents('{DocumentId}')",
				action: 'DeleteDocument',
			},
			{
				name: 'DeleteReferenceDocument',
				value: "DELETE /ReferenceDocuments('{ReferenceDocumentId}')",
				description: "DeleteReferenceDocument - delete /ReferenceDocuments('{ReferenceDocumentId}')",
				action: 'DeleteReferenceDocument',
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
				name: 'Document.Modifier.GetUser',
				value: "GET /Documents('{DocumentId}')/Modifier",
				description: "Get User - get /Documents('{DocumentId}')/Modifier",
				action: 'Document.Modifier.GetUser',
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
				name: 'Document.Revisions.DeletePTC.Factory.Document',
				value: "DELETE /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				description: "Delete an existing Document - delete /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				action: 'Document.Revisions.DeletePTC.Factory.Document',
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
				name: 'Document.Revisions.PostDocument',
				value: "POST /Documents('{DocumentId}')/Revisions",
				description: "Create Document - post /Documents('{DocumentId}')/Revisions",
				action: 'Document.Revisions.PostDocument',
			},
			{
				name: 'Document.Revisions.UpdateDocument',
				value: "PATCH /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				description: "Update an existing Document - patch /Documents('{DocumentId}')/Revisions('{RevisionsId}')",
				action: 'Document.Revisions.UpdateDocument',
			},
			{
				name: 'Document.Versions.DeletePTC.Factory.Document',
				value: "DELETE /Documents('{DocumentId}')/Versions('{VersionsId}')",
				description: "Delete an existing Document - delete /Documents('{DocumentId}')/Versions('{VersionsId}')",
				action: 'Document.Versions.DeletePTC.Factory.Document',
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
				name: 'Document.Versions.PostDocument',
				value: "POST /Documents('{DocumentId}')/Versions",
				description: "Create Document - post /Documents('{DocumentId}')/Versions",
				action: 'Document.Versions.PostDocument',
			},
			{
				name: 'Document.Versions.UpdateDocument',
				value: "PATCH /Documents('{DocumentId}')/Versions('{VersionsId}')",
				description: "Update an existing Document - patch /Documents('{DocumentId}')/Versions('{VersionsId}')",
				action: 'Document.Versions.UpdateDocument',
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
				name: 'GetReferenceDocument',
				value: "GET /ReferenceDocuments('{ReferenceDocumentId}')",
				description: "Get ReferenceDocument for a given ReferenceDocumentId - get /ReferenceDocuments('{ReferenceDocumentId}')",
				action: 'GetReferenceDocument',
			},
			{
				name: 'GetReferenceDocuments',
				value: 'GET /ReferenceDocuments',
				description: 'Get ReferenceDocuments - get /ReferenceDocuments',
				action: 'GetReferenceDocuments',
			},
			{
				name: 'GetResource',
				value: "GET /Resources('{ResourceId}')",
				description: "Get Resource for a given ResourceId - get /Resources('{ResourceId}')",
				action: 'GetResource',
			},
			{
				name: 'GetResources',
				value: 'GET /Resources',
				description: 'Get Resources - get /Resources',
				action: 'GetResources',
			},
			{
				name: 'GetStandardControlCharacteristic',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
				description: "Get StandardControlCharacteristic for a given StandardControlCharacteristicId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
				action: 'GetStandardControlCharacteristic',
			},
			{
				name: 'GetStandardControlCharacteristics',
				value: 'GET /StandardControlCharacteristics',
				description: 'Get StandardControlCharacteristics - get /StandardControlCharacteristics',
				action: 'GetStandardControlCharacteristics',
			},
			{
				name: 'GetStandardOperation',
				value: "GET /StandardOperations('{StandardOperationId}')",
				description: "Get StandardOperation for a given StandardOperationId - get /StandardOperations('{StandardOperationId}')",
				action: 'GetStandardOperation',
			},
			{
				name: 'GetStandardOperations',
				value: 'GET /StandardOperations',
				description: 'Get StandardOperations - get /StandardOperations',
				action: 'GetStandardOperations',
			},
			{
				name: 'GetStandardProcedure',
				value: "GET /StandardProcedures('{StandardProcedureId}')",
				description: "Get StandardProcedure for a given StandardProcedureId - get /StandardProcedures('{StandardProcedureId}')",
				action: 'GetStandardProcedure',
			},
			{
				name: 'GetStandardProcedures',
				value: 'GET /StandardProcedures',
				description: 'Get StandardProcedures - get /StandardProcedures',
				action: 'GetStandardProcedures',
			},
			{
				name: 'PostDocument',
				value: 'POST /Documents',
				description: 'Create Document - post /Documents',
				action: 'PostDocument',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
				description: "Execute CheckIn - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_CheckOut_With',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckOut",
				description: "Execute CheckOut - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckOut",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_CheckOut_With',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_Revise_With',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.Revise",
				description: "Execute Revise - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.Revise",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_Revise_With',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_SetState_With',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.SetState",
				description: "Execute SetState - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.SetState",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_SetState_With',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_UndoCheckOut',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.UndoCheckOut",
				description: "Execute UndoCheckOut - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.UndoCheckOut",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_UndoCheckOut',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Action_updateSCCRelatedLinks_With_UpdateRequests',
				value: "POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.updateSCCRelatedLinks",
				description: "An action to create or delete links between Standard Control Characteristic to described by documents, reference documents, standard procedures or tools - post /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.updateSCCRelatedLinks",
				action: 'PTC.Factory.StandardControlCharacteristic.Action_updateSCCRelatedLinks_With_UpdateRequests',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Function_GetLifeCycleTemplate',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.GetLifeCycleTemplate()",
				action: 'PTC.Factory.StandardControlCharacteristic.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Function_GetValidStateTransitions',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.GetValidStateTransitions()",
				action: 'PTC.Factory.StandardControlCharacteristic.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.Factory.StandardControlCharacteristic.Function_IsCheckoutAllowed',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.IsCheckoutAllowed()",
				action: 'PTC.Factory.StandardControlCharacteristic.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.CheckIn",
				description: "Execute CheckIn - post /StandardOperations('{StandardOperationId}')/PTC.Factory.CheckIn",
				action: 'PTC.Factory.StandardOperation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_CheckOut_With',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.CheckOut",
				description: "Execute CheckOut - post /StandardOperations('{StandardOperationId}')/PTC.Factory.CheckOut",
				action: 'PTC.Factory.StandardOperation.Action_CheckOut_With',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_Revise_With',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.Revise",
				description: "Execute Revise - post /StandardOperations('{StandardOperationId}')/PTC.Factory.Revise",
				action: 'PTC.Factory.StandardOperation.Action_Revise_With',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_SetState_With',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.SetState",
				description: "Execute SetState - post /StandardOperations('{StandardOperationId}')/PTC.Factory.SetState",
				action: 'PTC.Factory.StandardOperation.Action_SetState_With',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_UndoCheckOut',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.UndoCheckOut",
				description: "Execute UndoCheckOut - post /StandardOperations('{StandardOperationId}')/PTC.Factory.UndoCheckOut",
				action: 'PTC.Factory.StandardOperation.Action_UndoCheckOut',
			},
			{
				name: 'PTC.Factory.StandardOperation.Action_updateSOPRelatedLinks_With_UpdateRequests',
				value: "POST /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
				description: "An action to create or delete links between Standard Operation - Standard Control Characteristic link to described by documents, reference documents, standard procedures and tools; This action also update properties of the used Standard Control Characteristic - post /StandardOperations('{StandardOperationId}')/PTC.Factory.updateSOPRelatedLinks",
				action: 'PTC.Factory.StandardOperation.Action_updateSOPRelatedLinks_With_UpdateRequests',
			},
			{
				name: 'PTC.Factory.StandardOperation.Function_GetLifeCycleTemplate',
				value: "GET /StandardOperations('{StandardOperationId}')/PTC.Factory.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /StandardOperations('{StandardOperationId}')/PTC.Factory.GetLifeCycleTemplate()",
				action: 'PTC.Factory.StandardOperation.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.Factory.StandardOperation.Function_getSOPDetails_With',
				value: "GET /StandardOperations('{StandardOperationId}')/PTC.Factory.getSOPDetails(NavName='{NavName}')",
				description: "A function to query Standard Operation to Standard Control Characteristic links and expand the query to described by documents, reference documents, standard procedures and tools associated with Standard Operation - Standard Control Characteristic links - get /StandardOperations('{StandardOperationId}')/PTC.Factory.getSOPDetails(NavName='{NavName}')",
				action: 'PTC.Factory.StandardOperation.Function_getSOPDetails_With',
			},
			{
				name: 'PTC.Factory.StandardOperation.Function_GetValidStateTransitions',
				value: "GET /StandardOperations('{StandardOperationId}')/PTC.Factory.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /StandardOperations('{StandardOperationId}')/PTC.Factory.GetValidStateTransitions()",
				action: 'PTC.Factory.StandardOperation.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.Factory.StandardOperation.Function_IsCheckoutAllowed',
				value: "GET /StandardOperations('{StandardOperationId}')/PTC.Factory.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /StandardOperations('{StandardOperationId}')/PTC.Factory.IsCheckoutAllowed()",
				action: 'PTC.Factory.StandardOperation.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.Factory.CheckIn",
				description: "Execute CheckIn - post /StandardProcedures('{StandardProcedureId}')/PTC.Factory.CheckIn",
				action: 'PTC.Factory.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Action_CheckOut_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.Factory.CheckOut",
				description: "Execute CheckOut - post /StandardProcedures('{StandardProcedureId}')/PTC.Factory.CheckOut",
				action: 'PTC.Factory.StandardProcedure.Action_CheckOut_With',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Action_Revise_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.Factory.Revise",
				description: "Execute Revise - post /StandardProcedures('{StandardProcedureId}')/PTC.Factory.Revise",
				action: 'PTC.Factory.StandardProcedure.Action_Revise_With',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Action_SetState_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.Factory.SetState",
				description: "Execute SetState - post /StandardProcedures('{StandardProcedureId}')/PTC.Factory.SetState",
				action: 'PTC.Factory.StandardProcedure.Action_SetState_With',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Action_UndoCheckOut',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.Factory.UndoCheckOut",
				description: "Execute UndoCheckOut - post /StandardProcedures('{StandardProcedureId}')/PTC.Factory.UndoCheckOut",
				action: 'PTC.Factory.StandardProcedure.Action_UndoCheckOut',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Function_GetLifeCycleTemplate',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.Factory.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /StandardProcedures('{StandardProcedureId}')/PTC.Factory.GetLifeCycleTemplate()",
				action: 'PTC.Factory.StandardProcedure.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Function_GetValidStateTransitions',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.Factory.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /StandardProcedures('{StandardProcedureId}')/PTC.Factory.GetValidStateTransitions()",
				action: 'PTC.Factory.StandardProcedure.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.Factory.StandardProcedure.Function_IsCheckoutAllowed',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.Factory.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /StandardProcedures('{StandardProcedureId}')/PTC.Factory.IsCheckoutAllowed()",
				action: 'PTC.Factory.StandardProcedure.Function_IsCheckoutAllowed',
			},
			{
				name: 'ReferenceDocument.RefDocuments.GetDocument',
				value: "GET /ReferenceDocuments('{ReferenceDocumentId}')/RefDocuments('{DocumentId}')",
				description: "Get Document for a given DocumentId - get /ReferenceDocuments('{ReferenceDocumentId}')/RefDocuments('{DocumentId}')",
				action: 'ReferenceDocument.RefDocuments.GetDocument',
			},
			{
				name: 'ReferenceDocument.RefDocuments.GetDocuments',
				value: "GET /ReferenceDocuments('{ReferenceDocumentId}')/RefDocuments",
				description: "Get Document - get /ReferenceDocuments('{ReferenceDocumentId}')/RefDocuments",
				action: 'ReferenceDocument.RefDocuments.GetDocuments',
			},
			{
				name: 'Resource.Creator.GetUser',
				value: "GET /Resources('{ResourceId}')/Creator",
				description: "Get User - get /Resources('{ResourceId}')/Creator",
				action: 'Resource.Creator.GetUser',
			},
			{
				name: 'Resource.Modifier.GetUser',
				value: "GET /Resources('{ResourceId}')/Modifier",
				description: "Get User - get /Resources('{ResourceId}')/Modifier",
				action: 'Resource.Modifier.GetUser',
			},
			{
				name: 'StandardControlCharacteristic.Context.GetContainer',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Context",
				description: "Get Container - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Context",
				action: 'StandardControlCharacteristic.Context.GetContainer',
			},
			{
				name: 'StandardControlCharacteristic.Creator.GetUser',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Creator",
				description: "Get User - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Creator",
				action: 'StandardControlCharacteristic.Creator.GetUser',
			},
			{
				name: 'StandardControlCharacteristic.Modifier.GetUser',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Modifier",
				description: "Get User - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Modifier",
				action: 'StandardControlCharacteristic.Modifier.GetUser',
			},
			{
				name: 'StandardControlCharacteristic.Revisions.GetStandardControlCharacteristic',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Revisions('{RevisionsId}')",
				description: "Get StandardControlCharacteristic for a given RevisionsId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Revisions('{RevisionsId}')",
				action: 'StandardControlCharacteristic.Revisions.GetStandardControlCharacteristic',
			},
			{
				name: 'StandardControlCharacteristic.Revisions.GetStandardControlCharacteristics',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Revisions",
				description: "Get StandardControlCharacteristic - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Revisions",
				action: 'StandardControlCharacteristic.Revisions.GetStandardControlCharacteristics',
			},
			{
				name: 'StandardControlCharacteristic.SCCDDLinks.DeletePTC.Factory.SCCDescribedByDocument',
				value: "DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				description: "Delete an existing SCCDescribedByDocument - delete /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDDLinks.DeletePTC.Factory.SCCDescribedByDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocument',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				description: "Get SCCDescribedByDocument for a given SCCDescribedByDocumentId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocuments',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks",
				description: "Get SCCDescribedByDocument - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks",
				action: 'StandardControlCharacteristic.SCCDDLinks.GetSCCDescribedByDocuments',
			},
			{
				name: 'StandardControlCharacteristic.SCCDDLinks.UpdateSCCDescribedByDocument',
				value: "PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				description: "Update an existing SCCDescribedByDocument - patch /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDDLinks.UpdateSCCDescribedByDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCDRLinks.DeletePTC.Factory.SCCReferenceDocument',
				value: "DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				description: "Delete an existing SCCReferenceDocument - delete /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDRLinks.DeletePTC.Factory.SCCReferenceDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocument',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				description: "Get SCCReferenceDocument for a given SCCReferenceDocumentId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocuments',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks",
				description: "Get SCCReferenceDocument - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks",
				action: 'StandardControlCharacteristic.SCCDRLinks.GetSCCReferenceDocuments',
			},
			{
				name: 'StandardControlCharacteristic.SCCDRLinks.UpdateSCCReferenceDocument',
				value: "PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				description: "Update an existing SCCReferenceDocument - patch /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				action: 'StandardControlCharacteristic.SCCDRLinks.UpdateSCCReferenceDocument',
			},
			{
				name: 'StandardControlCharacteristic.SCCResourceLinks.DeletePTC.Factory.SCCResourceUsage',
				value: "DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				description: "Delete an existing SCCResourceUsage - delete /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				action: 'StandardControlCharacteristic.SCCResourceLinks.DeletePTC.Factory.SCCResourceUsage',
			},
			{
				name: 'StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsage',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				description: "Get SCCResourceUsage for a given SCCResourceUsageId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				action: 'StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsage',
			},
			{
				name: 'StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsages',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks",
				description: "Get SCCResourceUsage - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks",
				action: 'StandardControlCharacteristic.SCCResourceLinks.GetSCCResourceUsages',
			},
			{
				name: 'StandardControlCharacteristic.SCCResourceLinks.UpdateSCCResourceUsage',
				value: "PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				description: "Update an existing SCCResourceUsage - patch /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				action: 'StandardControlCharacteristic.SCCResourceLinks.UpdateSCCResourceUsage',
			},
			{
				name: 'StandardControlCharacteristic.SCCSPLinks.DeletePTC.Factory.SCCStandardProcedureUsage',
				value: "DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				description: "Delete an existing SCCStandardProcedureUsage - delete /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				action: 'StandardControlCharacteristic.SCCSPLinks.DeletePTC.Factory.SCCStandardProcedureUsage',
			},
			{
				name: 'StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsage',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				description: "Get SCCStandardProcedureUsage for a given SCCStandardProcedureUsageId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				action: 'StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsage',
			},
			{
				name: 'StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsages',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks",
				description: "Get SCCStandardProcedureUsage - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks",
				action: 'StandardControlCharacteristic.SCCSPLinks.GetSCCStandardProcedureUsages',
			},
			{
				name: 'StandardControlCharacteristic.SCCSPLinks.UpdateSCCStandardProcedureUsage',
				value: "PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				description: "Update an existing SCCStandardProcedureUsage - patch /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				action: 'StandardControlCharacteristic.SCCSPLinks.UpdateSCCStandardProcedureUsage',
			},
			{
				name: 'StandardControlCharacteristic.Versions.GetStandardControlCharacteristic',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Versions('{VersionsId}')",
				description: "Get StandardControlCharacteristic for a given VersionsId - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Versions('{VersionsId}')",
				action: 'StandardControlCharacteristic.Versions.GetStandardControlCharacteristic',
			},
			{
				name: 'StandardControlCharacteristic.Versions.GetStandardControlCharacteristics',
				value: "GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Versions",
				description: "Get StandardControlCharacteristic - get /StandardControlCharacteristics('{StandardControlCharacteristicId}')/Versions",
				action: 'StandardControlCharacteristic.Versions.GetStandardControlCharacteristics',
			},
			{
				name: 'StandardOperation.Context.GetContainer',
				value: "GET /StandardOperations('{StandardOperationId}')/Context",
				description: "Get Container - get /StandardOperations('{StandardOperationId}')/Context",
				action: 'StandardOperation.Context.GetContainer',
			},
			{
				name: 'StandardOperation.Creator.GetUser',
				value: "GET /StandardOperations('{StandardOperationId}')/Creator",
				description: "Get User - get /StandardOperations('{StandardOperationId}')/Creator",
				action: 'StandardOperation.Creator.GetUser',
			},
			{
				name: 'StandardOperation.Modifier.GetUser',
				value: "GET /StandardOperations('{StandardOperationId}')/Modifier",
				description: "Get User - get /StandardOperations('{StandardOperationId}')/Modifier",
				action: 'StandardOperation.Modifier.GetUser',
			},
			{
				name: 'StandardOperation.Revisions.GetStandardOperation',
				value: "GET /StandardOperations('{StandardOperationId}')/Revisions('{RevisionsId}')",
				description: "Get StandardOperation for a given RevisionsId - get /StandardOperations('{StandardOperationId}')/Revisions('{RevisionsId}')",
				action: 'StandardOperation.Revisions.GetStandardOperation',
			},
			{
				name: 'StandardOperation.Revisions.GetStandardOperations',
				value: "GET /StandardOperations('{StandardOperationId}')/Revisions",
				description: "Get StandardOperation - get /StandardOperations('{StandardOperationId}')/Revisions",
				action: 'StandardOperation.Revisions.GetStandardOperations',
			},
			{
				name: 'StandardOperation.SOPSCCLinks.DeletePTC.Factory.SOPToSCCLink',
				value: "DELETE /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				description: "Delete an existing SOPToSCCLink - delete /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				action: 'StandardOperation.SOPSCCLinks.DeletePTC.Factory.SOPToSCCLink',
			},
			{
				name: 'StandardOperation.SOPSCCLinks.GetSOPToSCCLink',
				value: "GET /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				description: "Get SOPToSCCLink for a given SOPToSCCLinkId - get /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				action: 'StandardOperation.SOPSCCLinks.GetSOPToSCCLink',
			},
			{
				name: 'StandardOperation.SOPSCCLinks.GetSOPToSCCLinks',
				value: "GET /StandardOperations('{StandardOperationId}')/SOPSCCLinks",
				description: "Get SOPToSCCLink - get /StandardOperations('{StandardOperationId}')/SOPSCCLinks",
				action: 'StandardOperation.SOPSCCLinks.GetSOPToSCCLinks',
			},
			{
				name: 'StandardOperation.SOPSCCLinks.UpdateSOPToSCCLink',
				value: "PATCH /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				description: "Update an existing SOPToSCCLink - patch /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				action: 'StandardOperation.SOPSCCLinks.UpdateSOPToSCCLink',
			},
			{
				name: 'StandardOperation.Versions.GetStandardOperation',
				value: "GET /StandardOperations('{StandardOperationId}')/Versions('{VersionsId}')",
				description: "Get StandardOperation for a given VersionsId - get /StandardOperations('{StandardOperationId}')/Versions('{VersionsId}')",
				action: 'StandardOperation.Versions.GetStandardOperation',
			},
			{
				name: 'StandardOperation.Versions.GetStandardOperations',
				value: "GET /StandardOperations('{StandardOperationId}')/Versions",
				description: "Get StandardOperation - get /StandardOperations('{StandardOperationId}')/Versions",
				action: 'StandardOperation.Versions.GetStandardOperations',
			},
			{
				name: 'StandardProcedure.Context.GetContainer',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Context",
				description: "Get Container - get /StandardProcedures('{StandardProcedureId}')/Context",
				action: 'StandardProcedure.Context.GetContainer',
			},
			{
				name: 'StandardProcedure.Creator.GetUser',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Creator",
				description: "Get User - get /StandardProcedures('{StandardProcedureId}')/Creator",
				action: 'StandardProcedure.Creator.GetUser',
			},
			{
				name: 'StandardProcedure.Modifier.GetUser',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Modifier",
				description: "Get User - get /StandardProcedures('{StandardProcedureId}')/Modifier",
				action: 'StandardProcedure.Modifier.GetUser',
			},
			{
				name: 'StandardProcedure.Revisions.GetStandardProcedure',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Revisions('{RevisionsId}')",
				description: "Get StandardProcedure for a given RevisionsId - get /StandardProcedures('{StandardProcedureId}')/Revisions('{RevisionsId}')",
				action: 'StandardProcedure.Revisions.GetStandardProcedure',
			},
			{
				name: 'StandardProcedure.Revisions.GetStandardProcedures',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Revisions",
				description: "Get StandardProcedure - get /StandardProcedures('{StandardProcedureId}')/Revisions",
				action: 'StandardProcedure.Revisions.GetStandardProcedures',
			},
			{
				name: 'StandardProcedure.Versions.GetStandardProcedure',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Versions('{VersionsId}')",
				description: "Get StandardProcedure for a given VersionsId - get /StandardProcedures('{StandardProcedureId}')/Versions('{VersionsId}')",
				action: 'StandardProcedure.Versions.GetStandardProcedure',
			},
			{
				name: 'StandardProcedure.Versions.GetStandardProcedures',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Versions",
				description: "Get StandardProcedure - get /StandardProcedures('{StandardProcedureId}')/Versions",
				action: 'StandardProcedure.Versions.GetStandardProcedures',
			},
			{
				name: 'UpdateDocument',
				value: "PATCH /Documents('{DocumentId}')",
				description: "Update an existing Document - patch /Documents('{DocumentId}')",
				action: 'UpdateDocument',
			},
			{
				name: 'UpdateReferenceDocument',
				value: "PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
				description: "Update an existing ReferenceDocument - patch /ReferenceDocuments('{ReferenceDocumentId}')",
				action: 'UpdateReferenceDocument',
			},
			{
				name: 'UpdateStandardControlCharacteristic',
				value: "PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
				description: "Update an existing StandardControlCharacteristic - patch /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
				action: 'UpdateStandardControlCharacteristic',
			},
		],
	},
	...ActionCheckInDocuments.description,
	...ActionCheckInStandardControlCharacteristics.description,
	...ActionCheckInStandardOperations.description,
	...ActionCheckInStandardProcedures.description,
	...ActionCheckOutDocuments.description,
	...ActionCheckOutStandardControlCharacteristics.description,
	...ActionCheckOutStandardOperations.description,
	...ActionCheckOutStandardProcedures.description,
	...ActionReviseDocuments.description,
	...ActionReviseStandardControlCharacteristics.description,
	...ActionReviseStandardOperations.description,
	...ActionReviseStandardProcedures.description,
	...ActionSetStateDocuments.description,
	...ActionSetStateStandardControlCharacteristics.description,
	...ActionSetStateStandardOperations.description,
	...ActionSetStateStandardProcedures.description,
	...ActionUndoCheckOutDocuments.description,
	...ActionUndoCheckOutStandardControlCharacteristics.description,
	...ActionUndoCheckOutStandardOperations.description,
	...ActionUndoCheckOutStandardProcedures.description,
	...DeleteDocument.description,
	...DeleteReferenceDocument.description,
	...DocumentContextGetContainer.description,
	...DocumentCreatorGetUser.description,
	...DocumentModifierGetUser.description,
	...DocumentRepresentationsGetRepresentation.description,
	...DocumentRepresentationsGetRepresentations.description,
	...DocumentRevisionsDeletePtcFactoryDocument.description,
	...DocumentRevisionsGetDocument.description,
	...DocumentRevisionsGetDocuments.description,
	...DocumentRevisionsPostDocument.description,
	...DocumentRevisionsUpdateDocument.description,
	...DocumentVersionsDeletePtcFactoryDocument.description,
	...DocumentVersionsGetDocument.description,
	...DocumentVersionsGetDocuments.description,
	...DocumentVersionsPostDocument.description,
	...DocumentVersionsUpdateDocument.description,
	...GetDocument.description,
	...GetDocuments.description,
	...GetReferenceDocument.description,
	...GetReferenceDocuments.description,
	...GetResource.description,
	...GetResources.description,
	...GetStandardControlCharacteristic.description,
	...GetStandardControlCharacteristics.description,
	...GetStandardOperation.description,
	...GetStandardOperations.description,
	...GetStandardProcedure.description,
	...GetStandardProcedures.description,
	...PostDocument.description,
	...PtcFactoryStandardControlCharacteristicActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcFactoryStandardControlCharacteristicActionCheckOutWith.description,
	...PtcFactoryStandardControlCharacteristicActionReviseWith.description,
	...PtcFactoryStandardControlCharacteristicActionSetStateWith.description,
	...PtcFactoryStandardControlCharacteristicActionUndoCheckOut.description,
	...PtcFactoryStandardControlCharacteristicActionUpdateSccRelatedLinksWithUpdateRequests.description,
	...PtcFactoryStandardControlCharacteristicFunctionGetLifeCycleTemplate.description,
	...PtcFactoryStandardControlCharacteristicFunctionGetValidStateTransitions.description,
	...PtcFactoryStandardControlCharacteristicFunctionIsCheckoutAllowed.description,
	...PtcFactoryStandardOperationActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcFactoryStandardOperationActionCheckOutWith.description,
	...PtcFactoryStandardOperationActionReviseWith.description,
	...PtcFactoryStandardOperationActionSetStateWith.description,
	...PtcFactoryStandardOperationActionUndoCheckOut.description,
	...PtcFactoryStandardOperationActionUpdateSopRelatedLinksWithUpdateRequests.description,
	...PtcFactoryStandardOperationFunctionGetLifeCycleTemplate.description,
	...PtcFactoryStandardOperationFunctionGetSopDetailsWith.description,
	...PtcFactoryStandardOperationFunctionGetValidStateTransitions.description,
	...PtcFactoryStandardOperationFunctionIsCheckoutAllowed.description,
	...PtcFactoryStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcFactoryStandardProcedureActionCheckOutWith.description,
	...PtcFactoryStandardProcedureActionReviseWith.description,
	...PtcFactoryStandardProcedureActionSetStateWith.description,
	...PtcFactoryStandardProcedureActionUndoCheckOut.description,
	...PtcFactoryStandardProcedureFunctionGetLifeCycleTemplate.description,
	...PtcFactoryStandardProcedureFunctionGetValidStateTransitions.description,
	...PtcFactoryStandardProcedureFunctionIsCheckoutAllowed.description,
	...ReferenceDocumentRefDocumentsGetDocument.description,
	...ReferenceDocumentRefDocumentsGetDocuments.description,
	...ResourceCreatorGetUser.description,
	...ResourceModifierGetUser.description,
	...StandardControlCharacteristicContextGetContainer.description,
	...StandardControlCharacteristicCreatorGetUser.description,
	...StandardControlCharacteristicModifierGetUser.description,
	...StandardControlCharacteristicRevisionsGetStandardControlCharacteristic.description,
	...StandardControlCharacteristicRevisionsGetStandardControlCharacteristics.description,
	...StandardControlCharacteristicSccddLinksDeletePtcFactorySccDescribedByDocument.description,
	...StandardControlCharacteristicSccddLinksGetSccDescribedByDocument.description,
	...StandardControlCharacteristicSccddLinksGetSccDescribedByDocuments.description,
	...StandardControlCharacteristicSccddLinksUpdateSccDescribedByDocument.description,
	...StandardControlCharacteristicSccdrLinksDeletePtcFactorySccReferenceDocument.description,
	...StandardControlCharacteristicSccdrLinksGetSccReferenceDocument.description,
	...StandardControlCharacteristicSccdrLinksGetSccReferenceDocuments.description,
	...StandardControlCharacteristicSccdrLinksUpdateSccReferenceDocument.description,
	...StandardControlCharacteristicSccResourceLinksDeletePtcFactorySccResourceUsage.description,
	...StandardControlCharacteristicSccResourceLinksGetSccResourceUsage.description,
	...StandardControlCharacteristicSccResourceLinksGetSccResourceUsages.description,
	...StandardControlCharacteristicSccResourceLinksUpdateSccResourceUsage.description,
	...StandardControlCharacteristicSccspLinksDeletePtcFactorySccStandardProcedureUsage.description,
	...StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsage.description,
	...StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsages.description,
	...StandardControlCharacteristicSccspLinksUpdateSccStandardProcedureUsage.description,
	...StandardControlCharacteristicVersionsGetStandardControlCharacteristic.description,
	...StandardControlCharacteristicVersionsGetStandardControlCharacteristics.description,
	...StandardOperationContextGetContainer.description,
	...StandardOperationCreatorGetUser.description,
	...StandardOperationModifierGetUser.description,
	...StandardOperationRevisionsGetStandardOperation.description,
	...StandardOperationRevisionsGetStandardOperations.description,
	...StandardOperationSopsccLinksDeletePtcFactorySopToSccLink.description,
	...StandardOperationSopsccLinksGetSopToSccLink.description,
	...StandardOperationSopsccLinksGetSopToSccLinks.description,
	...StandardOperationSopsccLinksUpdateSopToSccLink.description,
	...StandardOperationVersionsGetStandardOperation.description,
	...StandardOperationVersionsGetStandardOperations.description,
	...StandardProcedureContextGetContainer.description,
	...StandardProcedureCreatorGetUser.description,
	...StandardProcedureModifierGetUser.description,
	...StandardProcedureRevisionsGetStandardProcedure.description,
	...StandardProcedureRevisionsGetStandardProcedures.description,
	...StandardProcedureVersionsGetStandardProcedure.description,
	...StandardProcedureVersionsGetStandardProcedures.description,
	...UpdateDocument.description,
	...UpdateReferenceDocument.description,
	...UpdateStandardControlCharacteristic.description,
];
