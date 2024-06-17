import * as ActionCheckInParts from './Action_CheckInParts';
import * as ActionCheckOutParts from './Action_CheckOutParts';
import * as ActionCreateAssociations from './Action_CreateAssociations';
import * as ActionCreateParts from './Action_CreateParts';
import * as ActionDeleteAssociations from './Action_DeleteAssociations';
import * as ActionDeleteParts from './Action_DeleteParts';
import * as ActionEditPartsSecurityLabels from './Action_EditPartsSecurityLabels';
import * as ActionReviseParts from './Action_ReviseParts';
import * as ActionSetStateParts from './Action_SetStateParts';
import * as ActionUndoCheckOutParts from './Action_UndoCheckOutParts';
import * as ActionUpdateParts from './Action_UpdateParts';
import * as ContainerCreatorGetUser from './Container.Creator.GetUser';
import * as ContainerFoldersDeletePtcDataAdminFolder from './Container.Folders.DeletePTC.DataAdmin.Folder';
import * as ContainerFoldersGetFolder from './Container.Folders.GetFolder';
import * as ContainerFoldersGetFolders from './Container.Folders.GetFolders';
import * as ContainerFoldersPostFolder from './Container.Folders.PostFolder';
import * as ContainerFoldersUpdateFolder from './Container.Folders.UpdateFolder';
import * as ContainerOrganizationGetOrganization from './Container.Organization.GetOrganization';
import * as ContentItemCreatorGetUserRef from './ContentItem.Creator.GetUserRef';
import * as ContentItemModifierGetUserRef from './ContentItem.Modifier.GetUserRef';
import * as DeletePart from './DeletePart';
import * as EffectivityEffectivityContextGetPartEffectivityContext from './Effectivity.EffectivityContext.GetPartEffectivityContext';
import * as EquivalenceLinkDownstreamGetWindchillEntity from './EquivalenceLink.Downstream.GetWindchillEntity';
import * as EquivalenceLinkDownstreamGetWindchillEntitys from './EquivalenceLink.Downstream.GetWindchillEntitys';
import * as EquivalenceLinkUpstreamGetWindchillEntity from './EquivalenceLink.Upstream.GetWindchillEntity';
import * as EquivalenceLinkUpstreamGetWindchillEntitys from './EquivalenceLink.Upstream.GetWindchillEntitys';
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
import * as FolderContentsGetFolderContent from './Folder.Contents.GetFolderContent';
import * as FolderContentsGetFolderContents from './Folder.Contents.GetFolderContents';
import * as FolderFolderContentsGetWindchillEntity from './Folder.FolderContents.GetWindchillEntity';
import * as FolderFolderContentsGetWindchillEntitys from './Folder.FolderContents.GetWindchillEntitys';
import * as FolderFoldersDeletePtcDataAdminFolder from './Folder.Folders.DeletePTC.DataAdmin.Folder';
import * as FolderFoldersGetFolder from './Folder.Folders.GetFolder';
import * as FolderFoldersGetFolders from './Folder.Folders.GetFolders';
import * as FolderFoldersPostFolder from './Folder.Folders.PostFolder';
import * as FolderFoldersUpdateFolder from './Folder.Folders.UpdateFolder';
import * as GetElectricalParts from './GetElectricalParts';
import * as GetOnshapeParts from './GetOnshapeParts';
import * as GetPart from './GetPart';
import * as GetParts from './GetParts';
import * as ModuleVariantInformationLinkLinkedFromGetPart from './ModuleVariantInformationLink.LinkedFrom.GetPart';
import * as ModuleVariantInformationLinkLinkedToGetVariantSpecification from './ModuleVariantInformationLink.LinkedTo.GetVariantSpecification';
import * as OptionSetContextGetContainer from './OptionSet.Context.GetContainer';
import * as OptionSetCreatorGetUser from './OptionSet.Creator.GetUser';
import * as OptionSetModifierGetUser from './OptionSet.Modifier.GetUser';
import * as OptionSetOptionsGetOption from './OptionSet.Options.GetOption';
import * as OptionSetOptionsGetOptions from './OptionSet.Options.GetOptions';
import * as OptionSetRevisionsGetOptionSet from './OptionSet.Revisions.GetOptionSet';
import * as OptionSetRevisionsGetOptionSets from './OptionSet.Revisions.GetOptionSets';
import * as OptionSetVersionsGetOptionSet from './OptionSet.Versions.GetOptionSet';
import * as OptionSetVersionsGetOptionSets from './OptionSet.Versions.GetOptionSets';
import * as OrganizationUsersGetUser from './Organization.Users.GetUser';
import * as OrganizationUsersGetUsers from './Organization.Users.GetUsers';
import * as PartAlternatesGetPartAlternateLink from './Part.Alternates.GetPartAlternateLink';
import * as PartAlternatesGetPartAlternateLinks from './Part.Alternates.GetPartAlternateLinks';
import * as PartAssignedOptionSetGetOptionSet from './Part.AssignedOptionSet.GetOptionSet';
import * as PartAttachmentsDeletePtcContentItem from './Part.Attachments.DeletePTC.ContentItem';
import * as PartAttachmentsGetContentItem from './Part.Attachments.GetContentItem';
import * as PartAttachmentsGetContentItems from './Part.Attachments.GetContentItems';
import * as PartAttachmentsPostContentItem from './Part.Attachments.PostContentItem';
import * as PartAttachmentsUpdateContentItem from './Part.Attachments.UpdateContentItem';
import * as PartContextGetContainer from './Part.Context.GetContainer';
import * as PartCreatorGetUser from './Part.Creator.GetUser';
import * as PartDescribedByGetPartDescribeLink from './Part.DescribedBy.GetPartDescribeLink';
import * as PartDescribedByGetPartDescribeLinks from './Part.DescribedBy.GetPartDescribeLinks';
import * as PartDownstreamEquivalanceLinksGetEquivalenceLink from './Part.DownstreamEquivalanceLinks.GetEquivalenceLink';
import * as PartDownstreamEquivalanceLinksGetEquivalenceLinks from './Part.DownstreamEquivalanceLinks.GetEquivalenceLinks';
import * as PartEffectivitiesGetEffectivity from './Part.Effectivities.GetEffectivity';
import * as PartEffectivitiesGetEffectivitys from './Part.Effectivities.GetEffectivitys';
import * as PartExtendedDataGetExtendedData from './Part.ExtendedData.GetExtendedData';
import * as PartExtendedDataGetExtendedDatas from './Part.ExtendedData.GetExtendedDatas';
import * as PartFolderGetFolder from './Part.Folder.GetFolder';
import * as PartMadeFromLinkGetRawMaterialLink from './Part.MadeFromLink.GetRawMaterialLink';
import * as PartMadeFromLinkGetRawMaterialLinks from './Part.MadeFromLink.GetRawMaterialLinks';
import * as PartModifierGetUser from './Part.Modifier.GetUser';
import * as PartModuleVariantInformationLinksGetModuleVariantInformationLink from './Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink';
import * as PartModuleVariantInformationLinksGetModuleVariantInformationLinks from './Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks';
import * as PartOrganizationGetOrganization from './Part.Organization.GetOrganization';
import * as PartPartDocAssociationsGetPartDocAssociation from './Part.PartDocAssociations.GetPartDocAssociation';
import * as PartPartDocAssociationsGetPartDocAssociations from './Part.PartDocAssociations.GetPartDocAssociations';
import * as PartPartMadeFromGetPart from './Part.PartMadeFrom.GetPart';
import * as PartPartMadeFromGetParts from './Part.PartMadeFrom.GetParts';
import * as PartReferencesGetPartReferenceLink from './Part.References.GetPartReferenceLink';
import * as PartReferencesGetPartReferenceLinks from './Part.References.GetPartReferenceLinks';
import * as PartRepresentationsGetRepresentation from './Part.Representations.GetRepresentation';
import * as PartRepresentationsGetRepresentations from './Part.Representations.GetRepresentations';
import * as PartRevisionsGetPart from './Part.Revisions.GetPart';
import * as PartRevisionsGetParts from './Part.Revisions.GetParts';
import * as PartSubstitutesGetPartSubstituteLink from './Part.Substitutes.GetPartSubstituteLink';
import * as PartSubstitutesGetPartSubstituteLinks from './Part.Substitutes.GetPartSubstituteLinks';
import * as PartUpstreamEquivalanceLinksGetEquivalenceLink from './Part.UpstreamEquivalanceLinks.GetEquivalenceLink';
import * as PartUpstreamEquivalanceLinksGetEquivalenceLinks from './Part.UpstreamEquivalanceLinks.GetEquivalenceLinks';
import * as PartUsedByGetPart from './Part.UsedBy.GetPart';
import * as PartUsedByGetParts from './Part.UsedBy.GetParts';
import * as PartUsesDeletePtcProdMgmtPartUse from './Part.Uses.DeletePTC.ProdMgmt.PartUse';
import * as PartUsesGetPartUse from './Part.Uses.GetPartUse';
import * as PartUsesGetPartUses from './Part.Uses.GetPartUses';
import * as PartUsesPostPartUse from './Part.Uses.PostPartUse';
import * as PartUsesUpdatePartUse from './Part.Uses.UpdatePartUse';
import * as PartVersionsGetPart from './Part.Versions.GetPart';
import * as PartVersionsGetParts from './Part.Versions.GetParts';
import * as PartAlternateLinkAlternateGetReplacementPart from './PartAlternateLink.Alternate.GetReplacementPart';
import * as PartAlternateLinkAlternateForGetReplacementPart from './PartAlternateLink.AlternateFor.GetReplacementPart';
import * as PartAlternateLinkAlternatePartGetPart from './PartAlternateLink.AlternatePart.GetPart';
import * as PartDescribeLinkDescribedByGetDocument from './PartDescribeLink.DescribedBy.GetDocument';
import * as PartDescribeLinkDescribesGetPart from './PartDescribeLink.Describes.GetPart';
import * as PartDocAssociationRelatedCadDocGetCadDocument from './PartDocAssociation.RelatedCADDoc.GetCADDocument';
import * as PartDocAssociationRelatedPartGetPart from './PartDocAssociation.RelatedPart.GetPart';
import * as PartReferenceLinkReferencedByGetPart from './PartReferenceLink.ReferencedBy.GetPart';
import * as PartReferenceLinkReferencesGetDocument from './PartReferenceLink.References.GetDocument';
import * as PartSubstituteLinkSubstituteGetReplacementPart from './PartSubstituteLink.Substitute.GetReplacementPart';
import * as PartSubstituteLinkSubstituteForGetPartUse from './PartSubstituteLink.SubstituteFor.GetPartUse';
import * as PartSubstituteLinkSubstitutePartGetPart from './PartSubstituteLink.SubstitutePart.GetPart';
import * as PartUseOccurrencesDeletePtcProdMgmtUsageOccurrence from './PartUse.Occurrences.DeletePTC.ProdMgmt.UsageOccurrence';
import * as PartUseOccurrencesGetUsageOccurrence from './PartUse.Occurrences.GetUsageOccurrence';
import * as PartUseOccurrencesGetUsageOccurrences from './PartUse.Occurrences.GetUsageOccurrences';
import * as PartUseOccurrencesPostUsageOccurrence from './PartUse.Occurrences.PostUsageOccurrence';
import * as PartUseOccurrencesUpdateUsageOccurrence from './PartUse.Occurrences.UpdateUsageOccurrence';
import * as PartUseUsedByGetPart from './PartUse.UsedBy.GetPart';
import * as PartUseUsesGetPart from './PartUse.Uses.GetPart';
import * as PostPart from './PostPart';
import * as PtcProdMgmtPartActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.ProdMgmt.Part.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcProdMgmtPartActionCheckOutWith from './PTC.ProdMgmt.Part.Action_CheckOut_With';
import * as PtcProdMgmtPartActionCreateUsesWith from './PTC.ProdMgmt.Part.Action_CreateUses_With';
import * as PtcProdMgmtPartActionGetExtendedDatasWithInlineNavCriteriaWith from './PTC.ProdMgmt.Part.Action_GetExtendedDatasWithInlineNavCriteria_With';
import * as PtcProdMgmtPartActionGetMultiLevelComponentsReportWithShowSingleLevelReport from './PTC.ProdMgmt.Part.Action_GetMultiLevelComponentsReport_With_ShowSingleLevelReport';
import * as PtcProdMgmtPartActionGetPartStructureWithPathFilterWithSiblings from './PTC.ProdMgmt.Part.Action_GetPartStructure_With_PathFilterWithSiblings';
import * as PtcProdMgmtPartActionModifyEffectivitiesWith from './PTC.ProdMgmt.Part.Action_ModifyEffectivities_With';
import * as PtcProdMgmtPartActionRemoveEffectivitiesWith from './PTC.ProdMgmt.Part.Action_RemoveEffectivities_With';
import * as PtcProdMgmtPartActionReviseWith from './PTC.ProdMgmt.Part.Action_Revise_With';
import * as PtcProdMgmtPartActionSetStateWith from './PTC.ProdMgmt.Part.Action_SetState_With';
import * as PtcProdMgmtPartActionUndoCheckOut from './PTC.ProdMgmt.Part.Action_UndoCheckOut';
import * as PtcProdMgmtPartActionUpdateCommonPropertiesWith from './PTC.ProdMgmt.Part.Action_UpdateCommonProperties_With';
import * as PtcProdMgmtPartActionUploadStage1ActionWithDelegateName from './PTC.ProdMgmt.Part.Action_UploadStage1Action_With_DelegateName';
import * as PtcProdMgmtPartActionUploadStage3ActionWith from './PTC.ProdMgmt.Part.Action_UploadStage3Action_With';
import * as PtcProdMgmtPartFunctionGetAllVariantSpecifications from './PTC.ProdMgmt.Part.Function_GetAllVariantSpecifications';
import * as PtcProdMgmtPartFunctionGetAssignedExpression from './PTC.ProdMgmt.Part.Function_GetAssignedExpression';
import * as PtcProdMgmtPartFunctionGetDynamicStructureRepresentation from './PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation';
import * as PtcProdMgmtPartFunctionGetDynamicStructureRepresentationWith from './PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation_With';
import * as PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWith from './PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With';
import * as PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations from './PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations';
import * as PtcProdMgmtPartFunctionGetLifeCycleTemplate from './PTC.ProdMgmt.Part.Function_GetLifeCycleTemplate';
import * as PtcProdMgmtPartFunctionGetValidStateTransitions from './PTC.ProdMgmt.Part.Function_GetValidStateTransitions';
import * as PtcProdMgmtPartFunctionIsCheckoutAllowed from './PTC.ProdMgmt.Part.Function_IsCheckoutAllowed';
import * as RawMaterialLinkMadeFromGetPart from './RawMaterialLink.MadeFrom.GetPart';
import * as RawMaterialLinkMakesGetPart from './RawMaterialLink.Makes.GetPart';
import * as UpdatePart from './UpdatePart';
import * as UserGroupsGetGroup from './User.Groups.GetGroup';
import * as UserGroupsGetGroups from './User.Groups.GetGroups';
import * as UserLicenseGroupsGetLicenseGroup from './User.LicenseGroups.GetLicenseGroup';
import * as UserLicenseGroupsGetLicenseGroups from './User.LicenseGroups.GetLicenseGroups';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCheckInParts,
	ActionCheckOutParts,
	ActionCreateAssociations,
	ActionCreateParts,
	ActionDeleteAssociations,
	ActionDeleteParts,
	ActionEditPartsSecurityLabels,
	ActionReviseParts,
	ActionSetStateParts,
	ActionUndoCheckOutParts,
	ActionUpdateParts,
	ContainerCreatorGetUser,
	ContainerFoldersDeletePtcDataAdminFolder,
	ContainerFoldersGetFolder,
	ContainerFoldersGetFolders,
	ContainerFoldersPostFolder,
	ContainerFoldersUpdateFolder,
	ContainerOrganizationGetOrganization,
	ContentItemCreatorGetUserRef,
	ContentItemModifierGetUserRef,
	DeletePart,
	EffectivityEffectivityContextGetPartEffectivityContext,
	EquivalenceLinkDownstreamGetWindchillEntity,
	EquivalenceLinkDownstreamGetWindchillEntitys,
	EquivalenceLinkUpstreamGetWindchillEntity,
	EquivalenceLinkUpstreamGetWindchillEntitys,
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
	FolderContentsGetFolderContent,
	FolderContentsGetFolderContents,
	FolderFolderContentsGetWindchillEntity,
	FolderFolderContentsGetWindchillEntitys,
	FolderFoldersDeletePtcDataAdminFolder,
	FolderFoldersGetFolder,
	FolderFoldersGetFolders,
	FolderFoldersPostFolder,
	FolderFoldersUpdateFolder,
	GetElectricalParts,
	GetOnshapeParts,
	GetPart,
	GetParts,
	ModuleVariantInformationLinkLinkedFromGetPart,
	ModuleVariantInformationLinkLinkedToGetVariantSpecification,
	OptionSetContextGetContainer,
	OptionSetCreatorGetUser,
	OptionSetModifierGetUser,
	OptionSetOptionsGetOption,
	OptionSetOptionsGetOptions,
	OptionSetRevisionsGetOptionSet,
	OptionSetRevisionsGetOptionSets,
	OptionSetVersionsGetOptionSet,
	OptionSetVersionsGetOptionSets,
	OrganizationUsersGetUser,
	OrganizationUsersGetUsers,
	PartAlternatesGetPartAlternateLink,
	PartAlternatesGetPartAlternateLinks,
	PartAssignedOptionSetGetOptionSet,
	PartAttachmentsDeletePtcContentItem,
	PartAttachmentsGetContentItem,
	PartAttachmentsGetContentItems,
	PartAttachmentsPostContentItem,
	PartAttachmentsUpdateContentItem,
	PartContextGetContainer,
	PartCreatorGetUser,
	PartDescribedByGetPartDescribeLink,
	PartDescribedByGetPartDescribeLinks,
	PartDownstreamEquivalanceLinksGetEquivalenceLink,
	PartDownstreamEquivalanceLinksGetEquivalenceLinks,
	PartEffectivitiesGetEffectivity,
	PartEffectivitiesGetEffectivitys,
	PartExtendedDataGetExtendedData,
	PartExtendedDataGetExtendedDatas,
	PartFolderGetFolder,
	PartMadeFromLinkGetRawMaterialLink,
	PartMadeFromLinkGetRawMaterialLinks,
	PartModifierGetUser,
	PartModuleVariantInformationLinksGetModuleVariantInformationLink,
	PartModuleVariantInformationLinksGetModuleVariantInformationLinks,
	PartOrganizationGetOrganization,
	PartPartDocAssociationsGetPartDocAssociation,
	PartPartDocAssociationsGetPartDocAssociations,
	PartPartMadeFromGetPart,
	PartPartMadeFromGetParts,
	PartReferencesGetPartReferenceLink,
	PartReferencesGetPartReferenceLinks,
	PartRepresentationsGetRepresentation,
	PartRepresentationsGetRepresentations,
	PartRevisionsGetPart,
	PartRevisionsGetParts,
	PartSubstitutesGetPartSubstituteLink,
	PartSubstitutesGetPartSubstituteLinks,
	PartUpstreamEquivalanceLinksGetEquivalenceLink,
	PartUpstreamEquivalanceLinksGetEquivalenceLinks,
	PartUsedByGetPart,
	PartUsedByGetParts,
	PartUsesDeletePtcProdMgmtPartUse,
	PartUsesGetPartUse,
	PartUsesGetPartUses,
	PartUsesPostPartUse,
	PartUsesUpdatePartUse,
	PartVersionsGetPart,
	PartVersionsGetParts,
	PartAlternateLinkAlternateGetReplacementPart,
	PartAlternateLinkAlternateForGetReplacementPart,
	PartAlternateLinkAlternatePartGetPart,
	PartDescribeLinkDescribedByGetDocument,
	PartDescribeLinkDescribesGetPart,
	PartDocAssociationRelatedCadDocGetCadDocument,
	PartDocAssociationRelatedPartGetPart,
	PartReferenceLinkReferencedByGetPart,
	PartReferenceLinkReferencesGetDocument,
	PartSubstituteLinkSubstituteGetReplacementPart,
	PartSubstituteLinkSubstituteForGetPartUse,
	PartSubstituteLinkSubstitutePartGetPart,
	PartUseOccurrencesDeletePtcProdMgmtUsageOccurrence,
	PartUseOccurrencesGetUsageOccurrence,
	PartUseOccurrencesGetUsageOccurrences,
	PartUseOccurrencesPostUsageOccurrence,
	PartUseOccurrencesUpdateUsageOccurrence,
	PartUseUsedByGetPart,
	PartUseUsesGetPart,
	PostPart,
	PtcProdMgmtPartActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcProdMgmtPartActionCheckOutWith,
	PtcProdMgmtPartActionCreateUsesWith,
	PtcProdMgmtPartActionGetExtendedDatasWithInlineNavCriteriaWith,
	PtcProdMgmtPartActionGetMultiLevelComponentsReportWithShowSingleLevelReport,
	PtcProdMgmtPartActionGetPartStructureWithPathFilterWithSiblings,
	PtcProdMgmtPartActionModifyEffectivitiesWith,
	PtcProdMgmtPartActionRemoveEffectivitiesWith,
	PtcProdMgmtPartActionReviseWith,
	PtcProdMgmtPartActionSetStateWith,
	PtcProdMgmtPartActionUndoCheckOut,
	PtcProdMgmtPartActionUpdateCommonPropertiesWith,
	PtcProdMgmtPartActionUploadStage1ActionWithDelegateName,
	PtcProdMgmtPartActionUploadStage3ActionWith,
	PtcProdMgmtPartFunctionGetAllVariantSpecifications,
	PtcProdMgmtPartFunctionGetAssignedExpression,
	PtcProdMgmtPartFunctionGetDynamicStructureRepresentation,
	PtcProdMgmtPartFunctionGetDynamicStructureRepresentationWith,
	PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWith,
	PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations,
	PtcProdMgmtPartFunctionGetLifeCycleTemplate,
	PtcProdMgmtPartFunctionGetValidStateTransitions,
	PtcProdMgmtPartFunctionIsCheckoutAllowed,
	RawMaterialLinkMadeFromGetPart,
	RawMaterialLinkMakesGetPart,
	UpdatePart,
	UserGroupsGetGroup,
	UserGroupsGetGroups,
	UserLicenseGroupsGetLicenseGroup,
	UserLicenseGroupsGetLicenseGroups,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v6/ProdMgmt',
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
					'PTC.ProdMgmt',
				],
			},
		},
		default: 'POST /CheckInParts',
		options: [
			{
				name: 'Action_CheckInParts',
				value: 'POST /CheckInParts',
				description: 'Execute CheckInParts - post /CheckInParts',
				action: 'Action_CheckInParts',
			},
			{
				name: 'Action_CheckOutParts',
				value: 'POST /CheckOutParts',
				description: 'Execute CheckOutParts - post /CheckOutParts',
				action: 'Action_CheckOutParts',
			},
			{
				name: 'Action_CreateAssociations',
				value: 'POST /CreateAssociations',
				description: 'Create Single or Multiple Associations between Parts and CAD documents. - post /CreateAssociations',
				action: 'Action_CreateAssociations',
			},
			{
				name: 'Action_CreateParts',
				value: 'POST /CreateParts',
				description: 'Execute CreateParts - post /CreateParts',
				action: 'Action_CreateParts',
			},
			{
				name: 'Action_DeleteAssociations',
				value: 'POST /DeleteAssociations',
				description: 'Delete Single or Multiple Associations between Parts and CAD documents. - post /DeleteAssociations',
				action: 'Action_DeleteAssociations',
			},
			{
				name: 'Action_DeleteParts',
				value: 'POST /DeleteParts',
				description: 'Execute DeleteParts - post /DeleteParts',
				action: 'Action_DeleteParts',
			},
			{
				name: 'Action_EditPartsSecurityLabels',
				value: 'POST /EditPartsSecurityLabels',
				description: 'Execute EditPartsSecurityLabels - post /EditPartsSecurityLabels',
				action: 'Action_EditPartsSecurityLabels',
			},
			{
				name: 'Action_ReviseParts',
				value: 'POST /ReviseParts',
				description: 'Execute ReviseParts - post /ReviseParts',
				action: 'Action_ReviseParts',
			},
			{
				name: 'Action_SetStateParts',
				value: 'POST /SetStateParts',
				description: 'Execute SetStateParts - post /SetStateParts',
				action: 'Action_SetStateParts',
			},
			{
				name: 'Action_UndoCheckOutParts',
				value: 'POST /UndoCheckOutParts',
				description: 'Execute UndoCheckOutParts - post /UndoCheckOutParts',
				action: 'Action_UndoCheckOutParts',
			},
			{
				name: 'Action_UpdateParts',
				value: 'POST /UpdateParts',
				description: 'Execute UpdateParts - post /UpdateParts',
				action: 'Action_UpdateParts',
			},
			{
				name: 'Container.Creator.GetUser',
				value: "GET /Parts('{PartId}')/Context/Creator",
				description: "Get User - get /Parts('{PartId}')/Context/Creator",
				action: 'Container.Creator.GetUser',
			},
			{
				name: 'Container.Folders.DeletePTC.DataAdmin.Folder',
				value: "DELETE /Parts('{PartId}')/Context/Folders('{FolderId}')",
				description: "Delete an existing Folder - delete /Parts('{PartId}')/Context/Folders('{FolderId}')",
				action: 'Container.Folders.DeletePTC.DataAdmin.Folder',
			},
			{
				name: 'Container.Folders.GetFolder',
				value: "GET /Parts('{PartId}')/Context/Folders('{FolderId}')",
				description: "Get Folder for a given FolderId - get /Parts('{PartId}')/Context/Folders('{FolderId}')",
				action: 'Container.Folders.GetFolder',
			},
			{
				name: 'Container.Folders.GetFolders',
				value: "GET /Parts('{PartId}')/Context/Folders",
				description: "Get Folder - get /Parts('{PartId}')/Context/Folders",
				action: 'Container.Folders.GetFolders',
			},
			{
				name: 'Container.Folders.PostFolder',
				value: "POST /Parts('{PartId}')/Context/Folders",
				description: "Create Folder - post /Parts('{PartId}')/Context/Folders",
				action: 'Container.Folders.PostFolder',
			},
			{
				name: 'Container.Folders.UpdateFolder',
				value: "PATCH /Parts('{PartId}')/Context/Folders('{FolderId}')",
				description: "Update an existing Folder - patch /Parts('{PartId}')/Context/Folders('{FolderId}')",
				action: 'Container.Folders.UpdateFolder',
			},
			{
				name: 'Container.Organization.GetOrganization',
				value: "GET /Parts('{PartId}')/Context/Organization",
				description: "Get Organization - get /Parts('{PartId}')/Context/Organization",
				action: 'Container.Organization.GetOrganization',
			},
			{
				name: 'ContentItem.Creator.GetUserRef',
				value: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')/Creator",
				description: "Get UserRef - get /Parts('{PartId}')/Attachments('{ContentItemId}')/Creator",
				action: 'ContentItem.Creator.GetUserRef',
			},
			{
				name: 'ContentItem.Modifier.GetUserRef',
				value: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')/Modifier",
				description: "Get UserRef - get /Parts('{PartId}')/Attachments('{ContentItemId}')/Modifier",
				action: 'ContentItem.Modifier.GetUserRef',
			},
			{
				name: 'DeletePart',
				value: "DELETE /Parts('{PartId}')",
				description: "DeletePart - delete /Parts('{PartId}')",
				action: 'DeletePart',
			},
			{
				name: 'Effectivity.EffectivityContext.GetPartEffectivityContext',
				value: "GET /Parts('{PartId}')/Effectivities('{EffectivityId}')/EffectivityContext",
				description: "Get PartEffectivityContext - get /Parts('{PartId}')/Effectivities('{EffectivityId}')/EffectivityContext",
				action: 'Effectivity.EffectivityContext.GetPartEffectivityContext',
			},
			{
				name: 'EquivalenceLink.Downstream.GetWindchillEntity',
				value: 'EquivalenceLink.Downstream.GetWindchillEntity',
				description: "Get WindchillEntity for a given WindchillEntityId - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Downstream('{WindchillEntityId}')",
				action: 'EquivalenceLink.Downstream.GetWindchillEntity',
			},
			{
				name: 'EquivalenceLink.Downstream.GetWindchillEntitys',
				value: 'EquivalenceLink.Downstream.GetWindchillEntitys',
				description: "Get WindchillEntity - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Downstream",
				action: 'EquivalenceLink.Downstream.GetWindchillEntitys',
			},
			{
				name: 'EquivalenceLink.Upstream.GetWindchillEntity',
				value: 'EquivalenceLink.Upstream.GetWindchillEntity',
				description: "Get WindchillEntity for a given WindchillEntityId - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream('{WindchillEntityId}')",
				action: 'EquivalenceLink.Upstream.GetWindchillEntity',
			},
			{
				name: 'EquivalenceLink.Upstream.GetWindchillEntitys',
				value: 'EquivalenceLink.Upstream.GetWindchillEntitys',
				description: "Get WindchillEntity - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				action: 'EquivalenceLink.Upstream.GetWindchillEntitys',
			},
			{
				name: 'ExtendedData.Context.GetContainer',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Context",
				description: "Get Container - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Context",
				action: 'ExtendedData.Context.GetContainer',
			},
			{
				name: 'ExtendedData.Creator.GetUser',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Creator",
				description: "Get User - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Creator",
				action: 'ExtendedData.Creator.GetUser',
			},
			{
				name: 'ExtendedData.DepartmentData.GetDepartmentData',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/DepartmentData('{DepartmentDataId}')",
				description: "Get DepartmentData for a given DepartmentDataId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/DepartmentData('{DepartmentDataId}')",
				action: 'ExtendedData.DepartmentData.GetDepartmentData',
			},
			{
				name: 'ExtendedData.DepartmentData.GetDepartmentDatas',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/DepartmentData",
				description: "Get DepartmentData - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/DepartmentData",
				action: 'ExtendedData.DepartmentData.GetDepartmentDatas',
			},
			{
				name: 'ExtendedData.Effectivities.GetEffectivity',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Effectivities('{EffectivityId}')",
				action: 'ExtendedData.Effectivities.GetEffectivity',
			},
			{
				name: 'ExtendedData.Effectivities.GetEffectivitys',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Effectivities",
				description: "Get Effectivity - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Effectivities",
				action: 'ExtendedData.Effectivities.GetEffectivitys',
			},
			{
				name: 'ExtendedData.Folder.GetFolder',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Folder",
				action: 'ExtendedData.Folder.GetFolder',
			},
			{
				name: 'ExtendedData.Modifier.GetUser',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Modifier",
				action: 'ExtendedData.Modifier.GetUser',
			},
			{
				name: 'ExtendedData.Organization.GetOrganization',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Organization",
				action: 'ExtendedData.Organization.GetOrganization',
			},
			{
				name: 'ExtendedData.ResultedByObjects.GetChangeItem',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'ExtendedData.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'ExtendedData.ResultedByObjects.GetChangeItems',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/ResultedByObjects",
				action: 'ExtendedData.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'ExtendedData.Revisions.GetExtendedData',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Revisions('{RevisionsId}')",
				description: "Get ExtendedData for a given RevisionsId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Revisions('{RevisionsId}')",
				action: 'ExtendedData.Revisions.GetExtendedData',
			},
			{
				name: 'ExtendedData.Revisions.GetExtendedDatas',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Revisions",
				description: "Get ExtendedData - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Revisions",
				action: 'ExtendedData.Revisions.GetExtendedDatas',
			},
			{
				name: 'ExtendedData.Versions.GetExtendedData',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Versions('{VersionsId}')",
				description: "Get ExtendedData for a given VersionsId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Versions('{VersionsId}')",
				action: 'ExtendedData.Versions.GetExtendedData',
			},
			{
				name: 'ExtendedData.Versions.GetExtendedDatas',
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Versions",
				description: "Get ExtendedData - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Versions",
				action: 'ExtendedData.Versions.GetExtendedDatas',
			},
			{
				name: 'Folder.Contents.GetFolderContent',
				value: "GET /Parts('{PartId}')/Folder/Contents('{FolderContentId}')",
				description: "Get FolderContent for a given FolderContentId - get /Parts('{PartId}')/Folder/Contents('{FolderContentId}')",
				action: 'Folder.Contents.GetFolderContent',
			},
			{
				name: 'Folder.Contents.GetFolderContents',
				value: "GET /Parts('{PartId}')/Folder/Contents",
				description: "Get FolderContent - get /Parts('{PartId}')/Folder/Contents",
				action: 'Folder.Contents.GetFolderContents',
			},
			{
				name: 'Folder.FolderContents.GetWindchillEntity',
				value: "GET /Parts('{PartId}')/Folder/FolderContents('{WindchillEntityId}')",
				description: "Get WindchillEntity for a given WindchillEntityId - get /Parts('{PartId}')/Folder/FolderContents('{WindchillEntityId}')",
				action: 'Folder.FolderContents.GetWindchillEntity',
			},
			{
				name: 'Folder.FolderContents.GetWindchillEntitys',
				value: "GET /Parts('{PartId}')/Folder/FolderContents",
				description: "Get WindchillEntity - get /Parts('{PartId}')/Folder/FolderContents",
				action: 'Folder.FolderContents.GetWindchillEntitys',
			},
			{
				name: 'Folder.Folders.DeletePTC.DataAdmin.Folder',
				value: "DELETE /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				description: "Delete an existing Folder - delete /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				action: 'Folder.Folders.DeletePTC.DataAdmin.Folder',
			},
			{
				name: 'Folder.Folders.GetFolder',
				value: "GET /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				description: "Get Folder for a given FolderId - get /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				action: 'Folder.Folders.GetFolder',
			},
			{
				name: 'Folder.Folders.GetFolders',
				value: "GET /Parts('{PartId}')/Folder/Folders",
				description: "Get Folder - get /Parts('{PartId}')/Folder/Folders",
				action: 'Folder.Folders.GetFolders',
			},
			{
				name: 'Folder.Folders.PostFolder',
				value: "POST /Parts('{PartId}')/Folder/Folders",
				description: "Create Folder - post /Parts('{PartId}')/Folder/Folders",
				action: 'Folder.Folders.PostFolder',
			},
			{
				name: 'Folder.Folders.UpdateFolder',
				value: "PATCH /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				description: "Update an existing Folder - patch /Parts('{PartId}')/Folder/Folders('{FolderId}')",
				action: 'Folder.Folders.UpdateFolder',
			},
			{
				name: 'GetElectricalParts',
				value: 'GET /Parts/PTC.ProdMgmt.ElectricalPart',
				description: 'Get Parts of type ElectricalPart - get /Parts/PTC.ProdMgmt.ElectricalPart',
				action: 'GetElectricalParts',
			},
			{
				name: 'GetOnshapeParts',
				value: 'GET /Parts/PTC.ProdMgmt.OnshapePart',
				description: 'Get Parts of type OnshapePart - get /Parts/PTC.ProdMgmt.OnshapePart',
				action: 'GetOnshapeParts',
			},
			{
				name: 'GetPart',
				value: "GET /Parts('{PartId}')",
				description: "Get Part for a given PartId - get /Parts('{PartId}')",
				action: 'GetPart',
			},
			{
				name: 'GetParts',
				value: 'GET /Parts',
				description: 'Get Parts - get /Parts',
				action: 'GetParts',
			},
			{
				name: 'ModuleVariantInformationLink.LinkedFrom.GetPart',
				value: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')/LinkedFrom",
				description: "Get Part - get /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')/LinkedFrom",
				action: 'ModuleVariantInformationLink.LinkedFrom.GetPart',
			},
			{
				name: 'ModuleVariantInformationLink.LinkedTo.GetVariantSpecification',
				value: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')/LinkedTo",
				description: "Get VariantSpecification - get /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')/LinkedTo",
				action: 'ModuleVariantInformationLink.LinkedTo.GetVariantSpecification',
			},
			{
				name: 'OptionSet.Context.GetContainer',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Context",
				description: "Get Container - get /Parts('{PartId}')/AssignedOptionSet/Context",
				action: 'OptionSet.Context.GetContainer',
			},
			{
				name: 'OptionSet.Creator.GetUser',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Creator",
				description: "Get User - get /Parts('{PartId}')/AssignedOptionSet/Creator",
				action: 'OptionSet.Creator.GetUser',
			},
			{
				name: 'OptionSet.Modifier.GetUser',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Modifier",
				description: "Get User - get /Parts('{PartId}')/AssignedOptionSet/Modifier",
				action: 'OptionSet.Modifier.GetUser',
			},
			{
				name: 'OptionSet.Options.GetOption',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Options('{OptionId}')",
				description: "Get Option for a given OptionId - get /Parts('{PartId}')/AssignedOptionSet/Options('{OptionId}')",
				action: 'OptionSet.Options.GetOption',
			},
			{
				name: 'OptionSet.Options.GetOptions',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Options",
				description: "Get Option - get /Parts('{PartId}')/AssignedOptionSet/Options",
				action: 'OptionSet.Options.GetOptions',
			},
			{
				name: 'OptionSet.Revisions.GetOptionSet',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Revisions('{OptionSetId}')",
				description: "Get OptionSet for a given OptionSetId - get /Parts('{PartId}')/AssignedOptionSet/Revisions('{OptionSetId}')",
				action: 'OptionSet.Revisions.GetOptionSet',
			},
			{
				name: 'OptionSet.Revisions.GetOptionSets',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Revisions",
				description: "Get OptionSet - get /Parts('{PartId}')/AssignedOptionSet/Revisions",
				action: 'OptionSet.Revisions.GetOptionSets',
			},
			{
				name: 'OptionSet.Versions.GetOptionSet',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Versions('{OptionSetId}')",
				description: "Get OptionSet for a given OptionSetId - get /Parts('{PartId}')/AssignedOptionSet/Versions('{OptionSetId}')",
				action: 'OptionSet.Versions.GetOptionSet',
			},
			{
				name: 'OptionSet.Versions.GetOptionSets',
				value: "GET /Parts('{PartId}')/AssignedOptionSet/Versions",
				description: "Get OptionSet - get /Parts('{PartId}')/AssignedOptionSet/Versions",
				action: 'OptionSet.Versions.GetOptionSets',
			},
			{
				name: 'Organization.Users.GetUser',
				value: "GET /Parts('{PartId}')/Organization/Users('{UserId}')",
				description: "Get User for a given UserId - get /Parts('{PartId}')/Organization/Users('{UserId}')",
				action: 'Organization.Users.GetUser',
			},
			{
				name: 'Organization.Users.GetUsers',
				value: "GET /Parts('{PartId}')/Organization/Users",
				description: "Get User - get /Parts('{PartId}')/Organization/Users",
				action: 'Organization.Users.GetUsers',
			},
			{
				name: 'Part.Alternates.GetPartAlternateLink',
				value: 'Part.Alternates.GetPartAlternateLink',
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
				action: 'Part.Alternates.GetPartAlternateLink',
			},
			{
				name: 'Part.Alternates.GetPartAlternateLinks',
				value: 'Part.Alternates.GetPartAlternateLinks',
				description: "Get PartAlternateLink - get /Parts('{PartId}')/Alternates",
				action: 'Part.Alternates.GetPartAlternateLinks',
			},
			{
				name: 'Part.AssignedOptionSet.GetOptionSet',
				value: 'Part.AssignedOptionSet.GetOptionSet',
				description: "Get OptionSet - get /Parts('{PartId}')/AssignedOptionSet",
				action: 'Part.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'Part.Attachments.DeletePTC.ContentItem',
				value: 'Part.Attachments.DeletePTC.ContentItem',
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: 'Part.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'Part.Attachments.GetContentItem',
				value: 'Part.Attachments.GetContentItem',
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: 'Part.Attachments.GetContentItem',
			},
			{
				name: 'Part.Attachments.GetContentItems',
				value: 'Part.Attachments.GetContentItems',
				description: "Get ContentItem - get /Parts('{PartId}')/Attachments",
				action: 'Part.Attachments.GetContentItems',
			},
			{
				name: 'Part.Attachments.PostContentItem',
				value: 'Part.Attachments.PostContentItem',
				description: "Create ContentItem - post /Parts('{PartId}')/Attachments",
				action: 'Part.Attachments.PostContentItem',
			},
			{
				name: 'Part.Attachments.UpdateContentItem',
				value: 'Part.Attachments.UpdateContentItem',
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: 'Part.Attachments.UpdateContentItem',
			},
			{
				name: 'Part.Context.GetContainer',
				value: 'Part.Context.GetContainer',
				description: "Get Container - get /Parts('{PartId}')/Context",
				action: 'Part.Context.GetContainer',
			},
			{
				name: 'Part.Creator.GetUser',
				value: 'Part.Creator.GetUser',
				description: "Get User - get /Parts('{PartId}')/Creator",
				action: 'Part.Creator.GetUser',
			},
			{
				name: 'Part.DescribedBy.GetPartDescribeLink',
				value: 'Part.DescribedBy.GetPartDescribeLink',
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
				action: 'Part.DescribedBy.GetPartDescribeLink',
			},
			{
				name: 'Part.DescribedBy.GetPartDescribeLinks',
				value: 'Part.DescribedBy.GetPartDescribeLinks',
				description: "Get PartDescribeLink - get /Parts('{PartId}')/DescribedBy",
				action: 'Part.DescribedBy.GetPartDescribeLinks',
			},
			{
				name: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				value: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
			},
			{
				name: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLinks',
				value: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLinks',
				description: "Get EquivalenceLink - get /Parts('{PartId}')/DownstreamEquivalanceLinks",
				action: 'Part.DownstreamEquivalanceLinks.GetEquivalenceLinks',
			},
			{
				name: 'Part.Effectivities.GetEffectivity',
				value: 'Part.Effectivities.GetEffectivity',
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/Effectivities('{EffectivityId}')",
				action: 'Part.Effectivities.GetEffectivity',
			},
			{
				name: 'Part.Effectivities.GetEffectivitys',
				value: 'Part.Effectivities.GetEffectivitys',
				description: "Get Effectivity - get /Parts('{PartId}')/Effectivities",
				action: 'Part.Effectivities.GetEffectivitys',
			},
			{
				name: 'Part.ExtendedData.GetExtendedData',
				value: 'Part.ExtendedData.GetExtendedData',
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
				action: 'Part.ExtendedData.GetExtendedData',
			},
			{
				name: 'Part.ExtendedData.GetExtendedDatas',
				value: 'Part.ExtendedData.GetExtendedDatas',
				description: "Get ExtendedData - get /Parts('{PartId}')/ExtendedData",
				action: 'Part.ExtendedData.GetExtendedDatas',
			},
			{
				name: 'Part.Folder.GetFolder',
				value: 'Part.Folder.GetFolder',
				description: "Get Folder - get /Parts('{PartId}')/Folder",
				action: 'Part.Folder.GetFolder',
			},
			{
				name: 'Part.MadeFromLink.GetRawMaterialLink',
				value: 'Part.MadeFromLink.GetRawMaterialLink',
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
				action: 'Part.MadeFromLink.GetRawMaterialLink',
			},
			{
				name: 'Part.MadeFromLink.GetRawMaterialLinks',
				value: 'Part.MadeFromLink.GetRawMaterialLinks',
				description: "Get RawMaterialLink - get /Parts('{PartId}')/MadeFromLink",
				action: 'Part.MadeFromLink.GetRawMaterialLinks',
			},
			{
				name: 'Part.Modifier.GetUser',
				value: 'Part.Modifier.GetUser',
				description: "Get User - get /Parts('{PartId}')/Modifier",
				action: 'Part.Modifier.GetUser',
			},
			{
				name: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				value: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
			},
			{
				name: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				value: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/ModuleVariantInformationLinks",
				action: 'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
			},
			{
				name: 'Part.Organization.GetOrganization',
				value: 'Part.Organization.GetOrganization',
				description: "Get Organization - get /Parts('{PartId}')/Organization",
				action: 'Part.Organization.GetOrganization',
			},
			{
				name: 'Part.PartDocAssociations.GetPartDocAssociation',
				value: 'Part.PartDocAssociations.GetPartDocAssociation',
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'Part.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'Part.PartDocAssociations.GetPartDocAssociations',
				value: 'Part.PartDocAssociations.GetPartDocAssociations',
				description: "Get PartDocAssociation - get /Parts('{PartId}')/PartDocAssociations",
				action: 'Part.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'Part.PartMadeFrom.GetPart',
				value: 'Part.PartMadeFrom.GetPart',
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
				action: 'Part.PartMadeFrom.GetPart',
			},
			{
				name: 'Part.PartMadeFrom.GetParts',
				value: 'Part.PartMadeFrom.GetParts',
				description: "Get Part - get /Parts('{PartId}')/PartMadeFrom",
				action: 'Part.PartMadeFrom.GetParts',
			},
			{
				name: 'Part.References.GetPartReferenceLink',
				value: 'Part.References.GetPartReferenceLink',
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
				action: 'Part.References.GetPartReferenceLink',
			},
			{
				name: 'Part.References.GetPartReferenceLinks',
				value: 'Part.References.GetPartReferenceLinks',
				description: "Get PartReferenceLink - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References",
				action: 'Part.References.GetPartReferenceLinks',
			},
			{
				name: 'Part.Representations.GetRepresentation',
				value: 'Part.Representations.GetRepresentation',
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
				action: 'Part.Representations.GetRepresentation',
			},
			{
				name: 'Part.Representations.GetRepresentations',
				value: 'Part.Representations.GetRepresentations',
				description: "Get Representation - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations",
				action: 'Part.Representations.GetRepresentations',
			},
			{
				name: 'Part.Revisions.GetPart',
				value: 'Part.Revisions.GetPart',
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
				action: 'Part.Revisions.GetPart',
			},
			{
				name: 'Part.Revisions.GetParts',
				value: 'Part.Revisions.GetParts',
				description: "Get Part - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions",
				action: 'Part.Revisions.GetParts',
			},
			{
				name: 'Part.Substitutes.GetPartSubstituteLink',
				value: 'Part.Substitutes.GetPartSubstituteLink',
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
				action: 'Part.Substitutes.GetPartSubstituteLink',
			},
			{
				name: 'Part.Substitutes.GetPartSubstituteLinks',
				value: 'Part.Substitutes.GetPartSubstituteLinks',
				description: "Get PartSubstituteLink - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes",
				action: 'Part.Substitutes.GetPartSubstituteLinks',
			},
			{
				name: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				value: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
			},
			{
				name: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLinks',
				value: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLinks',
				description: "Get EquivalenceLink - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks",
				action: 'Part.UpstreamEquivalanceLinks.GetEquivalenceLinks',
			},
			{
				name: 'Part.UsedBy.GetPart',
				value: 'Part.UsedBy.GetPart',
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
				action: 'Part.UsedBy.GetPart',
			},
			{
				name: 'Part.UsedBy.GetParts',
				value: 'Part.UsedBy.GetParts',
				description: "Get Part - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy",
				action: 'Part.UsedBy.GetParts',
			},
			{
				name: 'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				value: 'Part.Uses.DeletePTC.ProdMgmt.PartUse',
				description: "Delete an existing PartUse - delete /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: 'Part.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'Part.Uses.GetPartUse',
				value: 'Part.Uses.GetPartUse',
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: 'Part.Uses.GetPartUse',
			},
			{
				name: 'Part.Uses.GetPartUses',
				value: 'Part.Uses.GetPartUses',
				description: "Get PartUse - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				action: 'Part.Uses.GetPartUses',
			},
			{
				name: 'Part.Uses.PostPartUse',
				value: 'Part.Uses.PostPartUse',
				description: "Create PartUse - post /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses",
				action: 'Part.Uses.PostPartUse',
			},
			{
				name: 'Part.Uses.UpdatePartUse',
				value: 'Part.Uses.UpdatePartUse',
				description: "Update an existing PartUse - patch /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: 'Part.Uses.UpdatePartUse',
			},
			{
				name: 'Part.Versions.GetPart',
				value: 'Part.Versions.GetPart',
				description: "Get Part for a given VersionsId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Versions('{VersionsId}')",
				action: 'Part.Versions.GetPart',
			},
			{
				name: 'Part.Versions.GetParts',
				value: 'Part.Versions.GetParts',
				description: "Get Part - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Versions",
				action: 'Part.Versions.GetParts',
			},
			{
				name: 'PartAlternateLink.Alternate.GetReplacementPart',
				value: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/Alternate",
				description: "Get ReplacementPart - get /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/Alternate",
				action: 'PartAlternateLink.Alternate.GetReplacementPart',
			},
			{
				name: 'PartAlternateLink.AlternateFor.GetReplacementPart',
				value: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/AlternateFor",
				description: "Get ReplacementPart - get /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/AlternateFor",
				action: 'PartAlternateLink.AlternateFor.GetReplacementPart',
			},
			{
				name: 'PartAlternateLink.AlternatePart.GetPart',
				value: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/AlternatePart",
				description: "Get Part - get /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')/AlternatePart",
				action: 'PartAlternateLink.AlternatePart.GetPart',
			},
			{
				name: 'PartDescribeLink.DescribedBy.GetDocument',
				value: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')/DescribedBy",
				description: "Get Document - get /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')/DescribedBy",
				action: 'PartDescribeLink.DescribedBy.GetDocument',
			},
			{
				name: 'PartDescribeLink.Describes.GetPart',
				value: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')/Describes",
				description: "Get Part - get /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')/Describes",
				action: 'PartDescribeLink.Describes.GetPart',
			},
			{
				name: 'PartDocAssociation.RelatedCADDoc.GetCADDocument',
				value: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')/RelatedCADDoc",
				description: "Get CADDocument - get /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')/RelatedCADDoc",
				action: 'PartDocAssociation.RelatedCADDoc.GetCADDocument',
			},
			{
				name: 'PartDocAssociation.RelatedPart.GetPart',
				value: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')/RelatedPart",
				description: "Get Part - get /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')/RelatedPart",
				action: 'PartDocAssociation.RelatedPart.GetPart',
			},
			{
				name: 'PartReferenceLink.ReferencedBy.GetPart',
				value: "GET /Parts('{PartId}')/References('{PartReferenceLinkId}')/ReferencedBy",
				description: "Get Part - get /Parts('{PartId}')/References('{PartReferenceLinkId}')/ReferencedBy",
				action: 'PartReferenceLink.ReferencedBy.GetPart',
			},
			{
				name: 'PartReferenceLink.References.GetDocument',
				value: "GET /Parts('{PartId}')/References('{PartReferenceLinkId}')/References",
				description: "Get Document - get /Parts('{PartId}')/References('{PartReferenceLinkId}')/References",
				action: 'PartReferenceLink.References.GetDocument',
			},
			{
				name: 'PartSubstituteLink.Substitute.GetReplacementPart',
				value: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/Substitute",
				description: "Get ReplacementPart - get /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/Substitute",
				action: 'PartSubstituteLink.Substitute.GetReplacementPart',
			},
			{
				name: 'PartSubstituteLink.SubstituteFor.GetPartUse',
				value: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/SubstituteFor",
				description: "Get PartUse - get /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/SubstituteFor",
				action: 'PartSubstituteLink.SubstituteFor.GetPartUse',
			},
			{
				name: 'PartSubstituteLink.SubstitutePart.GetPart',
				value: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/SubstitutePart",
				description: "Get Part - get /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')/SubstitutePart",
				action: 'PartSubstituteLink.SubstitutePart.GetPart',
			},
			{
				name: 'PartUse.Occurrences.DeletePTC.ProdMgmt.UsageOccurrence',
				value: "DELETE /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				description: "Delete an existing UsageOccurrence - delete /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				action: 'PartUse.Occurrences.DeletePTC.ProdMgmt.UsageOccurrence',
			},
			{
				name: 'PartUse.Occurrences.GetUsageOccurrence',
				value: "GET /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				description: "Get UsageOccurrence for a given UsageOccurrenceId - get /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				action: 'PartUse.Occurrences.GetUsageOccurrence',
			},
			{
				name: 'PartUse.Occurrences.GetUsageOccurrences',
				value: "GET /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				description: "Get UsageOccurrence - get /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				action: 'PartUse.Occurrences.GetUsageOccurrences',
			},
			{
				name: 'PartUse.Occurrences.PostUsageOccurrence',
				value: "POST /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				description: "Create UsageOccurrence - post /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences",
				action: 'PartUse.Occurrences.PostUsageOccurrence',
			},
			{
				name: 'PartUse.Occurrences.UpdateUsageOccurrence',
				value: "PATCH /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				description: "Update an existing UsageOccurrence - patch /Parts('{PartId}')/Uses('{PartUseId}')/Occurrences('{UsageOccurrenceId}')",
				action: 'PartUse.Occurrences.UpdateUsageOccurrence',
			},
			{
				name: 'PartUse.UsedBy.GetPart',
				value: "GET /Parts('{PartId}')/Uses('{PartUseId}')/UsedBy",
				description: "Get Part - get /Parts('{PartId}')/Uses('{PartUseId}')/UsedBy",
				action: 'PartUse.UsedBy.GetPart',
			},
			{
				name: 'PartUse.Uses.GetPart',
				value: "GET /Parts('{PartId}')/Uses('{PartUseId}')/Uses",
				description: "Get Part - get /Parts('{PartId}')/Uses('{PartUseId}')/Uses",
				action: 'PartUse.Uses.GetPart',
			},
			{
				name: 'PostPart',
				value: 'POST /Parts',
				description: 'Create Part - post /Parts',
				action: 'PostPart',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.CheckIn",
				description: "Execute CheckIn - post /Parts('{PartId}')/PTC.ProdMgmt.CheckIn",
				action: 'PTC.ProdMgmt.Part.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_CheckOut_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.CheckOut",
				description: "Execute CheckOut - post /Parts('{PartId}')/PTC.ProdMgmt.CheckOut",
				action: 'PTC.ProdMgmt.Part.Action_CheckOut_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_CreateUses_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.CreateUses",
				description: "Creates multiple usage links with/without occurrences - post /Parts('{PartId}')/PTC.ProdMgmt.CreateUses",
				action: 'PTC.ProdMgmt.Part.Action_CreateUses_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_GetExtendedDatasWithInlineNavCriteria_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.GetExtendedDatasWithInlineNavCriteria",
				description: "Execute GetExtendedDatasWithInlineNavCriteria - post /Parts('{PartId}')/PTC.ProdMgmt.GetExtendedDatasWithInlineNavCriteria",
				action: 'PTC.ProdMgmt.Part.Action_GetExtendedDatasWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_GetMultiLevelComponentsReport_With_ShowSingleLevelReport',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.GetMultiLevelComponentsReport",
				description: "Returns same results as PartStructure's Reports for Multi-Level Components List and Single-Level Consolidated BOM, using Navigation criteria passed in navigationCriteria in the body. - post /Parts('{PartId}')/PTC.ProdMgmt.GetMultiLevelComponentsReport",
				action: 'PTC.ProdMgmt.Part.Action_GetMultiLevelComponentsReport_With_ShowSingleLevelReport',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_GetPartStructure_With_PathFilterWithSiblings',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.GetPartStructure",
				description: "Get Part Structure with Path Info, using the Navigation Criteria passed in the navigationCriteria parameter. - post /Parts('{PartId}')/PTC.ProdMgmt.GetPartStructure",
				action: 'PTC.ProdMgmt.Part.Action_GetPartStructure_With_PathFilterWithSiblings',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_ModifyEffectivities_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /Parts('{PartId}')/PTC.ProdMgmt.ModifyEffectivities",
				action: 'PTC.ProdMgmt.Part.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_RemoveEffectivities_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /Parts('{PartId}')/PTC.ProdMgmt.RemoveEffectivities",
				action: 'PTC.ProdMgmt.Part.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_Revise_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.Revise",
				description: "Execute Revise - post /Parts('{PartId}')/PTC.ProdMgmt.Revise",
				action: 'PTC.ProdMgmt.Part.Action_Revise_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_SetState_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.SetState",
				description: "Execute SetState - post /Parts('{PartId}')/PTC.ProdMgmt.SetState",
				action: 'PTC.ProdMgmt.Part.Action_SetState_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_UndoCheckOut',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Parts('{PartId}')/PTC.ProdMgmt.UndoCheckOut",
				action: 'PTC.ProdMgmt.Part.Action_UndoCheckOut',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_UpdateCommonProperties_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
				description: "Execute UpdateCommonProperties - post /Parts('{PartId}')/PTC.ProdMgmt.UpdateCommonProperties",
				action: 'PTC.ProdMgmt.Part.Action_UpdateCommonProperties_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_UploadStage1Action_With_DelegateName',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /Parts('{PartId}')/PTC.ProdMgmt.UploadStage1Action",
				action: 'PTC.ProdMgmt.Part.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ProdMgmt.Part.Action_UploadStage3Action_With',
				value: "POST /Parts('{PartId}')/PTC.ProdMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /Parts('{PartId}')/PTC.ProdMgmt.UploadStage3Action",
				action: 'PTC.ProdMgmt.Part.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetAllVariantSpecifications',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetAllVariantSpecifications()",
				description: "Execute GetAllVariantSpecifications - get /Parts('{PartId}')/PTC.ProdMgmt.GetAllVariantSpecifications()",
				action: 'PTC.ProdMgmt.Part.Function_GetAllVariantSpecifications',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetAssignedExpression',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetAssignedExpression()",
				description: "Execute GetAssignedExpression - get /Parts('{PartId}')/PTC.ProdMgmt.GetAssignedExpression()",
				action: 'PTC.ProdMgmt.Part.Function_GetAssignedExpression',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation()",
				description: "Execute GetDynamicStructureRepresentation - get /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation()",
				action: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation_With',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				description: "Execute GetDynamicStructureRepresentation - get /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				action: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentation_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				description: "Execute GetDynamicStructureRepresentationPVZ - get /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				action: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
				description: "Execute GetDynamicStructureRepresentationPVZ - get /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
				action: 'PTC.ProdMgmt.Part.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetLifeCycleTemplate',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Parts('{PartId}')/PTC.ProdMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ProdMgmt.Part.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_GetValidStateTransitions',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Parts('{PartId}')/PTC.ProdMgmt.GetValidStateTransitions()",
				action: 'PTC.ProdMgmt.Part.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ProdMgmt.Part.Function_IsCheckoutAllowed',
				value: "GET /Parts('{PartId}')/PTC.ProdMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Parts('{PartId}')/PTC.ProdMgmt.IsCheckoutAllowed()",
				action: 'PTC.ProdMgmt.Part.Function_IsCheckoutAllowed',
			},
			{
				name: 'RawMaterialLink.MadeFrom.GetPart',
				value: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')/MadeFrom",
				description: "Get Part - get /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')/MadeFrom",
				action: 'RawMaterialLink.MadeFrom.GetPart',
			},
			{
				name: 'RawMaterialLink.Makes.GetPart',
				value: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')/Makes",
				description: "Get Part - get /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')/Makes",
				action: 'RawMaterialLink.Makes.GetPart',
			},
			{
				name: 'UpdatePart',
				value: "PATCH /Parts('{PartId}')",
				description: "Update an existing Part - patch /Parts('{PartId}')",
				action: 'UpdatePart',
			},
			{
				name: 'User.Groups.GetGroup',
				value: 'User.Groups.GetGroup',
				description: "Get Group for a given GroupId - get /Parts('{PartId}')/Creator/Groups('{GroupId}')",
				action: 'User.Groups.GetGroup',
			},
			{
				name: 'User.Groups.GetGroups',
				value: 'User.Groups.GetGroups',
				description: "Get Group - get /Parts('{PartId}')/Creator/Groups",
				action: 'User.Groups.GetGroups',
			},
			{
				name: 'User.LicenseGroups.GetLicenseGroup',
				value: 'User.LicenseGroups.GetLicenseGroup',
				description: "Get LicenseGroup for a given LicenseGroupId - get /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				action: 'User.LicenseGroups.GetLicenseGroup',
			},
			{
				name: 'User.LicenseGroups.GetLicenseGroups',
				value: 'User.LicenseGroups.GetLicenseGroups',
				description: "Get LicenseGroup - get /Parts('{PartId}')/Creator/LicenseGroups",
				action: 'User.LicenseGroups.GetLicenseGroups',
			},
		],
	},
	...ActionCheckInParts.description,
	...ActionCheckOutParts.description,
	...ActionCreateAssociations.description,
	...ActionCreateParts.description,
	...ActionDeleteAssociations.description,
	...ActionDeleteParts.description,
	...ActionEditPartsSecurityLabels.description,
	...ActionReviseParts.description,
	...ActionSetStateParts.description,
	...ActionUndoCheckOutParts.description,
	...ActionUpdateParts.description,
	...ContainerCreatorGetUser.description,
	...ContainerFoldersDeletePtcDataAdminFolder.description,
	...ContainerFoldersGetFolder.description,
	...ContainerFoldersGetFolders.description,
	...ContainerFoldersPostFolder.description,
	...ContainerFoldersUpdateFolder.description,
	...ContainerOrganizationGetOrganization.description,
	...ContentItemCreatorGetUserRef.description,
	...ContentItemModifierGetUserRef.description,
	...DeletePart.description,
	...EffectivityEffectivityContextGetPartEffectivityContext.description,
	...EquivalenceLinkDownstreamGetWindchillEntity.description,
	...EquivalenceLinkDownstreamGetWindchillEntitys.description,
	...EquivalenceLinkUpstreamGetWindchillEntity.description,
	...EquivalenceLinkUpstreamGetWindchillEntitys.description,
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
	...FolderContentsGetFolderContent.description,
	...FolderContentsGetFolderContents.description,
	...FolderFolderContentsGetWindchillEntity.description,
	...FolderFolderContentsGetWindchillEntitys.description,
	...FolderFoldersDeletePtcDataAdminFolder.description,
	...FolderFoldersGetFolder.description,
	...FolderFoldersGetFolders.description,
	...FolderFoldersPostFolder.description,
	...FolderFoldersUpdateFolder.description,
	...GetElectricalParts.description,
	...GetOnshapeParts.description,
	...GetPart.description,
	...GetParts.description,
	...ModuleVariantInformationLinkLinkedFromGetPart.description,
	...ModuleVariantInformationLinkLinkedToGetVariantSpecification.description,
	...OptionSetContextGetContainer.description,
	...OptionSetCreatorGetUser.description,
	...OptionSetModifierGetUser.description,
	...OptionSetOptionsGetOption.description,
	...OptionSetOptionsGetOptions.description,
	...OptionSetRevisionsGetOptionSet.description,
	...OptionSetRevisionsGetOptionSets.description,
	...OptionSetVersionsGetOptionSet.description,
	...OptionSetVersionsGetOptionSets.description,
	...OrganizationUsersGetUser.description,
	...OrganizationUsersGetUsers.description,
	...PartAlternatesGetPartAlternateLink.description,
	...PartAlternatesGetPartAlternateLinks.description,
	...PartAssignedOptionSetGetOptionSet.description,
	...PartAttachmentsDeletePtcContentItem.description,
	...PartAttachmentsGetContentItem.description,
	...PartAttachmentsGetContentItems.description,
	...PartAttachmentsPostContentItem.description,
	...PartAttachmentsUpdateContentItem.description,
	...PartContextGetContainer.description,
	...PartCreatorGetUser.description,
	...PartDescribedByGetPartDescribeLink.description,
	...PartDescribedByGetPartDescribeLinks.description,
	...PartDownstreamEquivalanceLinksGetEquivalenceLink.description,
	...PartDownstreamEquivalanceLinksGetEquivalenceLinks.description,
	...PartEffectivitiesGetEffectivity.description,
	...PartEffectivitiesGetEffectivitys.description,
	...PartExtendedDataGetExtendedData.description,
	...PartExtendedDataGetExtendedDatas.description,
	...PartFolderGetFolder.description,
	...PartMadeFromLinkGetRawMaterialLink.description,
	...PartMadeFromLinkGetRawMaterialLinks.description,
	...PartModifierGetUser.description,
	...PartModuleVariantInformationLinksGetModuleVariantInformationLink.description,
	...PartModuleVariantInformationLinksGetModuleVariantInformationLinks.description,
	...PartOrganizationGetOrganization.description,
	...PartPartDocAssociationsGetPartDocAssociation.description,
	...PartPartDocAssociationsGetPartDocAssociations.description,
	...PartPartMadeFromGetPart.description,
	...PartPartMadeFromGetParts.description,
	...PartReferencesGetPartReferenceLink.description,
	...PartReferencesGetPartReferenceLinks.description,
	...PartRepresentationsGetRepresentation.description,
	...PartRepresentationsGetRepresentations.description,
	...PartRevisionsGetPart.description,
	...PartRevisionsGetParts.description,
	...PartSubstitutesGetPartSubstituteLink.description,
	...PartSubstitutesGetPartSubstituteLinks.description,
	...PartUpstreamEquivalanceLinksGetEquivalenceLink.description,
	...PartUpstreamEquivalanceLinksGetEquivalenceLinks.description,
	...PartUsedByGetPart.description,
	...PartUsedByGetParts.description,
	...PartUsesDeletePtcProdMgmtPartUse.description,
	...PartUsesGetPartUse.description,
	...PartUsesGetPartUses.description,
	...PartUsesPostPartUse.description,
	...PartUsesUpdatePartUse.description,
	...PartVersionsGetPart.description,
	...PartVersionsGetParts.description,
	...PartAlternateLinkAlternateGetReplacementPart.description,
	...PartAlternateLinkAlternateForGetReplacementPart.description,
	...PartAlternateLinkAlternatePartGetPart.description,
	...PartDescribeLinkDescribedByGetDocument.description,
	...PartDescribeLinkDescribesGetPart.description,
	...PartDocAssociationRelatedCadDocGetCadDocument.description,
	...PartDocAssociationRelatedPartGetPart.description,
	...PartReferenceLinkReferencedByGetPart.description,
	...PartReferenceLinkReferencesGetDocument.description,
	...PartSubstituteLinkSubstituteGetReplacementPart.description,
	...PartSubstituteLinkSubstituteForGetPartUse.description,
	...PartSubstituteLinkSubstitutePartGetPart.description,
	...PartUseOccurrencesDeletePtcProdMgmtUsageOccurrence.description,
	...PartUseOccurrencesGetUsageOccurrence.description,
	...PartUseOccurrencesGetUsageOccurrences.description,
	...PartUseOccurrencesPostUsageOccurrence.description,
	...PartUseOccurrencesUpdateUsageOccurrence.description,
	...PartUseUsedByGetPart.description,
	...PartUseUsesGetPart.description,
	...PostPart.description,
	...PtcProdMgmtPartActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcProdMgmtPartActionCheckOutWith.description,
	...PtcProdMgmtPartActionCreateUsesWith.description,
	...PtcProdMgmtPartActionGetExtendedDatasWithInlineNavCriteriaWith.description,
	...PtcProdMgmtPartActionGetMultiLevelComponentsReportWithShowSingleLevelReport.description,
	...PtcProdMgmtPartActionGetPartStructureWithPathFilterWithSiblings.description,
	...PtcProdMgmtPartActionModifyEffectivitiesWith.description,
	...PtcProdMgmtPartActionRemoveEffectivitiesWith.description,
	...PtcProdMgmtPartActionReviseWith.description,
	...PtcProdMgmtPartActionSetStateWith.description,
	...PtcProdMgmtPartActionUndoCheckOut.description,
	...PtcProdMgmtPartActionUpdateCommonPropertiesWith.description,
	...PtcProdMgmtPartActionUploadStage1ActionWithDelegateName.description,
	...PtcProdMgmtPartActionUploadStage3ActionWith.description,
	...PtcProdMgmtPartFunctionGetAllVariantSpecifications.description,
	...PtcProdMgmtPartFunctionGetAssignedExpression.description,
	...PtcProdMgmtPartFunctionGetDynamicStructureRepresentation.description,
	...PtcProdMgmtPartFunctionGetDynamicStructureRepresentationWith.description,
	...PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWith.description,
	...PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations.description,
	...PtcProdMgmtPartFunctionGetLifeCycleTemplate.description,
	...PtcProdMgmtPartFunctionGetValidStateTransitions.description,
	...PtcProdMgmtPartFunctionIsCheckoutAllowed.description,
	...RawMaterialLinkMadeFromGetPart.description,
	...RawMaterialLinkMakesGetPart.description,
	...UpdatePart.description,
	...UserGroupsGetGroup.description,
	...UserGroupsGetGroups.description,
	...UserLicenseGroupsGetLicenseGroup.description,
	...UserLicenseGroupsGetLicenseGroups.description,
];
