import * as ActionAssignPlant from './Action_AssignPlant';
import * as ActionCheckInDepartmentDatas from './Action_CheckInDepartmentDatas';
import * as ActionCheckInExtendedDatas from './Action_CheckInExtendedDatas';
import * as ActionCheckOutDepartmentDatas from './Action_CheckOutDepartmentDatas';
import * as ActionCheckOutExtendedDatas from './Action_CheckOutExtendedDatas';
import * as ActionCreateDepartmentData from './Action_CreateDepartmentData';
import * as ActionCreateDepartmentDataForPlantData from './Action_CreateDepartmentDataForPlantData';
import * as ActionDetectAndResolveDiscrepancies from './Action_DetectAndResolveDiscrepancies';
import * as ActionDetectDiscrepancies from './Action_DetectDiscrepancies';
import * as ActionGenerateDownstreamStructure from './Action_GenerateDownstreamStructure';
import * as ActionGetDepartmentDatas from './Action_GetDepartmentDatas';
import * as ActionGetDepartmentDatasForParts from './Action_GetDepartmentDatasForParts';
import * as ActionGetDepartmentDatasForPartsWithInlineNavCriteria from './Action_GetDepartmentDatasForPartsWithInlineNavCriteria';
import * as ActionGetDepartmentDatasFromPlant from './Action_GetDepartmentDatasFromPlant';
import * as ActionGetDepartmentDatasFromPlantWithInlineNavCriteria from './Action_GetDepartmentDatasFromPlantWithInlineNavCriteria';
import * as ActionGetEquivalenceNetworkForParts from './Action_GetEquivalenceNetworkForParts';
import * as ActionGetExtendedDatas from './Action_GetExtendedDatas';
import * as ActionGetExtendedDatasForParts from './Action_GetExtendedDatasForParts';
import * as ActionGetExtendedDatasForPartsWithInlineNavCriteria from './Action_GetExtendedDatasForPartsWithInlineNavCriteria';
import * as ActionInsertMadeFrom from './Action_InsertMadeFrom';
import * as ActionPasteSpecial from './Action_PasteSpecial';
import * as ActionRemoveDepartmentDataAssociations from './Action_RemoveDepartmentDataAssociations';
import * as ActionRemovePlantDataAssociations from './Action_RemovePlantDataAssociations';
import * as ActionResolveDiscrepancies from './Action_ResolveDiscrepancies';
import * as ActionReviseDepartmentDatas from './Action_ReviseDepartmentDatas';
import * as ActionReviseExtendedDatas from './Action_ReviseExtendedDatas';
import * as ActionSetStateDepartmentDatas from './Action_SetStateDepartmentDatas';
import * as ActionSetStateExtendedDatas from './Action_SetStateExtendedDatas';
import * as ActionSplitAssemble from './Action_SplitAssemble';
import * as ActionSubcontractToPlants from './Action_SubcontractToPlants';
import * as ActionUndoCheckOutDepartmentDatas from './Action_UndoCheckOutDepartmentDatas';
import * as ActionUndoCheckOutExtendedDatas from './Action_UndoCheckOutExtendedDatas';
import * as ActionUpdateCommonPropertiesForDepartmentDatas from './Action_UpdateCommonPropertiesForDepartmentDatas';
import * as ActionUpdateCommonPropertiesForExtendedDatas from './Action_UpdateCommonPropertiesForExtendedDatas';
import * as ActionUpdateDepartmentDatas from './Action_UpdateDepartmentDatas';
import * as ActionUpdateExtendedDatas from './Action_UpdateExtendedDatas';
import * as ActionUpdateToCurrentUpstreamEquivalents from './Action_UpdateToCurrentUpstreamEquivalents';
import * as DepartmentDataContextGetContainer from './DepartmentData.Context.GetContainer';
import * as DepartmentDataCreatorGetUser from './DepartmentData.Creator.GetUser';
import * as DepartmentDataEffectivitiesGetEffectivity from './DepartmentData.Effectivities.GetEffectivity';
import * as DepartmentDataEffectivitiesGetEffectivitys from './DepartmentData.Effectivities.GetEffectivitys';
import * as DepartmentDataModifierGetUser from './DepartmentData.Modifier.GetUser';
import * as DepartmentDataOrganizationGetOrganization from './DepartmentData.Organization.GetOrganization';
import * as DepartmentDataResultedByObjectsGetChangeItem from './DepartmentData.ResultedByObjects.GetChangeItem';
import * as DepartmentDataResultedByObjectsGetChangeItems from './DepartmentData.ResultedByObjects.GetChangeItems';
import * as DepartmentDataRevisionsGetDepartmentData from './DepartmentData.Revisions.GetDepartmentData';
import * as DepartmentDataRevisionsGetDepartmentDatas from './DepartmentData.Revisions.GetDepartmentDatas';
import * as DepartmentDataVersionsGetDepartmentData from './DepartmentData.Versions.GetDepartmentData';
import * as DepartmentDataVersionsGetDepartmentDatas from './DepartmentData.Versions.GetDepartmentDatas';
import * as ExtendedDataContextGetContainer from './ExtendedData.Context.GetContainer';
import * as ExtendedDataCreatorGetUser from './ExtendedData.Creator.GetUser';
import * as ExtendedDataDepartmentDataGetDepartmentData from './ExtendedData.DepartmentData.GetDepartmentData';
import * as ExtendedDataDepartmentDataGetDepartmentDatas from './ExtendedData.DepartmentData.GetDepartmentDatas';
import * as ExtendedDataEffectivitiesGetEffectivity from './ExtendedData.Effectivities.GetEffectivity';
import * as ExtendedDataEffectivitiesGetEffectivitys from './ExtendedData.Effectivities.GetEffectivitys';
import * as ExtendedDataFolderGetFolder from './ExtendedData.Folder.GetFolder';
import * as ExtendedDataModifierGetUser from './ExtendedData.Modifier.GetUser';
import * as ExtendedDataOrganizationGetOrganization from './ExtendedData.Organization.GetOrganization';
import * as ExtendedDataResultedByObjectsGetChangeItem from './ExtendedData.ResultedByObjects.GetChangeItem';
import * as ExtendedDataResultedByObjectsGetChangeItems from './ExtendedData.ResultedByObjects.GetChangeItems';
import * as ExtendedDataRevisionsGetExtendedData from './ExtendedData.Revisions.GetExtendedData';
import * as ExtendedDataRevisionsGetExtendedDatas from './ExtendedData.Revisions.GetExtendedDatas';
import * as ExtendedDataVersionsGetExtendedData from './ExtendedData.Versions.GetExtendedData';
import * as ExtendedDataVersionsGetExtendedDatas from './ExtendedData.Versions.GetExtendedDatas';
import * as GetCommonEnterpriseDatas from './GetCommonEnterpriseDatas';
import * as GetDepartmentData from './GetDepartmentData';
import * as GetDepartmentDatas from './GetDepartmentDatas';
import * as GetExtendedData from './GetExtendedData';
import * as GetExtendedDatas from './GetExtendedDatas';
import * as GetNewAlternates from './GetNewAlternates';
import * as GetNewSplitAlternates from './GetNewSplitAlternates';
import * as GetPlantSpecificEnterpriseDatas from './GetPlantSpecificEnterpriseDatas';
import * as GetXbomPart from './GetXBOMPart';
import * as GetXbomParts from './GetXBOMParts';
import * as PtcBomTransformationDepartmentDataActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.BomTransformation.DepartmentData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcBomTransformationDepartmentDataActionCheckOutWith from './PTC.BomTransformation.DepartmentData.Action_CheckOut_With';
import * as PtcBomTransformationDepartmentDataActionModifyEffectivitiesWith from './PTC.BomTransformation.DepartmentData.Action_ModifyEffectivities_With';
import * as PtcBomTransformationDepartmentDataActionRemoveEffectivitiesWith from './PTC.BomTransformation.DepartmentData.Action_RemoveEffectivities_With';
import * as PtcBomTransformationDepartmentDataActionReviseWith from './PTC.BomTransformation.DepartmentData.Action_Revise_With';
import * as PtcBomTransformationDepartmentDataActionSetStateWith from './PTC.BomTransformation.DepartmentData.Action_SetState_With';
import * as PtcBomTransformationDepartmentDataActionUndoCheckOut from './PTC.BomTransformation.DepartmentData.Action_UndoCheckOut';
import * as PtcBomTransformationDepartmentDataFunctionGetLifeCycleTemplate from './PTC.BomTransformation.DepartmentData.Function_GetLifeCycleTemplate';
import * as PtcBomTransformationDepartmentDataFunctionGetValidStateTransitions from './PTC.BomTransformation.DepartmentData.Function_GetValidStateTransitions';
import * as PtcBomTransformationDepartmentDataFunctionIsCheckoutAllowed from './PTC.BomTransformation.DepartmentData.Function_IsCheckoutAllowed';
import * as PtcBomTransformationExtendedDataActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.BomTransformation.ExtendedData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcBomTransformationExtendedDataActionCheckOutWith from './PTC.BomTransformation.ExtendedData.Action_CheckOut_With';
import * as PtcBomTransformationExtendedDataActionModifyEffectivitiesWith from './PTC.BomTransformation.ExtendedData.Action_ModifyEffectivities_With';
import * as PtcBomTransformationExtendedDataActionRemoveEffectivitiesWith from './PTC.BomTransformation.ExtendedData.Action_RemoveEffectivities_With';
import * as PtcBomTransformationExtendedDataActionReviseWith from './PTC.BomTransformation.ExtendedData.Action_Revise_With';
import * as PtcBomTransformationExtendedDataActionSetStateWith from './PTC.BomTransformation.ExtendedData.Action_SetState_With';
import * as PtcBomTransformationExtendedDataActionUndoCheckOut from './PTC.BomTransformation.ExtendedData.Action_UndoCheckOut';
import * as PtcBomTransformationExtendedDataFunctionGetLifeCycleTemplate from './PTC.BomTransformation.ExtendedData.Function_GetLifeCycleTemplate';
import * as PtcBomTransformationExtendedDataFunctionGetValidStateTransitions from './PTC.BomTransformation.ExtendedData.Function_GetValidStateTransitions';
import * as PtcBomTransformationExtendedDataFunctionIsCheckoutAllowed from './PTC.BomTransformation.ExtendedData.Function_IsCheckoutAllowed';
import * as PtcBomTransformationXbomPartActionGetManufacturingBomWithRelatedItems from './PTC.BomTransformation.XBOMPart.Action_GetManufacturingBOM_With_RelatedItems';
import * as UpdateDepartmentData from './UpdateDepartmentData';
import * as UpdateExtendedData from './UpdateExtendedData';
import * as XbomPartCreatorGetUser from './XBOMPart.Creator.GetUser';
import * as XbomPartModifierGetUser from './XBOMPart.Modifier.GetUser';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionAssignPlant,
	ActionCheckInDepartmentDatas,
	ActionCheckInExtendedDatas,
	ActionCheckOutDepartmentDatas,
	ActionCheckOutExtendedDatas,
	ActionCreateDepartmentData,
	ActionCreateDepartmentDataForPlantData,
	ActionDetectAndResolveDiscrepancies,
	ActionDetectDiscrepancies,
	ActionGenerateDownstreamStructure,
	ActionGetDepartmentDatas,
	ActionGetDepartmentDatasForParts,
	ActionGetDepartmentDatasForPartsWithInlineNavCriteria,
	ActionGetDepartmentDatasFromPlant,
	ActionGetDepartmentDatasFromPlantWithInlineNavCriteria,
	ActionGetEquivalenceNetworkForParts,
	ActionGetExtendedDatas,
	ActionGetExtendedDatasForParts,
	ActionGetExtendedDatasForPartsWithInlineNavCriteria,
	ActionInsertMadeFrom,
	ActionPasteSpecial,
	ActionRemoveDepartmentDataAssociations,
	ActionRemovePlantDataAssociations,
	ActionResolveDiscrepancies,
	ActionReviseDepartmentDatas,
	ActionReviseExtendedDatas,
	ActionSetStateDepartmentDatas,
	ActionSetStateExtendedDatas,
	ActionSplitAssemble,
	ActionSubcontractToPlants,
	ActionUndoCheckOutDepartmentDatas,
	ActionUndoCheckOutExtendedDatas,
	ActionUpdateCommonPropertiesForDepartmentDatas,
	ActionUpdateCommonPropertiesForExtendedDatas,
	ActionUpdateDepartmentDatas,
	ActionUpdateExtendedDatas,
	ActionUpdateToCurrentUpstreamEquivalents,
	DepartmentDataContextGetContainer,
	DepartmentDataCreatorGetUser,
	DepartmentDataEffectivitiesGetEffectivity,
	DepartmentDataEffectivitiesGetEffectivitys,
	DepartmentDataModifierGetUser,
	DepartmentDataOrganizationGetOrganization,
	DepartmentDataResultedByObjectsGetChangeItem,
	DepartmentDataResultedByObjectsGetChangeItems,
	DepartmentDataRevisionsGetDepartmentData,
	DepartmentDataRevisionsGetDepartmentDatas,
	DepartmentDataVersionsGetDepartmentData,
	DepartmentDataVersionsGetDepartmentDatas,
	ExtendedDataContextGetContainer,
	ExtendedDataCreatorGetUser,
	ExtendedDataDepartmentDataGetDepartmentData,
	ExtendedDataDepartmentDataGetDepartmentDatas,
	ExtendedDataEffectivitiesGetEffectivity,
	ExtendedDataEffectivitiesGetEffectivitys,
	ExtendedDataFolderGetFolder,
	ExtendedDataModifierGetUser,
	ExtendedDataOrganizationGetOrganization,
	ExtendedDataResultedByObjectsGetChangeItem,
	ExtendedDataResultedByObjectsGetChangeItems,
	ExtendedDataRevisionsGetExtendedData,
	ExtendedDataRevisionsGetExtendedDatas,
	ExtendedDataVersionsGetExtendedData,
	ExtendedDataVersionsGetExtendedDatas,
	GetCommonEnterpriseDatas,
	GetDepartmentData,
	GetDepartmentDatas,
	GetExtendedData,
	GetExtendedDatas,
	GetNewAlternates,
	GetNewSplitAlternates,
	GetPlantSpecificEnterpriseDatas,
	GetXbomPart,
	GetXbomParts,
	PtcBomTransformationDepartmentDataActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcBomTransformationDepartmentDataActionCheckOutWith,
	PtcBomTransformationDepartmentDataActionModifyEffectivitiesWith,
	PtcBomTransformationDepartmentDataActionRemoveEffectivitiesWith,
	PtcBomTransformationDepartmentDataActionReviseWith,
	PtcBomTransformationDepartmentDataActionSetStateWith,
	PtcBomTransformationDepartmentDataActionUndoCheckOut,
	PtcBomTransformationDepartmentDataFunctionGetLifeCycleTemplate,
	PtcBomTransformationDepartmentDataFunctionGetValidStateTransitions,
	PtcBomTransformationDepartmentDataFunctionIsCheckoutAllowed,
	PtcBomTransformationExtendedDataActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcBomTransformationExtendedDataActionCheckOutWith,
	PtcBomTransformationExtendedDataActionModifyEffectivitiesWith,
	PtcBomTransformationExtendedDataActionRemoveEffectivitiesWith,
	PtcBomTransformationExtendedDataActionReviseWith,
	PtcBomTransformationExtendedDataActionSetStateWith,
	PtcBomTransformationExtendedDataActionUndoCheckOut,
	PtcBomTransformationExtendedDataFunctionGetLifeCycleTemplate,
	PtcBomTransformationExtendedDataFunctionGetValidStateTransitions,
	PtcBomTransformationExtendedDataFunctionIsCheckoutAllowed,
	PtcBomTransformationXbomPartActionGetManufacturingBomWithRelatedItems,
	UpdateDepartmentData,
	UpdateExtendedData,
	XbomPartCreatorGetUser,
	XbomPartModifierGetUser,
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
					'PTC.BomTransformation',
				],
			},
		},
		default: '/Windchill/servlet/odata/v2/BomTransformation',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
			},
		},
		default: 'POST /AssignPlant',
		options: [
			{
				name: 'Action_AssignPlant',
				value: 'POST /AssignPlant',
				description: 'Multi API to assign Plant Data objects to Part objects for a given Change object - post /AssignPlant',
				action: 'Action_AssignPlant',
			},
			{
				name: 'Action_CheckInDepartmentDatas',
				value: 'POST /CheckInDepartmentDatas',
				description: 'Multi API to Check In Department Data objects - post /CheckInDepartmentDatas',
				action: 'Action_CheckInDepartmentDatas',
			},
			{
				name: 'Action_CheckInExtendedDatas',
				value: 'POST /CheckInExtendedDatas',
				description: 'Multi API to Check In Extended Data objects - post /CheckInExtendedDatas',
				action: 'Action_CheckInExtendedDatas',
			},
			{
				name: 'Action_CheckOutDepartmentDatas',
				value: 'POST /CheckOutDepartmentDatas',
				description: 'Multi API to Check Out Department Data objects - post /CheckOutDepartmentDatas',
				action: 'Action_CheckOutDepartmentDatas',
			},
			{
				name: 'Action_CheckOutExtendedDatas',
				value: 'POST /CheckOutExtendedDatas',
				description: 'Multi API to Check Out Extended Data objects - post /CheckOutExtendedDatas',
				action: 'Action_CheckOutExtendedDatas',
			},
			{
				name: 'Action_CreateDepartmentData',
				value: 'POST /CreateDepartmentData',
				description: 'Multi API to create Department Data objects for given Part objects - post /CreateDepartmentData',
				action: 'Action_CreateDepartmentData',
			},
			{
				name: 'Action_CreateDepartmentDataForPlantData',
				value: 'POST /CreateDepartmentDataForPlantData',
				description: 'Multi API to create Department Data objects for given Plant objects - post /CreateDepartmentDataForPlantData',
				action: 'Action_CreateDepartmentDataForPlantData',
			},
			{
				name: 'Action_DetectAndResolveDiscrepancies',
				value: 'POST /DetectAndResolveDiscrepancies',
				description: 'Detects discrepancies and resolve them. - post /DetectAndResolveDiscrepancies',
				action: 'Action_DetectAndResolveDiscrepancies',
			},
			{
				name: 'Action_DetectDiscrepancies',
				value: 'POST /DetectDiscrepancies',
				description: 'Detects discrepancies between upstream and downstream - post /DetectDiscrepancies',
				action: 'Action_DetectDiscrepancies',
			},
			{
				name: 'Action_GenerateDownstreamStructure',
				value: 'POST /GenerateDownstreamStructure',
				description: 'GenerateDownstreamStructures - post /GenerateDownstreamStructure',
				action: 'Action_GenerateDownstreamStructure',
			},
			{
				name: 'Action_GetDepartmentDatas',
				value: 'POST /GetDepartmentDatas',
				description: 'Multi API to get Department Data - post /GetDepartmentDatas',
				action: 'Action_GetDepartmentDatas',
			},
			{
				name: 'Action_GetDepartmentDatasForParts',
				value: 'POST /GetDepartmentDatasForParts',
				description: 'Multi API to get Department Data for Parts for a given Navigation Criteria, if NavigationCriteriaId is passed as a parameter - post /GetDepartmentDatasForParts',
				action: 'Action_GetDepartmentDatasForParts',
			},
			{
				name: 'Action_GetDepartmentDatasForPartsWithInlineNavCriteria',
				value: 'POST /GetDepartmentDatasForPartsWithInlineNavCriteria',
				description: 'Multi API to get Department Data for Parts with Inline Navigation Criteria - post /GetDepartmentDatasForPartsWithInlineNavCriteria',
				action: 'Action_GetDepartmentDatasForPartsWithInlineNavCriteria',
			},
			{
				name: 'Action_GetDepartmentDatasFromPlant',
				value: 'POST /GetDepartmentDatasFromPlant',
				description: 'Multi API to get Department Data for Plant for a given Navigation Criteria, if NavigationCriteriaId is passed as a parameter - post /GetDepartmentDatasFromPlant',
				action: 'Action_GetDepartmentDatasFromPlant',
			},
			{
				name: 'Action_GetDepartmentDatasFromPlantWithInlineNavCriteria',
				value: 'POST /GetDepartmentDatasFromPlantWithInlineNavCriteria',
				description: 'Multi API to get Department Data for Plant with Inline Navigation Criteria - post /GetDepartmentDatasFromPlantWithInlineNavCriteria',
				action: 'Action_GetDepartmentDatasFromPlantWithInlineNavCriteria',
			},
			{
				name: 'Action_GetEquivalenceNetworkForParts',
				value: 'POST /GetEquivalenceNetworkForParts',
				description: 'Get Equivalence Network information for Parts - post /GetEquivalenceNetworkForParts',
				action: 'Action_GetEquivalenceNetworkForParts',
			},
			{
				name: 'Action_GetExtendedDatas',
				value: 'POST /GetExtendedDatas',
				description: 'Multi API to get Extended Data - post /GetExtendedDatas',
				action: 'Action_GetExtendedDatas',
			},
			{
				name: 'Action_GetExtendedDatasForParts',
				value: 'POST /GetExtendedDatasForParts',
				description: 'Multi API to get Extended Data for Parts for a given Navigation Criteria, if NavigationCriteriaId is passed as a parameter - post /GetExtendedDatasForParts',
				action: 'Action_GetExtendedDatasForParts',
			},
			{
				name: 'Action_GetExtendedDatasForPartsWithInlineNavCriteria',
				value: 'POST /GetExtendedDatasForPartsWithInlineNavCriteria',
				description: 'Multi API to get Extended Data for Parts with Inline Navigation Criteria - post /GetExtendedDatasForPartsWithInlineNavCriteria',
				action: 'Action_GetExtendedDatasForPartsWithInlineNavCriteria',
			},
			{
				name: 'Action_InsertMadeFrom',
				value: 'POST /InsertMadeFrom',
				description: 'Multi API to insert Made From Parts (Raw Materials) for Part objects or Made From Set objects - post /InsertMadeFrom',
				action: 'Action_InsertMadeFrom',
			},
			{
				name: 'Action_PasteSpecial',
				value: 'POST /PasteSpecial',
				description: 'Paste Special action - post /PasteSpecial',
				action: 'Action_PasteSpecial',
			},
			{
				name: 'Action_RemoveDepartmentDataAssociations',
				value: 'POST /RemoveDepartmentDataAssociations',
				description: 'Multi API to remove Department Data associated with Plant Data - post /RemoveDepartmentDataAssociations',
				action: 'Action_RemoveDepartmentDataAssociations',
			},
			{
				name: 'Action_RemovePlantDataAssociations',
				value: 'POST /RemovePlantDataAssociations',
				description: 'Multi API to remove Plant Data associated with Parts - post /RemovePlantDataAssociations',
				action: 'Action_RemovePlantDataAssociations',
			},
			{
				name: 'Action_ResolveDiscrepancies',
				value: 'POST /ResolveDiscrepancies',
				description: 'ResolveDiscrepancies description - post /ResolveDiscrepancies',
				action: 'Action_ResolveDiscrepancies',
			},
			{
				name: 'Action_ReviseDepartmentDatas',
				value: 'POST /ReviseDepartmentDatas',
				description: 'Revise Department Data objects - post /ReviseDepartmentDatas',
				action: 'Action_ReviseDepartmentDatas',
			},
			{
				name: 'Action_ReviseExtendedDatas',
				value: 'POST /ReviseExtendedDatas',
				description: 'Revise Extended Data objects - post /ReviseExtendedDatas',
				action: 'Action_ReviseExtendedDatas',
			},
			{
				name: 'Action_SetStateDepartmentDatas',
				value: 'POST /SetStateDepartmentDatas',
				description: 'Change the (life cycle) State of Department Data objects - post /SetStateDepartmentDatas',
				action: 'Action_SetStateDepartmentDatas',
			},
			{
				name: 'Action_SetStateExtendedDatas',
				value: 'POST /SetStateExtendedDatas',
				description: 'Change the (life cycle) State of Extended Data objects - post /SetStateExtendedDatas',
				action: 'Action_SetStateExtendedDatas',
			},
			{
				name: 'Action_SplitAssemble',
				value: 'POST /SplitAssemble',
				description: 'SplitAssemble - post /SplitAssemble',
				action: 'Action_SplitAssemble',
			},
			{
				name: 'Action_SubcontractToPlants',
				value: 'POST /SubcontractToPlants',
				description: 'SubcontractToPlants - post /SubcontractToPlants',
				action: 'Action_SubcontractToPlants',
			},
			{
				name: 'Action_UndoCheckOutDepartmentDatas',
				value: 'POST /UndoCheckOutDepartmentDatas',
				description: 'Undo Checkout of Department Data objects - post /UndoCheckOutDepartmentDatas',
				action: 'Action_UndoCheckOutDepartmentDatas',
			},
			{
				name: 'Action_UndoCheckOutExtendedDatas',
				value: 'POST /UndoCheckOutExtendedDatas',
				description: 'Undo Checkout of Extended Data objects - post /UndoCheckOutExtendedDatas',
				action: 'Action_UndoCheckOutExtendedDatas',
			},
			{
				name: 'Action_UpdateCommonPropertiesForDepartmentDatas',
				value: 'POST /UpdateCommonPropertiesForDepartmentDatas',
				description: 'Multi API to update common properties for Department Data objects - post /UpdateCommonPropertiesForDepartmentDatas',
				action: 'Action_UpdateCommonPropertiesForDepartmentDatas',
			},
			{
				name: 'Action_UpdateCommonPropertiesForExtendedDatas',
				value: 'POST /UpdateCommonPropertiesForExtendedDatas',
				description: 'Multi API to update common properties for Extended Data objects - post /UpdateCommonPropertiesForExtendedDatas',
				action: 'Action_UpdateCommonPropertiesForExtendedDatas',
			},
			{
				name: 'Action_UpdateDepartmentDatas',
				value: 'POST /UpdateDepartmentDatas',
				description: 'Multi API to update Department Data objects - post /UpdateDepartmentDatas',
				action: 'Action_UpdateDepartmentDatas',
			},
			{
				name: 'Action_UpdateExtendedDatas',
				value: 'POST /UpdateExtendedDatas',
				description: 'Multi API to update Extended Data objects - post /UpdateExtendedDatas',
				action: 'Action_UpdateExtendedDatas',
			},
			{
				name: 'Action_UpdateToCurrentUpstreamEquivalents',
				value: 'POST /UpdateToCurrentUpstreamEquivalents',
				description: 'Update to Current Upstream Equivalent Objects action - post /UpdateToCurrentUpstreamEquivalents',
				action: 'Action_UpdateToCurrentUpstreamEquivalents',
			},
			{
				name: 'DepartmentData.Context.GetContainer',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Context",
				description: "Get Container for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Context",
				action: 'DepartmentData.Context.GetContainer',
			},
			{
				name: 'DepartmentData.Creator.GetUser',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Creator",
				description: "Get Creator for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Creator",
				action: 'DepartmentData.Creator.GetUser',
			},
			{
				name: 'DepartmentData.Effectivities.GetEffectivity',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Effectivities('{EffectivityId}')",
				description: "Get a given Effectivity associated with a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Effectivities('{EffectivityId}')",
				action: 'DepartmentData.Effectivities.GetEffectivity',
			},
			{
				name: 'DepartmentData.Effectivities.GetEffectivitys',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Effectivities",
				description: "Get Effectivities associated with a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Effectivities",
				action: 'DepartmentData.Effectivities.GetEffectivitys',
			},
			{
				name: 'DepartmentData.Modifier.GetUser',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Modifier",
				description: "Get Modifier for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Modifier",
				action: 'DepartmentData.Modifier.GetUser',
			},
			{
				name: 'DepartmentData.Organization.GetOrganization',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Organization",
				description: "Get Organization for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Organization",
				action: 'DepartmentData.Organization.GetOrganization',
			},
			{
				name: 'DepartmentData.ResultedByObjects.GetChangeItem',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get a given Change object for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'DepartmentData.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'DepartmentData.ResultedByObjects.GetChangeItems',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects",
				description: "Get Change objects for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects",
				action: 'DepartmentData.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'DepartmentData.Revisions.GetDepartmentData',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Revisions('{RevisionsId}')",
				description: "Get a given Revision of a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Revisions('{RevisionsId}')",
				action: 'DepartmentData.Revisions.GetDepartmentData',
			},
			{
				name: 'DepartmentData.Revisions.GetDepartmentDatas',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Revisions",
				description: "Get all revisions of a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Revisions",
				action: 'DepartmentData.Revisions.GetDepartmentDatas',
			},
			{
				name: 'DepartmentData.Versions.GetDepartmentData',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Versions('{VersionsId}')",
				description: "Get a given Version of a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Versions('{VersionsId}')",
				action: 'DepartmentData.Versions.GetDepartmentData',
			},
			{
				name: 'DepartmentData.Versions.GetDepartmentDatas',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/Versions",
				description: "Get all versions of a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/Versions",
				action: 'DepartmentData.Versions.GetDepartmentDatas',
			},
			{
				name: 'ExtendedData.Context.GetContainer',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Context",
				description: "Get Container for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Context",
				action: 'ExtendedData.Context.GetContainer',
			},
			{
				name: 'ExtendedData.Creator.GetUser',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Creator",
				description: "Get Creator for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Creator",
				action: 'ExtendedData.Creator.GetUser',
			},
			{
				name: 'ExtendedData.DepartmentData.GetDepartmentData',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/DepartmentData('{DepartmentDataId}')",
				description: "Get a given Department Data object associated with a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/DepartmentData('{DepartmentDataId}')",
				action: 'ExtendedData.DepartmentData.GetDepartmentData',
			},
			{
				name: 'ExtendedData.DepartmentData.GetDepartmentDatas',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/DepartmentData",
				description: "Get Department Data objects associated with a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/DepartmentData",
				action: 'ExtendedData.DepartmentData.GetDepartmentDatas',
			},
			{
				name: 'ExtendedData.Effectivities.GetEffectivity',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Effectivities('{EffectivityId}')",
				description: "Get a given Effectivity associated with a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Effectivities('{EffectivityId}')",
				action: 'ExtendedData.Effectivities.GetEffectivity',
			},
			{
				name: 'ExtendedData.Effectivities.GetEffectivitys',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Effectivities",
				description: "Get Effectivities associated with a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Effectivities",
				action: 'ExtendedData.Effectivities.GetEffectivitys',
			},
			{
				name: 'ExtendedData.Folder.GetFolder',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Folder",
				description: "Get Folder for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Folder",
				action: 'ExtendedData.Folder.GetFolder',
			},
			{
				name: 'ExtendedData.Modifier.GetUser',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Modifier",
				description: "Get Modifier a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Modifier",
				action: 'ExtendedData.Modifier.GetUser',
			},
			{
				name: 'ExtendedData.Organization.GetOrganization',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Organization",
				description: "Get Organization a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Organization",
				action: 'ExtendedData.Organization.GetOrganization',
			},
			{
				name: 'ExtendedData.ResultedByObjects.GetChangeItem',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get a given Change object for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'ExtendedData.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'ExtendedData.ResultedByObjects.GetChangeItems',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/ResultedByObjects",
				description: "Get Change objects for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/ResultedByObjects",
				action: 'ExtendedData.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'ExtendedData.Revisions.GetExtendedData',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Revisions('{RevisionsId}')",
				description: "Get a given Revision of a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Revisions('{RevisionsId}')",
				action: 'ExtendedData.Revisions.GetExtendedData',
			},
			{
				name: 'ExtendedData.Revisions.GetExtendedDatas',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Revisions",
				description: "Get all revisions of a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Revisions",
				action: 'ExtendedData.Revisions.GetExtendedDatas',
			},
			{
				name: 'ExtendedData.Versions.GetExtendedData',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Versions('{VersionsId}')",
				description: "Get a given Version of a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Versions('{VersionsId}')",
				action: 'ExtendedData.Versions.GetExtendedData',
			},
			{
				name: 'ExtendedData.Versions.GetExtendedDatas',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/Versions",
				description: "Get all versions of a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/Versions",
				action: 'ExtendedData.Versions.GetExtendedDatas',
			},
			{
				name: 'GetCommonEnterpriseDatas',
				value: 'GET /ExtendedDatas/PTC.BomTransformation.CommonEnterpriseData',
				description: 'Get ExtendedDatas of type CommonEnterpriseData - get /ExtendedDatas/PTC.BomTransformation.CommonEnterpriseData',
				action: 'GetCommonEnterpriseDatas',
			},
			{
				name: 'GetDepartmentData',
				value: "GET /DepartmentDatas('{DepartmentDataId}')",
				description: "Get a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')",
				action: 'GetDepartmentData',
			},
			{
				name: 'GetDepartmentDatas',
				value: 'GET /DepartmentDatas',
				description: 'Get Department Data objects - get /DepartmentDatas',
				action: 'GetDepartmentDatas',
			},
			{
				name: 'GetExtendedData',
				value: "GET /ExtendedDatas('{ExtendedDataId}')",
				description: "Get a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')",
				action: 'GetExtendedData',
			},
			{
				name: 'GetExtendedDatas',
				value: 'GET /ExtendedDatas',
				description: 'Get Extended Data objects - get /ExtendedDatas',
				action: 'GetExtendedDatas',
			},
			{
				name: 'GetNewAlternates',
				value: 'GET /XBOMParts/PTC.BomTransformation.NewAlternate',
				description: 'Get XBOMParts of type NewAlternate - get /XBOMParts/PTC.BomTransformation.NewAlternate',
				action: 'GetNewAlternates',
			},
			{
				name: 'GetNewSplitAlternates',
				value: 'GET /XBOMParts/PTC.BomTransformation.NewSplitAlternate',
				description: 'Get XBOMParts of type NewSplitAlternate - get /XBOMParts/PTC.BomTransformation.NewSplitAlternate',
				action: 'GetNewSplitAlternates',
			},
			{
				name: 'GetPlantSpecificEnterpriseDatas',
				value: 'GET /ExtendedDatas/PTC.BomTransformation.PlantSpecificEnterpriseData',
				description: 'Get ExtendedDatas of type PlantSpecificEnterpriseData - get /ExtendedDatas/PTC.BomTransformation.PlantSpecificEnterpriseData',
				action: 'GetPlantSpecificEnterpriseDatas',
			},
			{
				name: 'GetXBOMPart',
				value: "GET /XBOMParts('{XBOMPartId}')",
				description: "Get XBOMPart for a given XBOMPartId - get /XBOMParts('{XBOMPartId}')",
				action: 'GetXBOMPart',
			},
			{
				name: 'GetXBOMParts',
				value: 'GET /XBOMParts',
				description: 'Get XBOMParts - get /XBOMParts',
				action: 'GetXBOMParts',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.CheckIn",
				description: "Check In a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.CheckIn",
				action: 'PTC.BomTransformation.DepartmentData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_CheckOut_With',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.CheckOut",
				description: "Check Out a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.CheckOut",
				action: 'PTC.BomTransformation.DepartmentData.Action_CheckOut_With',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_ModifyEffectivities_With',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.ModifyEffectivities",
				description: "Modify Effectivities for a given  Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.ModifyEffectivities",
				action: 'PTC.BomTransformation.DepartmentData.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_RemoveEffectivities_With',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.RemoveEffectivities",
				description: "Remove Effectivities for a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.RemoveEffectivities",
				action: 'PTC.BomTransformation.DepartmentData.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_Revise_With',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.Revise",
				description: "Revise a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.Revise",
				action: 'PTC.BomTransformation.DepartmentData.Action_Revise_With',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_SetState_With',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.SetState",
				description: "Change the (life cycle) State for a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.SetState",
				action: 'PTC.BomTransformation.DepartmentData.Action_SetState_With',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Action_UndoCheckOut',
				value: "POST /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.UndoCheckOut",
				description: "Undo Checkout for a given Department Data object - post /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.UndoCheckOut",
				action: 'PTC.BomTransformation.DepartmentData.Action_UndoCheckOut',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Function_GetLifeCycleTemplate',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				action: 'PTC.BomTransformation.DepartmentData.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Function_GetValidStateTransitions',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.GetValidStateTransitions()",
				description: "Get valid State Transitions for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.GetValidStateTransitions()",
				action: 'PTC.BomTransformation.DepartmentData.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.BomTransformation.DepartmentData.Function_IsCheckoutAllowed',
				value: "GET /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed for a given Department Data object - get /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				action: 'PTC.BomTransformation.DepartmentData.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.CheckIn",
				description: "Check In a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.CheckIn",
				action: 'PTC.BomTransformation.ExtendedData.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_CheckOut_With',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.CheckOut",
				description: "Check Out a given  Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.CheckOut",
				action: 'PTC.BomTransformation.ExtendedData.Action_CheckOut_With',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_ModifyEffectivities_With',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.ModifyEffectivities",
				description: "Modify Effectivities for a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.ModifyEffectivities",
				action: 'PTC.BomTransformation.ExtendedData.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_RemoveEffectivities_With',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.RemoveEffectivities",
				description: "Remove Effectivities for a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.RemoveEffectivities",
				action: 'PTC.BomTransformation.ExtendedData.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_Revise_With',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.Revise",
				description: "Revise a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.Revise",
				action: 'PTC.BomTransformation.ExtendedData.Action_Revise_With',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_SetState_With',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.SetState",
				description: "Change the (life cycle) State for a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.SetState",
				action: 'PTC.BomTransformation.ExtendedData.Action_SetState_With',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Action_UndoCheckOut',
				value: "POST /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.UndoCheckOut",
				description: "Undo Checkout for a given Extended Data object - post /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.UndoCheckOut",
				action: 'PTC.BomTransformation.ExtendedData.Action_UndoCheckOut',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Function_GetLifeCycleTemplate',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				action: 'PTC.BomTransformation.ExtendedData.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Function_GetValidStateTransitions',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.GetValidStateTransitions()",
				description: "Get valid State Transitions for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.GetValidStateTransitions()",
				action: 'PTC.BomTransformation.ExtendedData.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.BomTransformation.ExtendedData.Function_IsCheckoutAllowed',
				value: "GET /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed for a given Extended Data object - get /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				action: 'PTC.BomTransformation.ExtendedData.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.BomTransformation.XBOMPart.Action_GetManufacturingBOM_With_RelatedItems',
				value: "POST /XBOMParts('{XBOMPartId}')/PTC.BomTransformation.GetManufacturingBOM",
				description: "Get Manufacturing Bill of Material, using the Navigation Criteria passed in the navigationCriteria parameter. - post /XBOMParts('{XBOMPartId}')/PTC.BomTransformation.GetManufacturingBOM",
				action: 'PTC.BomTransformation.XBOMPart.Action_GetManufacturingBOM_With_RelatedItems',
			},
			{
				name: 'UpdateDepartmentData',
				value: "PATCH /DepartmentDatas('{DepartmentDataId}')",
				description: "Update a given Department Data object - patch /DepartmentDatas('{DepartmentDataId}')",
				action: 'UpdateDepartmentData',
			},
			{
				name: 'UpdateExtendedData',
				value: "PATCH /ExtendedDatas('{ExtendedDataId}')",
				description: "Update a given Extended Data object - patch /ExtendedDatas('{ExtendedDataId}')",
				action: 'UpdateExtendedData',
			},
			{
				name: 'XBOMPart.Creator.GetUser',
				value: "GET /XBOMParts('{XBOMPartId}')/Creator",
				description: "Get User - get /XBOMParts('{XBOMPartId}')/Creator",
				action: 'XBOMPart.Creator.GetUser',
			},
			{
				name: 'XBOMPart.Modifier.GetUser',
				value: "GET /XBOMParts('{XBOMPartId}')/Modifier",
				description: "Get User - get /XBOMParts('{XBOMPartId}')/Modifier",
				action: 'XBOMPart.Modifier.GetUser',
			},
		],
	},
	...ActionAssignPlant.description,
	...ActionCheckInDepartmentDatas.description,
	...ActionCheckInExtendedDatas.description,
	...ActionCheckOutDepartmentDatas.description,
	...ActionCheckOutExtendedDatas.description,
	...ActionCreateDepartmentData.description,
	...ActionCreateDepartmentDataForPlantData.description,
	...ActionDetectAndResolveDiscrepancies.description,
	...ActionDetectDiscrepancies.description,
	...ActionGenerateDownstreamStructure.description,
	...ActionGetDepartmentDatas.description,
	...ActionGetDepartmentDatasForParts.description,
	...ActionGetDepartmentDatasForPartsWithInlineNavCriteria.description,
	...ActionGetDepartmentDatasFromPlant.description,
	...ActionGetDepartmentDatasFromPlantWithInlineNavCriteria.description,
	...ActionGetEquivalenceNetworkForParts.description,
	...ActionGetExtendedDatas.description,
	...ActionGetExtendedDatasForParts.description,
	...ActionGetExtendedDatasForPartsWithInlineNavCriteria.description,
	...ActionInsertMadeFrom.description,
	...ActionPasteSpecial.description,
	...ActionRemoveDepartmentDataAssociations.description,
	...ActionRemovePlantDataAssociations.description,
	...ActionResolveDiscrepancies.description,
	...ActionReviseDepartmentDatas.description,
	...ActionReviseExtendedDatas.description,
	...ActionSetStateDepartmentDatas.description,
	...ActionSetStateExtendedDatas.description,
	...ActionSplitAssemble.description,
	...ActionSubcontractToPlants.description,
	...ActionUndoCheckOutDepartmentDatas.description,
	...ActionUndoCheckOutExtendedDatas.description,
	...ActionUpdateCommonPropertiesForDepartmentDatas.description,
	...ActionUpdateCommonPropertiesForExtendedDatas.description,
	...ActionUpdateDepartmentDatas.description,
	...ActionUpdateExtendedDatas.description,
	...ActionUpdateToCurrentUpstreamEquivalents.description,
	...DepartmentDataContextGetContainer.description,
	...DepartmentDataCreatorGetUser.description,
	...DepartmentDataEffectivitiesGetEffectivity.description,
	...DepartmentDataEffectivitiesGetEffectivitys.description,
	...DepartmentDataModifierGetUser.description,
	...DepartmentDataOrganizationGetOrganization.description,
	...DepartmentDataResultedByObjectsGetChangeItem.description,
	...DepartmentDataResultedByObjectsGetChangeItems.description,
	...DepartmentDataRevisionsGetDepartmentData.description,
	...DepartmentDataRevisionsGetDepartmentDatas.description,
	...DepartmentDataVersionsGetDepartmentData.description,
	...DepartmentDataVersionsGetDepartmentDatas.description,
	...ExtendedDataContextGetContainer.description,
	...ExtendedDataCreatorGetUser.description,
	...ExtendedDataDepartmentDataGetDepartmentData.description,
	...ExtendedDataDepartmentDataGetDepartmentDatas.description,
	...ExtendedDataEffectivitiesGetEffectivity.description,
	...ExtendedDataEffectivitiesGetEffectivitys.description,
	...ExtendedDataFolderGetFolder.description,
	...ExtendedDataModifierGetUser.description,
	...ExtendedDataOrganizationGetOrganization.description,
	...ExtendedDataResultedByObjectsGetChangeItem.description,
	...ExtendedDataResultedByObjectsGetChangeItems.description,
	...ExtendedDataRevisionsGetExtendedData.description,
	...ExtendedDataRevisionsGetExtendedDatas.description,
	...ExtendedDataVersionsGetExtendedData.description,
	...ExtendedDataVersionsGetExtendedDatas.description,
	...GetCommonEnterpriseDatas.description,
	...GetDepartmentData.description,
	...GetDepartmentDatas.description,
	...GetExtendedData.description,
	...GetExtendedDatas.description,
	...GetNewAlternates.description,
	...GetNewSplitAlternates.description,
	...GetPlantSpecificEnterpriseDatas.description,
	...GetXbomPart.description,
	...GetXbomParts.description,
	...PtcBomTransformationDepartmentDataActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcBomTransformationDepartmentDataActionCheckOutWith.description,
	...PtcBomTransformationDepartmentDataActionModifyEffectivitiesWith.description,
	...PtcBomTransformationDepartmentDataActionRemoveEffectivitiesWith.description,
	...PtcBomTransformationDepartmentDataActionReviseWith.description,
	...PtcBomTransformationDepartmentDataActionSetStateWith.description,
	...PtcBomTransformationDepartmentDataActionUndoCheckOut.description,
	...PtcBomTransformationDepartmentDataFunctionGetLifeCycleTemplate.description,
	...PtcBomTransformationDepartmentDataFunctionGetValidStateTransitions.description,
	...PtcBomTransformationDepartmentDataFunctionIsCheckoutAllowed.description,
	...PtcBomTransformationExtendedDataActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcBomTransformationExtendedDataActionCheckOutWith.description,
	...PtcBomTransformationExtendedDataActionModifyEffectivitiesWith.description,
	...PtcBomTransformationExtendedDataActionRemoveEffectivitiesWith.description,
	...PtcBomTransformationExtendedDataActionReviseWith.description,
	...PtcBomTransformationExtendedDataActionSetStateWith.description,
	...PtcBomTransformationExtendedDataActionUndoCheckOut.description,
	...PtcBomTransformationExtendedDataFunctionGetLifeCycleTemplate.description,
	...PtcBomTransformationExtendedDataFunctionGetValidStateTransitions.description,
	...PtcBomTransformationExtendedDataFunctionIsCheckoutAllowed.description,
	...PtcBomTransformationXbomPartActionGetManufacturingBomWithRelatedItems.description,
	...UpdateDepartmentData.description,
	...UpdateExtendedData.description,
	...XbomPartCreatorGetUser.description,
	...XbomPartModifierGetUser.description,
];
