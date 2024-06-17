import * as ActionChangeOperationIdentity from './Action_ChangeOperationIdentity';
import * as ActionChangeProcessMaterialIdentity from './Action_ChangeProcessMaterialIdentity';
import * as ActionChangeProcessPlanIdentity from './Action_ChangeProcessPlanIdentity';
import * as ActionChangeSequenceIdentity from './Action_ChangeSequenceIdentity';
import * as ActionChangeSkillIdentity from './Action_ChangeSkillIdentity';
import * as ActionChangeToolingIdentity from './Action_ChangeToolingIdentity';
import * as ActionCheckInMaterials from './Action_CheckInMaterials';
import * as ActionCheckInOperations from './Action_CheckInOperations';
import * as ActionCheckInProcessMaterials from './Action_CheckInProcessMaterials';
import * as ActionCheckInProcessPlans from './Action_CheckInProcessPlans';
import * as ActionCheckInSequences from './Action_CheckInSequences';
import * as ActionCheckInSkills from './Action_CheckInSkills';
import * as ActionCheckInStandardCCs from './Action_CheckInStandardCCs';
import * as ActionCheckInToolings from './Action_CheckInToolings';
import * as ActionCheckInWorkCenters from './Action_CheckInWorkCenters';
import * as ActionCheckOutMaterials from './Action_CheckOutMaterials';
import * as ActionCheckOutOperations from './Action_CheckOutOperations';
import * as ActionCheckOutProcessMaterials from './Action_CheckOutProcessMaterials';
import * as ActionCheckOutProcessPlans from './Action_CheckOutProcessPlans';
import * as ActionCheckOutSequences from './Action_CheckOutSequences';
import * as ActionCheckOutSkills from './Action_CheckOutSkills';
import * as ActionCheckOutStandardCCs from './Action_CheckOutStandardCCs';
import * as ActionCheckOutToolings from './Action_CheckOutToolings';
import * as ActionCheckOutWorkCenters from './Action_CheckOutWorkCenters';
import * as ActionCreateAssociativeToSccLinks from './Action_CreateAssociativeToSCCLinks';
import * as ActionCreateMpmStandardCcUsageToDdLinks from './Action_CreateMPMStandardCCUsageToDDLinks';
import * as ActionCreateMpmStdCcUsageToProcessPlanLink from './Action_CreateMPMStdCCUsageToProcessPlanLink';
import * as ActionCreateOperations from './Action_CreateOperations';
import * as ActionCreatePartTags from './Action_CreatePartTags';
import * as ActionCreateProcessMaterials from './Action_CreateProcessMaterials';
import * as ActionCreateProcessPlans from './Action_CreateProcessPlans';
import * as ActionCreateResourcesAssociations from './Action_CreateResourcesAssociations';
import * as ActionCreateSequences from './Action_CreateSequences';
import * as ActionCreateSkills from './Action_CreateSkills';
import * as ActionCreateStandardCCs from './Action_CreateStandardCCs';
import * as ActionCreateStandardCcUsageToResourceLink from './Action_CreateStandardCCUsageToResourceLink';
import * as ActionCreateToolings from './Action_CreateToolings';
import * as ActionCreateWorkCenters from './Action_CreateWorkCenters';
import * as ActionDeleteAssociativeToSccLinks from './Action_DeleteAssociativeToSCCLinks';
import * as ActionDeleteMpmCompatibilityLinks from './Action_DeleteMPMCompatibilityLinks';
import * as ActionDeleteMpmStandardCcUsageToDdLinks from './Action_DeleteMPMStandardCCUsageToDDLinks';
import * as ActionDeleteMpmStdCcUsageToProcessPlanLinks from './Action_DeleteMPMStdCCUsageToProcessPlanLinks';
import * as ActionDeleteMpmStdCcUsageToResourceLinks from './Action_DeleteMPMStdCCUsageToResourceLinks';
import * as ActionDeleteOperations from './Action_DeleteOperations';
import * as ActionDeletePartTags from './Action_DeletePartTags';
import * as ActionDeleteProcessMaterials from './Action_DeleteProcessMaterials';
import * as ActionDeleteProcessPlans from './Action_DeleteProcessPlans';
import * as ActionDeleteResourcesAssociations from './Action_DeleteResourcesAssociations';
import * as ActionDeleteSkills from './Action_DeleteSkills';
import * as ActionDeleteStandardCCs from './Action_DeleteStandardCCs';
import * as ActionDeleteToolings from './Action_DeleteToolings';
import * as ActionDeleteWorkCenters from './Action_DeleteWorkCenters';
import * as ActionEditOperationsSecurityLabels from './Action_EditOperationsSecurityLabels';
import * as ActionEditProcessMaterialsSecurityLabels from './Action_EditProcessMaterialsSecurityLabels';
import * as ActionEditProcessPlansSecurityLabels from './Action_EditProcessPlansSecurityLabels';
import * as ActionEditSequencesSecurityLabels from './Action_EditSequencesSecurityLabels';
import * as ActionEditSkillsSecurityLabels from './Action_EditSkillsSecurityLabels';
import * as ActionEditStandardCCsSecurityLabels from './Action_EditStandardCCsSecurityLabels';
import * as ActionEditToolingsSecurityLabels from './Action_EditToolingsSecurityLabels';
import * as ActionEditWorkCentersSecurityLabels from './Action_EditWorkCentersSecurityLabels';
import * as ActionGetUnallocatedScCs from './Action_GetUnallocatedSCCs';
import * as ActionReviseMaterials from './Action_ReviseMaterials';
import * as ActionReviseOperations from './Action_ReviseOperations';
import * as ActionReviseProcessMaterials from './Action_ReviseProcessMaterials';
import * as ActionReviseProcessPlans from './Action_ReviseProcessPlans';
import * as ActionReviseSequences from './Action_ReviseSequences';
import * as ActionReviseSkills from './Action_ReviseSkills';
import * as ActionReviseStandardCCs from './Action_ReviseStandardCCs';
import * as ActionReviseStandardProcedures from './Action_ReviseStandardProcedures';
import * as ActionReviseToolings from './Action_ReviseToolings';
import * as ActionReviseWorkCenters from './Action_ReviseWorkCenters';
import * as ActionSetStateMaterials from './Action_SetStateMaterials';
import * as ActionSetStateOperations from './Action_SetStateOperations';
import * as ActionSetStateProcessMaterials from './Action_SetStateProcessMaterials';
import * as ActionSetStateProcessPlans from './Action_SetStateProcessPlans';
import * as ActionSetStateSequences from './Action_SetStateSequences';
import * as ActionSetStateSkills from './Action_SetStateSkills';
import * as ActionSetStateStandardCCs from './Action_SetStateStandardCCs';
import * as ActionSetStateStandardProcedures from './Action_SetStateStandardProcedures';
import * as ActionSetStateToolings from './Action_SetStateToolings';
import * as ActionSetStateWorkCenters from './Action_SetStateWorkCenters';
import * as ActionUndoCheckOutMaterials from './Action_UndoCheckOutMaterials';
import * as ActionUndoCheckOutOperations from './Action_UndoCheckOutOperations';
import * as ActionUndoCheckOutProcessMaterials from './Action_UndoCheckOutProcessMaterials';
import * as ActionUndoCheckOutProcessPlans from './Action_UndoCheckOutProcessPlans';
import * as ActionUndoCheckOutSequences from './Action_UndoCheckOutSequences';
import * as ActionUndoCheckOutSkills from './Action_UndoCheckOutSkills';
import * as ActionUndoCheckOutStandardCCs from './Action_UndoCheckOutStandardCCs';
import * as ActionUndoCheckOutToolings from './Action_UndoCheckOutToolings';
import * as ActionUndoCheckOutWorkCenters from './Action_UndoCheckOutWorkCenters';
import * as ActionUpdateAssociativeToSccLinks from './Action_UpdateAssociativeToSCCLinks';
import * as ActionUpdateMpmStdCcUsageToProcessPlanLink from './Action_UpdateMPMStdCCUsageToProcessPlanLink';
import * as ActionUpdateMpmStdCcUsageToResourceLinks from './Action_UpdateMPMStdCCUsageToResourceLinks';
import * as ActionUpdateOperations from './Action_UpdateOperations';
import * as ActionUpdateProcessMaterials from './Action_UpdateProcessMaterials';
import * as ActionUpdateProcessPlans from './Action_UpdateProcessPlans';
import * as ActionUpdateSequences from './Action_UpdateSequences';
import * as ActionUpdateSkills from './Action_UpdateSkills';
import * as ActionUpdateStandardCCs from './Action_UpdateStandardCCs';
import * as ActionUpdateToolings from './Action_UpdateToolings';
import * as ActionUpdateWorkCenters from './Action_UpdateWorkCenters';
import * as DeleteOperation from './DeleteOperation';
import * as DeleteProcessMaterial from './DeleteProcessMaterial';
import * as DeleteProcessPlan from './DeleteProcessPlan';
import * as DeleteSkill from './DeleteSkill';
import * as DeleteStandardCc from './DeleteStandardCC';
import * as DeleteTooling from './DeleteTooling';
import * as DeleteWorkCenter from './DeleteWorkCenter';
import * as DocumentManageableCreatorGetUser from './DocumentManageable.Creator.GetUser';
import * as DocumentManageableDocumentDescribeLinksGetDocumentDescribeLink from './DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as DocumentManageableDocumentDescribeLinksGetDocumentDescribeLinks from './DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as DocumentManageableDocumentReferenceLinksGetDocumentReferenceLink from './DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as DocumentManageableDocumentReferenceLinksGetDocumentReferenceLinks from './DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as DocumentManageableModifierGetUser from './DocumentManageable.Modifier.GetUser';
import * as EpmDocumentManageableCreatorGetUser from './EPMDocumentManageable.Creator.GetUser';
import * as EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLink from './EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLink';
import * as EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLinks from './EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLinks';
import * as EpmDocumentManageableModifierGetUser from './EPMDocumentManageable.Modifier.GetUser';
import * as GetConsumableResources from './GetConsumableResources';
import * as GetDocumentManageable from './GetDocumentManageable';
import * as GetDocumentManageables from './GetDocumentManageables';
import * as GetEpmDocumentManageable from './GetEPMDocumentManageable';
import * as GetEpmDocumentManageables from './GetEPMDocumentManageables';
import * as GetMaterial from './GetMaterial';
import * as GetMaterials from './GetMaterials';
import * as GetMpmStandardOperations from './GetMPMStandardOperations';
import * as GetOperation from './GetOperation';
import * as GetOperationHolder from './GetOperationHolder';
import * as GetOperationHolders from './GetOperationHolders';
import * as GetOperations from './GetOperations';
import * as GetProcessMaterial from './GetProcessMaterial';
import * as GetProcessMaterials from './GetProcessMaterials';
import * as GetProcessPlan from './GetProcessPlan';
import * as GetProcessPlans from './GetProcessPlans';
import * as GetResource from './GetResource';
import * as GetResources from './GetResources';
import * as GetSequence from './GetSequence';
import * as GetSequenceHolder from './GetSequenceHolder';
import * as GetSequenceHolders from './GetSequenceHolders';
import * as GetSequences from './GetSequences';
import * as GetSkill from './GetSkill';
import * as GetSkills from './GetSkills';
import * as GetStandardCc from './GetStandardCC';
import * as GetStandardCCs from './GetStandardCCs';
import * as GetStandardProcedure from './GetStandardProcedure';
import * as GetStandardProcedures from './GetStandardProcedures';
import * as GetTooling from './GetTooling';
import * as GetToolings from './GetToolings';
import * as GetWorkCenter from './GetWorkCenter';
import * as GetWorkCenters from './GetWorkCenters';
import * as MaterialAssociativeToSccLinksGetAssociativeToStandardCcLink from './Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLink';
import * as MaterialAssociativeToSccLinksGetAssociativeToStandardCcLinks from './Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLinks';
import * as MaterialContextGetContainer from './Material.Context.GetContainer';
import * as MaterialCreatorGetUser from './Material.Creator.GetUser';
import * as MaterialFolderGetFolder from './Material.Folder.GetFolder';
import * as MaterialModifierGetUser from './Material.Modifier.GetUser';
import * as MaterialOrganizationGetOrganization from './Material.Organization.GetOrganization';
import * as MaterialPartToProcessPlanLinksGetPartToProcessPlanLink from './Material.PartToProcessPlanLinks.GetPartToProcessPlanLink';
import * as MaterialPartToProcessPlanLinksGetPartToProcessPlanLinks from './Material.PartToProcessPlanLinks.GetPartToProcessPlanLinks';
import * as MaterialRepresentationsGetRepresentation from './Material.Representations.GetRepresentation';
import * as MaterialRepresentationsGetRepresentations from './Material.Representations.GetRepresentations';
import * as MaterialRevisionsGetMaterial from './Material.Revisions.GetMaterial';
import * as MaterialRevisionsGetMaterials from './Material.Revisions.GetMaterials';
import * as MaterialVersionsGetMaterial from './Material.Versions.GetMaterial';
import * as MaterialVersionsGetMaterials from './Material.Versions.GetMaterials';
import * as OperationAssignedOptionSetGetOptionSet from './Operation.AssignedOptionSet.GetOptionSet';
import * as OperationContextGetContainer from './Operation.Context.GetContainer';
import * as OperationCreatorGetUser from './Operation.Creator.GetUser';
import * as OperationDocumentDescribeLinksGetDocumentDescribeLink from './Operation.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as OperationDocumentDescribeLinksGetDocumentDescribeLinks from './Operation.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as OperationDocumentReferenceLinksGetDocumentReferenceLink from './Operation.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as OperationDocumentReferenceLinksGetDocumentReferenceLinks from './Operation.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as OperationEffectivitiesGetEffectivity from './Operation.Effectivities.GetEffectivity';
import * as OperationEffectivitiesGetEffectivitys from './Operation.Effectivities.GetEffectivitys';
import * as OperationFolderGetFolder from './Operation.Folder.GetFolder';
import * as OperationModifierGetUser from './Operation.Modifier.GetUser';
import * as OperationOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink from './Operation.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink';
import * as OperationOperationHolderUsageLinkGetOperationHolderUsageLink from './Operation.OperationHolderUsageLink.GetOperationHolderUsageLink';
import * as OperationOperationHolderUsageLinkGetOperationHolderUsageLinks from './Operation.OperationHolderUsageLink.GetOperationHolderUsageLinks';
import * as OperationOperationToConsumableLinksDeletePtcMfgProcMgmtOperationToConsumableLink from './Operation.OperationToConsumableLinks.DeletePTC.MfgProcMgmt.OperationToConsumableLink';
import * as OperationOperationToConsumableLinksGetOperationToConsumableLink from './Operation.OperationToConsumableLinks.GetOperationToConsumableLink';
import * as OperationOperationToConsumableLinksGetOperationToConsumableLinks from './Operation.OperationToConsumableLinks.GetOperationToConsumableLinks';
import * as OperationOperationToConsumableLinksPostOperationToConsumableLink from './Operation.OperationToConsumableLinks.PostOperationToConsumableLink';
import * as OperationOperationToConsumableLinksUpdateOperationToConsumableLink from './Operation.OperationToConsumableLinks.UpdateOperationToConsumableLink';
import * as OperationOperationToOperatedPartLinkGetOperationToOperatedPartLink from './Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLink';
import * as OperationOperationToOperatedPartLinkGetOperationToOperatedPartLinks from './Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLinks';
import * as OperationOperationToPartLinkGetOperationToPartLink from './Operation.OperationToPartLink.GetOperationToPartLink';
import * as OperationOperationToPartLinkGetOperationToPartLinks from './Operation.OperationToPartLink.GetOperationToPartLinks';
import * as OperationOperationToPartLinkUpdateOperationToPartLink from './Operation.OperationToPartLink.UpdateOperationToPartLink';
import * as OperationOperationToWorkCenterLinksDeletePtcMfgProcMgmtOperationToWorkCenterLink from './Operation.OperationToWorkCenterLinks.DeletePTC.MfgProcMgmt.OperationToWorkCenterLink';
import * as OperationOperationToWorkCenterLinksGetOperationToWorkCenterLink from './Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLink';
import * as OperationOperationToWorkCenterLinksGetOperationToWorkCenterLinks from './Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLinks';
import * as OperationOperationToWorkCenterLinksUpdateOperationToWorkCenterLink from './Operation.OperationToWorkCenterLinks.UpdateOperationToWorkCenterLink';
import * as OperationOperationUsageLinksGetOperationUsageLink from './Operation.OperationUsageLinks.GetOperationUsageLink';
import * as OperationOperationUsageLinksGetOperationUsageLinks from './Operation.OperationUsageLinks.GetOperationUsageLinks';
import * as OperationOrganizationGetOrganization from './Operation.Organization.GetOrganization';
import * as OperationRepresentationsGetRepresentation from './Operation.Representations.GetRepresentation';
import * as OperationRepresentationsGetRepresentations from './Operation.Representations.GetRepresentations';
import * as OperationResultedByObjectsGetChangeItem from './Operation.ResultedByObjects.GetChangeItem';
import * as OperationResultedByObjectsGetChangeItems from './Operation.ResultedByObjects.GetChangeItems';
import * as OperationRevisionsGetOperation from './Operation.Revisions.GetOperation';
import * as OperationRevisionsGetOperations from './Operation.Revisions.GetOperations';
import * as OperationStandardCcLinksGetOperationToStandardCcLink from './Operation.StandardCCLinks.GetOperationToStandardCCLink';
import * as OperationStandardCcLinksGetOperationToStandardCcLinks from './Operation.StandardCCLinks.GetOperationToStandardCCLinks';
import * as OperationStandardProcedureLinkGetStandardProcedureLink from './Operation.StandardProcedureLink.GetStandardProcedureLink';
import * as OperationStandardProcedureLinkGetStandardProcedureLinks from './Operation.StandardProcedureLink.GetStandardProcedureLinks';
import * as OperationStandardProcedureLinkPostStandardProcedureLink from './Operation.StandardProcedureLink.PostStandardProcedureLink';
import * as OperationVersionsGetOperation from './Operation.Versions.GetOperation';
import * as OperationVersionsGetOperations from './Operation.Versions.GetOperations';
import * as OperationHolderCreatorGetUser from './OperationHolder.Creator.GetUser';
import * as OperationHolderDocumentDescribeLinksGetDocumentDescribeLink from './OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as OperationHolderDocumentDescribeLinksGetDocumentDescribeLinks from './OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as OperationHolderDocumentReferenceLinksGetDocumentReferenceLink from './OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as OperationHolderDocumentReferenceLinksGetDocumentReferenceLinks from './OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as OperationHolderModifierGetUser from './OperationHolder.Modifier.GetUser';
import * as OperationHolderOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink from './OperationHolder.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink';
import * as OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLink from './OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLink';
import * as OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLinks from './OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLinks';
import * as OperationHolderOperationUsageLinksGetOperationUsageLink from './OperationHolder.OperationUsageLinks.GetOperationUsageLink';
import * as OperationHolderOperationUsageLinksGetOperationUsageLinks from './OperationHolder.OperationUsageLinks.GetOperationUsageLinks';
import * as PostOperation from './PostOperation';
import * as PostProcessMaterial from './PostProcessMaterial';
import * as PostProcessPlan from './PostProcessPlan';
import * as PostSequence from './PostSequence';
import * as PostSkill from './PostSkill';
import * as PostStandardCc from './PostStandardCC';
import * as PostTooling from './PostTooling';
import * as PostWorkCenter from './PostWorkCenter';
import * as ProcessMaterialAssignedOptionSetGetOptionSet from './ProcessMaterial.AssignedOptionSet.GetOptionSet';
import * as ProcessMaterialContextGetContainer from './ProcessMaterial.Context.GetContainer';
import * as ProcessMaterialCreatorGetUser from './ProcessMaterial.Creator.GetUser';
import * as ProcessMaterialDescribedByGetResourceDescribeLink from './ProcessMaterial.DescribedBy.GetResourceDescribeLink';
import * as ProcessMaterialDescribedByGetResourceDescribeLinks from './ProcessMaterial.DescribedBy.GetResourceDescribeLinks';
import * as ProcessMaterialEffectivitiesGetEffectivity from './ProcessMaterial.Effectivities.GetEffectivity';
import * as ProcessMaterialEffectivitiesGetEffectivitys from './ProcessMaterial.Effectivities.GetEffectivitys';
import * as ProcessMaterialFolderGetFolder from './ProcessMaterial.Folder.GetFolder';
import * as ProcessMaterialModifierGetUser from './ProcessMaterial.Modifier.GetUser';
import * as ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLink from './ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLink';
import * as ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLinks from './ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLinks';
import * as ProcessMaterialMpmCompatibilityLinksPostMpmCompatibilityLink from './ProcessMaterial.MPMCompatibilityLinks.PostMPMCompatibilityLink';
import * as ProcessMaterialOrganizationGetOrganization from './ProcessMaterial.Organization.GetOrganization';
import * as ProcessMaterialPartDocAssociationsGetPartDocAssociation from './ProcessMaterial.PartDocAssociations.GetPartDocAssociation';
import * as ProcessMaterialPartDocAssociationsGetPartDocAssociations from './ProcessMaterial.PartDocAssociations.GetPartDocAssociations';
import * as ProcessMaterialReferencesGetResourceReferenceLink from './ProcessMaterial.References.GetResourceReferenceLink';
import * as ProcessMaterialReferencesGetResourceReferenceLinks from './ProcessMaterial.References.GetResourceReferenceLinks';
import * as ProcessMaterialResultedByObjectsGetChangeItem from './ProcessMaterial.ResultedByObjects.GetChangeItem';
import * as ProcessMaterialResultedByObjectsGetChangeItems from './ProcessMaterial.ResultedByObjects.GetChangeItems';
import * as ProcessMaterialRevisionsGetProcessMaterial from './ProcessMaterial.Revisions.GetProcessMaterial';
import * as ProcessMaterialRevisionsGetProcessMaterials from './ProcessMaterial.Revisions.GetProcessMaterials';
import * as ProcessMaterialUsesDeletePtcProdMgmtPartUse from './ProcessMaterial.Uses.DeletePTC.ProdMgmt.PartUse';
import * as ProcessMaterialUsesGetPartUse from './ProcessMaterial.Uses.GetPartUse';
import * as ProcessMaterialUsesGetPartUses from './ProcessMaterial.Uses.GetPartUses';
import * as ProcessMaterialUsesPostPartUse from './ProcessMaterial.Uses.PostPartUse';
import * as ProcessMaterialUsesUpdatePartUse from './ProcessMaterial.Uses.UpdatePartUse';
import * as ProcessMaterialVersionsGetProcessMaterial from './ProcessMaterial.Versions.GetProcessMaterial';
import * as ProcessMaterialVersionsGetProcessMaterials from './ProcessMaterial.Versions.GetProcessMaterials';
import * as ProcessPlanAssignedOptionSetGetOptionSet from './ProcessPlan.AssignedOptionSet.GetOptionSet';
import * as ProcessPlanContextGetContainer from './ProcessPlan.Context.GetContainer';
import * as ProcessPlanCreatorGetUser from './ProcessPlan.Creator.GetUser';
import * as ProcessPlanDocumentDescribeLinksGetDocumentDescribeLink from './ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as ProcessPlanDocumentDescribeLinksGetDocumentDescribeLinks from './ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as ProcessPlanDocumentReferenceLinksGetDocumentReferenceLink from './ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as ProcessPlanDocumentReferenceLinksGetDocumentReferenceLinks from './ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as ProcessPlanEffectivitiesGetEffectivity from './ProcessPlan.Effectivities.GetEffectivity';
import * as ProcessPlanEffectivitiesGetEffectivitys from './ProcessPlan.Effectivities.GetEffectivitys';
import * as ProcessPlanFolderGetFolder from './ProcessPlan.Folder.GetFolder';
import * as ProcessPlanModifierGetUser from './ProcessPlan.Modifier.GetUser';
import * as ProcessPlanOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink from './ProcessPlan.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink';
import * as ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLink from './ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLink';
import * as ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLinks from './ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLinks';
import * as ProcessPlanOperationUsageLinksGetOperationUsageLink from './ProcessPlan.OperationUsageLinks.GetOperationUsageLink';
import * as ProcessPlanOperationUsageLinksGetOperationUsageLinks from './ProcessPlan.OperationUsageLinks.GetOperationUsageLinks';
import * as ProcessPlanOrganizationGetOrganization from './ProcessPlan.Organization.GetOrganization';
import * as ProcessPlanResultedByObjectsGetChangeItem from './ProcessPlan.ResultedByObjects.GetChangeItem';
import * as ProcessPlanResultedByObjectsGetChangeItems from './ProcessPlan.ResultedByObjects.GetChangeItems';
import * as ProcessPlanRevisionsGetProcessPlan from './ProcessPlan.Revisions.GetProcessPlan';
import * as ProcessPlanRevisionsGetProcessPlans from './ProcessPlan.Revisions.GetProcessPlans';
import * as ProcessPlanStandardProcedureLinkGetStandardProcedureLink from './ProcessPlan.StandardProcedureLink.GetStandardProcedureLink';
import * as ProcessPlanStandardProcedureLinkGetStandardProcedureLinks from './ProcessPlan.StandardProcedureLink.GetStandardProcedureLinks';
import * as ProcessPlanStandardProcedureLinkPostStandardProcedureLink from './ProcessPlan.StandardProcedureLink.PostStandardProcedureLink';
import * as ProcessPlanVersionsGetProcessPlan from './ProcessPlan.Versions.GetProcessPlan';
import * as ProcessPlanVersionsGetProcessPlans from './ProcessPlan.Versions.GetProcessPlans';
import * as PtcMfgProcMgmtDocumentManageableActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.DocumentManageable.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtDocumentManageableActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.DocumentManageable.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtDocumentManageableActionGetDocumentsWith from './PTC.MfgProcMgmt.DocumentManageable.Action_GetDocuments_With';
import * as PtcMfgProcMgmtDocumentManageableActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.DocumentManageable.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtDocumentManageableFunctionDownloadUrls from './PTC.MfgProcMgmt.DocumentManageable.Function_DownloadUrls';
import * as PtcMfgProcMgmtEpmDocumentManageableActionCreateMpmepmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.EPMDocumentManageable.Action_CreateMPMEPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtEpmDocumentManageableActionDeleteMpmepmDocumentDescribeLinksWithChangeOid from './PTC.MfgProcMgmt.EPMDocumentManageable.Action_DeleteMPMEPMDocumentDescribeLinks_With_ChangeOID';
import * as PtcMfgProcMgmtEpmDocumentManageableActionGetMpmepmDocumentDescribesWith from './PTC.MfgProcMgmt.EPMDocumentManageable.Action_GetMPMEPMDocumentDescribes_With';
import * as PtcMfgProcMgmtMaterialActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.Material.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtMaterialActionCheckOutWith from './PTC.MfgProcMgmt.Material.Action_CheckOut_With';
import * as PtcMfgProcMgmtMaterialActionCreateMpmPartToProcessPlanLinksWith from './PTC.MfgProcMgmt.Material.Action_CreateMPMPartToProcessPlanLinks_With';
import * as PtcMfgProcMgmtMaterialActionDeleteMpmPartToProcessPlanLinksWithChangeOid from './PTC.MfgProcMgmt.Material.Action_DeleteMPMPartToProcessPlanLinks_With_ChangeOID';
import * as PtcMfgProcMgmtMaterialActionReviseWith from './PTC.MfgProcMgmt.Material.Action_Revise_With';
import * as PtcMfgProcMgmtMaterialActionSetStateWith from './PTC.MfgProcMgmt.Material.Action_SetState_With';
import * as PtcMfgProcMgmtMaterialActionUndoCheckOut from './PTC.MfgProcMgmt.Material.Action_UndoCheckOut';
import * as PtcMfgProcMgmtMaterialActionUpdateMpmPartToProcessPlanLinksWith from './PTC.MfgProcMgmt.Material.Action_UpdateMPMPartToProcessPlanLinks_With';
import * as PtcMfgProcMgmtMaterialFunctionAllProcessPlans from './PTC.MfgProcMgmt.Material.Function_allProcessPlans';
import * as PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentation from './PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation';
import * as PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationWith from './PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation_With';
import * as PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWith from './PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With';
import * as PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations from './PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations';
import * as PtcMfgProcMgmtMaterialFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.Material.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtMaterialFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.Material.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtMaterialFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.Material.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtMaterialFunctionLatestProcessPlans from './PTC.MfgProcMgmt.Material.Function_latestProcessPlans';
import * as PtcMfgProcMgmtOperationActionAssignCcFromProductWith from './PTC.MfgProcMgmt.Operation.Action_AssignCCFromProduct_With';
import * as PtcMfgProcMgmtOperationActionAssociateConsumableResourcesWith from './PTC.MfgProcMgmt.Operation.Action_AssociateConsumableResources_With';
import * as PtcMfgProcMgmtOperationActionAssociateStandardOperationsWith from './PTC.MfgProcMgmt.Operation.Action_AssociateStandardOperations_With';
import * as PtcMfgProcMgmtOperationActionAssociateWorkCenterWithDoCopyOverDefaultCostAndTime from './PTC.MfgProcMgmt.Operation.Action_AssociateWorkCenter_With_doCopyOverDefaultCostAndTime';
import * as PtcMfgProcMgmtOperationActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.Operation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtOperationActionCheckOutWith from './PTC.MfgProcMgmt.Operation.Action_CheckOut_With';
import * as PtcMfgProcMgmtOperationActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtOperationActionCreateMpmDocumentReferenceLinksWith from './PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentReferenceLinks_With';
import * as PtcMfgProcMgmtOperationActionCreateMpmOperationToPartLinksWithOperationPathProcessPlanIdRelatedAssemblyIdProcessPlanNavigationCriteriaIdRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Action_CreateMPMOperationToPartLinks_With_operationPath_processPlanId_relatedAssemblyId_processPlanNavigationCriteriaId_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationActionCreateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.Operation.Action_CreateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtOperationActionCreateOperationToOperatedPartLinkWith from './PTC.MfgProcMgmt.Operation.Action_CreateOperationToOperatedPartLink_With';
import * as PtcMfgProcMgmtOperationActionCreateOperationToStandardCcLinkWith from './PTC.MfgProcMgmt.Operation.Action_CreateOperationToStandardCCLink_With';
import * as PtcMfgProcMgmtOperationActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.Operation.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtOperationActionDeleteMpmOperationToPartLinksWithChangeOid from './PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToPartLinks_With_ChangeOID';
import * as PtcMfgProcMgmtOperationActionDeleteMpmOperationToStandardCcLinksWithChangeOid from './PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToStandardCCLinks_With_ChangeOID';
import * as PtcMfgProcMgmtOperationActionDeleteOperationToConsumableLinkWithChangeOid from './PTC.MfgProcMgmt.Operation.Action_DeleteOperationToConsumableLink_With_ChangeOID';
import * as PtcMfgProcMgmtOperationActionDeleteOperationToOperatedPartLinksWithChangeOid from './PTC.MfgProcMgmt.Operation.Action_DeleteOperationToOperatedPartLinks_With_ChangeOID';
import * as PtcMfgProcMgmtOperationActionGetBopWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria from './PTC.MfgProcMgmt.Operation.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria';
import * as PtcMfgProcMgmtOperationActionGetConsumedWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Action_GetConsumed_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationActionGetConsumedWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria from './PTC.MfgProcMgmt.Operation.Action_GetConsumedWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria';
import * as PtcMfgProcMgmtOperationActionGetDocumentsWith from './PTC.MfgProcMgmt.Operation.Action_GetDocuments_With';
import * as PtcMfgProcMgmtOperationActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.Operation.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtOperationActionInsertNewOperationsWith from './PTC.MfgProcMgmt.Operation.Action_InsertNewOperations_With';
import * as PtcMfgProcMgmtOperationActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.Operation.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtOperationActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.Operation.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtOperationActionReviseWith from './PTC.MfgProcMgmt.Operation.Action_Revise_With';
import * as PtcMfgProcMgmtOperationActionSetStateWith from './PTC.MfgProcMgmt.Operation.Action_SetState_With';
import * as PtcMfgProcMgmtOperationActionUndoCheckOut from './PTC.MfgProcMgmt.Operation.Action_UndoCheckOut';
import * as PtcMfgProcMgmtOperationActionUpdateConsumableLinksWith from './PTC.MfgProcMgmt.Operation.Action_UpdateConsumableLinks_With';
import * as PtcMfgProcMgmtOperationActionUpdateMpmOperationUsageLinksWith from './PTC.MfgProcMgmt.Operation.Action_UpdateMPMOperationUsageLinks_With';
import * as PtcMfgProcMgmtOperationActionUpdateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.Operation.Action_UpdateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtOperationActionUpdateOperationToOperatedPartLinkWith from './PTC.MfgProcMgmt.Operation.Action_UpdateOperationToOperatedPartLink_With';
import * as PtcMfgProcMgmtOperationActionUpdateOperationToPartLinkWith from './PTC.MfgProcMgmt.Operation.Action_UpdateOperationToPartLink_With';
import * as PtcMfgProcMgmtOperationActionUpdateOperationToStandardCcLinkWith from './PTC.MfgProcMgmt.Operation.Action_UpdateOperationToStandardCCLink_With';
import * as PtcMfgProcMgmtOperationFunctionAllocatedWorkCenterWith from './PTC.MfgProcMgmt.Operation.Function_AllocatedWorkCenter_With';
import * as PtcMfgProcMgmtOperationFunctionConsumedPartsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_ConsumedParts_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionConsumedProcessMaterialsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_ConsumedProcessMaterials_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionConsumedResourcesWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_ConsumedResources_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionConsumedSkillsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_ConsumedSkills_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionConsumedToolingsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_ConsumedToolings_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionDownloadUrls from './PTC.MfgProcMgmt.Operation.Function_DownloadUrls';
import * as PtcMfgProcMgmtOperationFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.Operation.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtOperationFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.Operation.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtOperationFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.Operation.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtOperationFunctionOperatedOnPartsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_OperatedOnParts_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionOperationsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_Operations_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Operation.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtOperationHolderActionAssociateStandardOperationsWith from './PTC.MfgProcMgmt.OperationHolder.Action_AssociateStandardOperations_With';
import * as PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentReferenceLinksWith from './PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentReferenceLinks_With';
import * as PtcMfgProcMgmtOperationHolderActionCreateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtOperationHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.OperationHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtOperationHolderActionGetDocumentsWith from './PTC.MfgProcMgmt.OperationHolder.Action_GetDocuments_With';
import * as PtcMfgProcMgmtOperationHolderActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.OperationHolder.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtOperationHolderActionUpdateMpmOperationUsageLinksWith from './PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMOperationUsageLinks_With';
import * as PtcMfgProcMgmtOperationHolderActionUpdateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtOperationHolderFunctionDownloadUrls from './PTC.MfgProcMgmt.OperationHolder.Function_DownloadUrls';
import * as PtcMfgProcMgmtProcessMaterialActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.ProcessMaterial.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtProcessMaterialActionCheckOutWith from './PTC.MfgProcMgmt.ProcessMaterial.Action_CheckOut_With';
import * as PtcMfgProcMgmtProcessMaterialActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.ProcessMaterial.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtProcessMaterialActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.ProcessMaterial.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtProcessMaterialActionReviseWith from './PTC.MfgProcMgmt.ProcessMaterial.Action_Revise_With';
import * as PtcMfgProcMgmtProcessMaterialActionSetStateWith from './PTC.MfgProcMgmt.ProcessMaterial.Action_SetState_With';
import * as PtcMfgProcMgmtProcessMaterialActionUndoCheckOut from './PTC.MfgProcMgmt.ProcessMaterial.Action_UndoCheckOut';
import * as PtcMfgProcMgmtProcessMaterialFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.ProcessMaterial.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtProcessMaterialFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.ProcessMaterial.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtProcessMaterialFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.ProcessMaterial.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtProcessPlanActionAssociateStandardOperationsWith from './PTC.MfgProcMgmt.ProcessPlan.Action_AssociateStandardOperations_With';
import * as PtcMfgProcMgmtProcessPlanActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.ProcessPlan.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtProcessPlanActionCheckOutWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CheckOut_With';
import * as PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentReferenceLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentReferenceLinks_With';
import * as PtcMfgProcMgmtProcessPlanActionCreateMpmPartToProcessPlanLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMPartToProcessPlanLinks_With';
import * as PtcMfgProcMgmtProcessPlanActionCreateMpmSequencesInProcessPlanContextWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMSequencesInProcessPlanContext_With';
import * as PtcMfgProcMgmtProcessPlanActionCreateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtProcessPlanActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.ProcessPlan.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtProcessPlanActionGetBopWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.ProcessPlan.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtProcessPlanActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria from './PTC.MfgProcMgmt.ProcessPlan.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria';
import * as PtcMfgProcMgmtProcessPlanActionGetDocumentsWith from './PTC.MfgProcMgmt.ProcessPlan.Action_GetDocuments_With';
import * as PtcMfgProcMgmtProcessPlanActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.ProcessPlan.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtProcessPlanActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.ProcessPlan.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtProcessPlanActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.ProcessPlan.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtProcessPlanActionReviseWith from './PTC.MfgProcMgmt.ProcessPlan.Action_Revise_With';
import * as PtcMfgProcMgmtProcessPlanActionSetStateWith from './PTC.MfgProcMgmt.ProcessPlan.Action_SetState_With';
import * as PtcMfgProcMgmtProcessPlanActionUndoCheckOut from './PTC.MfgProcMgmt.ProcessPlan.Action_UndoCheckOut';
import * as PtcMfgProcMgmtProcessPlanActionUpdateMpmOperationUsageLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMOperationUsageLinks_With';
import * as PtcMfgProcMgmtProcessPlanActionUpdateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtProcessPlanFunctionDownloadUrls from './PTC.MfgProcMgmt.ProcessPlan.Function_DownloadUrls';
import * as PtcMfgProcMgmtProcessPlanFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.ProcessPlan.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtProcessPlanFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.ProcessPlan.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtProcessPlanFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.ProcessPlan.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtProcessPlanFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.ProcessPlan.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtProcessPlanFunctionOperationsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.ProcessPlan.Function_Operations_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtProcessPlanFunctionSequencesWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.ProcessPlan.Function_Sequences_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtProcessPlanFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.ProcessPlan.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtResourceActionCreateMpmCompatibilityLinksWith from './PTC.MfgProcMgmt.Resource.Action_CreateMPMCompatibilityLinks_With';
import * as PtcMfgProcMgmtResourceActionCreateResourceDescribeDocumentLinksWith from './PTC.MfgProcMgmt.Resource.Action_CreateResourceDescribeDocumentLinks_With';
import * as PtcMfgProcMgmtResourceActionCreateResourceReferenceDocumentLinksWith from './PTC.MfgProcMgmt.Resource.Action_CreateResourceReferenceDocumentLinks_With';
import * as PtcMfgProcMgmtResourceActionCreateUsesWithResourceUses from './PTC.MfgProcMgmt.Resource.Action_CreateUses_With_ResourceUses';
import * as PtcMfgProcMgmtResourceActionDeleteResourceDescribeLinksWithChangeOid from './PTC.MfgProcMgmt.Resource.Action_DeleteResourceDescribeLinks_With_ChangeOID';
import * as PtcMfgProcMgmtResourceActionDeleteResourceReferenceLinksWithChangeOid from './PTC.MfgProcMgmt.Resource.Action_DeleteResourceReferenceLinks_With_ChangeOID';
import * as PtcMfgProcMgmtResourceActionGetPartStructureWith from './PTC.MfgProcMgmt.Resource.Action_GetPartStructure_With';
import * as PtcMfgProcMgmtSequenceActionAssociateStandardOperationsWith from './PTC.MfgProcMgmt.Sequence.Action_AssociateStandardOperations_With';
import * as PtcMfgProcMgmtSequenceActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.Sequence.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtSequenceActionCheckOutWith from './PTC.MfgProcMgmt.Sequence.Action_CheckOut_With';
import * as PtcMfgProcMgmtSequenceActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtSequenceActionCreateMpmDocumentReferenceLinksWith from './PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentReferenceLinks_With';
import * as PtcMfgProcMgmtSequenceActionCreateMpmSequencesInSequenceContextWith from './PTC.MfgProcMgmt.Sequence.Action_CreateMPMSequencesInSequenceContext_With';
import * as PtcMfgProcMgmtSequenceActionCreateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.Sequence.Action_CreateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtSequenceActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.Sequence.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtSequenceActionGetBopWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Sequence.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtSequenceActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria from './PTC.MfgProcMgmt.Sequence.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria';
import * as PtcMfgProcMgmtSequenceActionGetDocumentsWith from './PTC.MfgProcMgmt.Sequence.Action_GetDocuments_With';
import * as PtcMfgProcMgmtSequenceActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.Sequence.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtSequenceActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.Sequence.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtSequenceActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.Sequence.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtSequenceActionReviseWith from './PTC.MfgProcMgmt.Sequence.Action_Revise_With';
import * as PtcMfgProcMgmtSequenceActionSetStateWith from './PTC.MfgProcMgmt.Sequence.Action_SetState_With';
import * as PtcMfgProcMgmtSequenceActionUndoCheckOut from './PTC.MfgProcMgmt.Sequence.Action_UndoCheckOut';
import * as PtcMfgProcMgmtSequenceActionUpdateMpmOperationUsageLinksWith from './PTC.MfgProcMgmt.Sequence.Action_UpdateMPMOperationUsageLinks_With';
import * as PtcMfgProcMgmtSequenceActionUpdateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.Sequence.Action_UpdateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtSequenceFunctionDownloadUrls from './PTC.MfgProcMgmt.Sequence.Function_DownloadUrls';
import * as PtcMfgProcMgmtSequenceFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.Sequence.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtSequenceFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.Sequence.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtSequenceFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.Sequence.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtSequenceFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Sequence.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtSequenceFunctionOperationsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Sequence.Function_Operations_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtSequenceFunctionSequencesWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Sequence.Function_Sequences_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtSequenceFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.Sequence.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtSequenceHolderActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.SequenceHolder.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtSequenceHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.SequenceHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtSequenceHolderActionGetDocumentsWith from './PTC.MfgProcMgmt.SequenceHolder.Action_GetDocuments_With';
import * as PtcMfgProcMgmtSequenceHolderActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.SequenceHolder.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtSequenceHolderActionUpdateSequenceUsageLinkWith from './PTC.MfgProcMgmt.SequenceHolder.Action_UpdateSequenceUsageLink_With';
import * as PtcMfgProcMgmtSequenceHolderFunctionDownloadUrls from './PTC.MfgProcMgmt.SequenceHolder.Function_DownloadUrls';
import * as PtcMfgProcMgmtSkillActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.Skill.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtSkillActionCheckOutWith from './PTC.MfgProcMgmt.Skill.Action_CheckOut_With';
import * as PtcMfgProcMgmtSkillActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.Skill.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtSkillActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.Skill.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtSkillActionReviseWith from './PTC.MfgProcMgmt.Skill.Action_Revise_With';
import * as PtcMfgProcMgmtSkillActionSetStateWith from './PTC.MfgProcMgmt.Skill.Action_SetState_With';
import * as PtcMfgProcMgmtSkillActionUndoCheckOut from './PTC.MfgProcMgmt.Skill.Action_UndoCheckOut';
import * as PtcMfgProcMgmtSkillFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.Skill.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtSkillFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.Skill.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtSkillFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.Skill.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtStandardCcActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.StandardCC.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtStandardCcActionCheckOutWith from './PTC.MfgProcMgmt.StandardCC.Action_CheckOut_With';
import * as PtcMfgProcMgmtStandardCcActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.StandardCC.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToProcessPlanLinksWith from './PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToProcessPlanLinks_With';
import * as PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToResourceLinksWith from './PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToResourceLinks_With';
import * as PtcMfgProcMgmtStandardCcActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToProcessPlanLinksWith from './PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToProcessPlanLinks_With';
import * as PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToResourceLinksWithChangeOid from './PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToResourceLinks_With_ChangeOID';
import * as PtcMfgProcMgmtStandardCcActionGetDocumentsWith from './PTC.MfgProcMgmt.StandardCC.Action_GetDocuments_With';
import * as PtcMfgProcMgmtStandardCcActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.StandardCC.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtStandardCcActionReviseWith from './PTC.MfgProcMgmt.StandardCC.Action_Revise_With';
import * as PtcMfgProcMgmtStandardCcActionSetStateWith from './PTC.MfgProcMgmt.StandardCC.Action_SetState_With';
import * as PtcMfgProcMgmtStandardCcActionUndoCheckOut from './PTC.MfgProcMgmt.StandardCC.Action_UndoCheckOut';
import * as PtcMfgProcMgmtStandardCcActionUpdateMpmStandardCcToProcessPlanLinksWith from './PTC.MfgProcMgmt.StandardCC.Action_UpdateMPMStandardCCToProcessPlanLinks_With';
import * as PtcMfgProcMgmtStandardCcFunctionDownloadUrls from './PTC.MfgProcMgmt.StandardCC.Function_DownloadUrls';
import * as PtcMfgProcMgmtStandardCcFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.StandardCC.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtStandardCcFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.StandardCC.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtStandardCcFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.StandardCC.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtStandardProcedureActionAssociateStandardOperationsWith from './PTC.MfgProcMgmt.StandardProcedure.Action_AssociateStandardOperations_With';
import * as PtcMfgProcMgmtStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtStandardProcedureActionCheckOutWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CheckOut_With';
import * as PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentDescribeLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentDescribeLinks_With';
import * as PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentReferenceLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentReferenceLinks_With';
import * as PtcMfgProcMgmtStandardProcedureActionCreateMpmPartToProcessPlanLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMPartToProcessPlanLinks_With';
import * as PtcMfgProcMgmtStandardProcedureActionCreateMpmSequencesInProcessPlanContextWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMSequencesInProcessPlanContext_With';
import * as PtcMfgProcMgmtStandardProcedureActionCreateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtStandardProcedureActionDeleteMpmDocumentDescribeLinkWithChangeOid from './PTC.MfgProcMgmt.StandardProcedure.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID';
import * as PtcMfgProcMgmtStandardProcedureActionGetBopWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.StandardProcedure.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtStandardProcedureActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria from './PTC.MfgProcMgmt.StandardProcedure.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria';
import * as PtcMfgProcMgmtStandardProcedureActionGetDocumentsWith from './PTC.MfgProcMgmt.StandardProcedure.Action_GetDocuments_With';
import * as PtcMfgProcMgmtStandardProcedureActionGetDocumentsWithInlineNavCriteriaWith from './PTC.MfgProcMgmt.StandardProcedure.Action_GetDocumentsWithInlineNavCriteria_With';
import * as PtcMfgProcMgmtStandardProcedureActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.StandardProcedure.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtStandardProcedureActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.StandardProcedure.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtStandardProcedureActionReviseWith from './PTC.MfgProcMgmt.StandardProcedure.Action_Revise_With';
import * as PtcMfgProcMgmtStandardProcedureActionSetStateWith from './PTC.MfgProcMgmt.StandardProcedure.Action_SetState_With';
import * as PtcMfgProcMgmtStandardProcedureActionUndoCheckOut from './PTC.MfgProcMgmt.StandardProcedure.Action_UndoCheckOut';
import * as PtcMfgProcMgmtStandardProcedureActionUpdateMpmOperationUsageLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMOperationUsageLinks_With';
import * as PtcMfgProcMgmtStandardProcedureActionUpdateMpmStandardProcedureLinksWith from './PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMStandardProcedureLinks_With';
import * as PtcMfgProcMgmtStandardProcedureFunctionDownloadUrls from './PTC.MfgProcMgmt.StandardProcedure.Function_DownloadUrls';
import * as PtcMfgProcMgmtStandardProcedureFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.StandardProcedure.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtStandardProcedureFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.StandardProcedure.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtStandardProcedureFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.StandardProcedure.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtStandardProcedureFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.StandardProcedure.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtStandardProcedureFunctionOperationsWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.StandardProcedure.Function_Operations_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtStandardProcedureFunctionSequencesWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.StandardProcedure.Function_Sequences_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtStandardProcedureFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId from './PTC.MfgProcMgmt.StandardProcedure.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId';
import * as PtcMfgProcMgmtToolingActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.Tooling.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtToolingActionCheckOutWith from './PTC.MfgProcMgmt.Tooling.Action_CheckOut_With';
import * as PtcMfgProcMgmtToolingActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.Tooling.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtToolingActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.Tooling.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtToolingActionReviseWith from './PTC.MfgProcMgmt.Tooling.Action_Revise_With';
import * as PtcMfgProcMgmtToolingActionSetStateWith from './PTC.MfgProcMgmt.Tooling.Action_SetState_With';
import * as PtcMfgProcMgmtToolingActionUndoCheckOut from './PTC.MfgProcMgmt.Tooling.Action_UndoCheckOut';
import * as PtcMfgProcMgmtToolingFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.Tooling.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtToolingFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.Tooling.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtToolingFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.Tooling.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtWorkCenterActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.MfgProcMgmt.WorkCenter.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcMfgProcMgmtWorkCenterActionCheckOutWith from './PTC.MfgProcMgmt.WorkCenter.Action_CheckOut_With';
import * as PtcMfgProcMgmtWorkCenterActionCreateMpmCompatibilityLinksWith from './PTC.MfgProcMgmt.WorkCenter.Action_CreateMPMCompatibilityLinks_With';
import * as PtcMfgProcMgmtWorkCenterActionCreateResourceDescribeDocumentLinksWith from './PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceDescribeDocumentLinks_With';
import * as PtcMfgProcMgmtWorkCenterActionCreateResourceReferenceDocumentLinksWith from './PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceReferenceDocumentLinks_With';
import * as PtcMfgProcMgmtWorkCenterActionCreateUsesWithResourceUses from './PTC.MfgProcMgmt.WorkCenter.Action_CreateUses_With_ResourceUses';
import * as PtcMfgProcMgmtWorkCenterActionDeleteResourceDescribeLinksWithChangeOid from './PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceDescribeLinks_With_ChangeOID';
import * as PtcMfgProcMgmtWorkCenterActionDeleteResourceReferenceLinksWithChangeOid from './PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceReferenceLinks_With_ChangeOID';
import * as PtcMfgProcMgmtWorkCenterActionGetPartStructureWith from './PTC.MfgProcMgmt.WorkCenter.Action_GetPartStructure_With';
import * as PtcMfgProcMgmtWorkCenterActionModifyEffectivitiesWith from './PTC.MfgProcMgmt.WorkCenter.Action_ModifyEffectivities_With';
import * as PtcMfgProcMgmtWorkCenterActionRemoveEffectivitiesWith from './PTC.MfgProcMgmt.WorkCenter.Action_RemoveEffectivities_With';
import * as PtcMfgProcMgmtWorkCenterActionReviseWith from './PTC.MfgProcMgmt.WorkCenter.Action_Revise_With';
import * as PtcMfgProcMgmtWorkCenterActionSetStateWith from './PTC.MfgProcMgmt.WorkCenter.Action_SetState_With';
import * as PtcMfgProcMgmtWorkCenterActionUndoCheckOut from './PTC.MfgProcMgmt.WorkCenter.Action_UndoCheckOut';
import * as PtcMfgProcMgmtWorkCenterFunctionGetLifeCycleTemplate from './PTC.MfgProcMgmt.WorkCenter.Function_GetLifeCycleTemplate';
import * as PtcMfgProcMgmtWorkCenterFunctionGetValidStateTransitions from './PTC.MfgProcMgmt.WorkCenter.Function_GetValidStateTransitions';
import * as PtcMfgProcMgmtWorkCenterFunctionIsCheckoutAllowed from './PTC.MfgProcMgmt.WorkCenter.Function_IsCheckoutAllowed';
import * as PtcMfgProcMgmtWorkCenterFunctionLocalizedOperationsWithProcessPlanId from './PTC.MfgProcMgmt.WorkCenter.Function_LocalizedOperations_With_processPlanId';
import * as ResourceCreatorGetUser from './Resource.Creator.GetUser';
import * as ResourceDescribedByGetResourceDescribeLink from './Resource.DescribedBy.GetResourceDescribeLink';
import * as ResourceDescribedByGetResourceDescribeLinks from './Resource.DescribedBy.GetResourceDescribeLinks';
import * as ResourceModifierGetUser from './Resource.Modifier.GetUser';
import * as ResourceMpmCompatibilityLinksGetMpmCompatibilityLink from './Resource.MPMCompatibilityLinks.GetMPMCompatibilityLink';
import * as ResourceMpmCompatibilityLinksGetMpmCompatibilityLinks from './Resource.MPMCompatibilityLinks.GetMPMCompatibilityLinks';
import * as ResourceMpmCompatibilityLinksPostMpmCompatibilityLink from './Resource.MPMCompatibilityLinks.PostMPMCompatibilityLink';
import * as ResourcePartDocAssociationsGetPartDocAssociation from './Resource.PartDocAssociations.GetPartDocAssociation';
import * as ResourcePartDocAssociationsGetPartDocAssociations from './Resource.PartDocAssociations.GetPartDocAssociations';
import * as ResourceReferencesGetResourceReferenceLink from './Resource.References.GetResourceReferenceLink';
import * as ResourceReferencesGetResourceReferenceLinks from './Resource.References.GetResourceReferenceLinks';
import * as ResourceUsesDeletePtcProdMgmtPartUse from './Resource.Uses.DeletePTC.ProdMgmt.PartUse';
import * as ResourceUsesGetPartUse from './Resource.Uses.GetPartUse';
import * as ResourceUsesGetPartUses from './Resource.Uses.GetPartUses';
import * as ResourceUsesPostPartUse from './Resource.Uses.PostPartUse';
import * as ResourceUsesUpdatePartUse from './Resource.Uses.UpdatePartUse';
import * as SequenceAssignedOptionSetGetOptionSet from './Sequence.AssignedOptionSet.GetOptionSet';
import * as SequenceContextGetContainer from './Sequence.Context.GetContainer';
import * as SequenceCreatorGetUser from './Sequence.Creator.GetUser';
import * as SequenceDocumentDescribeLinksGetDocumentDescribeLink from './Sequence.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as SequenceDocumentDescribeLinksGetDocumentDescribeLinks from './Sequence.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as SequenceDocumentReferenceLinksGetDocumentReferenceLink from './Sequence.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as SequenceDocumentReferenceLinksGetDocumentReferenceLinks from './Sequence.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as SequenceEffectivitiesGetEffectivity from './Sequence.Effectivities.GetEffectivity';
import * as SequenceEffectivitiesGetEffectivitys from './Sequence.Effectivities.GetEffectivitys';
import * as SequenceModifierGetUser from './Sequence.Modifier.GetUser';
import * as SequenceOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink from './Sequence.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink';
import * as SequenceOperationHolderUsageLinkGetOperationHolderUsageLink from './Sequence.OperationHolderUsageLink.GetOperationHolderUsageLink';
import * as SequenceOperationHolderUsageLinkGetOperationHolderUsageLinks from './Sequence.OperationHolderUsageLink.GetOperationHolderUsageLinks';
import * as SequenceOperationUsageLinksGetOperationUsageLink from './Sequence.OperationUsageLinks.GetOperationUsageLink';
import * as SequenceOperationUsageLinksGetOperationUsageLinks from './Sequence.OperationUsageLinks.GetOperationUsageLinks';
import * as SequenceResultedByObjectsGetChangeItem from './Sequence.ResultedByObjects.GetChangeItem';
import * as SequenceResultedByObjectsGetChangeItems from './Sequence.ResultedByObjects.GetChangeItems';
import * as SequenceRevisionsGetSequence from './Sequence.Revisions.GetSequence';
import * as SequenceRevisionsGetSequences from './Sequence.Revisions.GetSequences';
import * as SequenceStandardProcedureLinkGetStandardProcedureLink from './Sequence.StandardProcedureLink.GetStandardProcedureLink';
import * as SequenceStandardProcedureLinkGetStandardProcedureLinks from './Sequence.StandardProcedureLink.GetStandardProcedureLinks';
import * as SequenceStandardProcedureLinkPostStandardProcedureLink from './Sequence.StandardProcedureLink.PostStandardProcedureLink';
import * as SequenceVersionsGetSequence from './Sequence.Versions.GetSequence';
import * as SequenceVersionsGetSequences from './Sequence.Versions.GetSequences';
import * as SequenceHolderCreatorGetUser from './SequenceHolder.Creator.GetUser';
import * as SequenceHolderDocumentDescribeLinksGetDocumentDescribeLink from './SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as SequenceHolderDocumentDescribeLinksGetDocumentDescribeLinks from './SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as SequenceHolderDocumentReferenceLinksGetDocumentReferenceLink from './SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as SequenceHolderDocumentReferenceLinksGetDocumentReferenceLinks from './SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as SequenceHolderModifierGetUser from './SequenceHolder.Modifier.GetUser';
import * as SequenceHolderSequenceUsageLinkGetSequenceUsageLink from './SequenceHolder.SequenceUsageLink.GetSequenceUsageLink';
import * as SequenceHolderSequenceUsageLinkGetSequenceUsageLinks from './SequenceHolder.SequenceUsageLink.GetSequenceUsageLinks';
import * as SkillAssignedOptionSetGetOptionSet from './Skill.AssignedOptionSet.GetOptionSet';
import * as SkillContextGetContainer from './Skill.Context.GetContainer';
import * as SkillCreatorGetUser from './Skill.Creator.GetUser';
import * as SkillDescribedByGetResourceDescribeLink from './Skill.DescribedBy.GetResourceDescribeLink';
import * as SkillDescribedByGetResourceDescribeLinks from './Skill.DescribedBy.GetResourceDescribeLinks';
import * as SkillEffectivitiesGetEffectivity from './Skill.Effectivities.GetEffectivity';
import * as SkillEffectivitiesGetEffectivitys from './Skill.Effectivities.GetEffectivitys';
import * as SkillFolderGetFolder from './Skill.Folder.GetFolder';
import * as SkillModifierGetUser from './Skill.Modifier.GetUser';
import * as SkillMpmCompatibilityLinksGetMpmCompatibilityLink from './Skill.MPMCompatibilityLinks.GetMPMCompatibilityLink';
import * as SkillMpmCompatibilityLinksGetMpmCompatibilityLinks from './Skill.MPMCompatibilityLinks.GetMPMCompatibilityLinks';
import * as SkillMpmCompatibilityLinksPostMpmCompatibilityLink from './Skill.MPMCompatibilityLinks.PostMPMCompatibilityLink';
import * as SkillOrganizationGetOrganization from './Skill.Organization.GetOrganization';
import * as SkillPartDocAssociationsGetPartDocAssociation from './Skill.PartDocAssociations.GetPartDocAssociation';
import * as SkillPartDocAssociationsGetPartDocAssociations from './Skill.PartDocAssociations.GetPartDocAssociations';
import * as SkillReferencesGetResourceReferenceLink from './Skill.References.GetResourceReferenceLink';
import * as SkillReferencesGetResourceReferenceLinks from './Skill.References.GetResourceReferenceLinks';
import * as SkillResultedByObjectsGetChangeItem from './Skill.ResultedByObjects.GetChangeItem';
import * as SkillResultedByObjectsGetChangeItems from './Skill.ResultedByObjects.GetChangeItems';
import * as SkillRevisionsGetSkill from './Skill.Revisions.GetSkill';
import * as SkillRevisionsGetSkills from './Skill.Revisions.GetSkills';
import * as SkillUsesDeletePtcProdMgmtPartUse from './Skill.Uses.DeletePTC.ProdMgmt.PartUse';
import * as SkillUsesGetPartUse from './Skill.Uses.GetPartUse';
import * as SkillUsesGetPartUses from './Skill.Uses.GetPartUses';
import * as SkillUsesPostPartUse from './Skill.Uses.PostPartUse';
import * as SkillUsesUpdatePartUse from './Skill.Uses.UpdatePartUse';
import * as SkillVersionsGetSkill from './Skill.Versions.GetSkill';
import * as SkillVersionsGetSkills from './Skill.Versions.GetSkills';
import * as StandardCcContextGetContainer from './StandardCC.Context.GetContainer';
import * as StandardCcCreatorGetUser from './StandardCC.Creator.GetUser';
import * as StandardCcDocumentDescribeLinksGetDocumentDescribeLink from './StandardCC.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as StandardCcDocumentDescribeLinksGetDocumentDescribeLinks from './StandardCC.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as StandardCcDocumentReferenceLinksGetDocumentReferenceLink from './StandardCC.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as StandardCcDocumentReferenceLinksGetDocumentReferenceLinks from './StandardCC.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as StandardCcFolderGetFolder from './StandardCC.Folder.GetFolder';
import * as StandardCcModifierGetUser from './StandardCC.Modifier.GetUser';
import * as StandardCcOrganizationGetOrganization from './StandardCC.Organization.GetOrganization';
import * as StandardCcResultedByObjectsGetChangeItem from './StandardCC.ResultedByObjects.GetChangeItem';
import * as StandardCcResultedByObjectsGetChangeItems from './StandardCC.ResultedByObjects.GetChangeItems';
import * as StandardCcRevisionsGetStandardCc from './StandardCC.Revisions.GetStandardCC';
import * as StandardCcRevisionsGetStandardCCs from './StandardCC.Revisions.GetStandardCCs';
import * as StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLink from './StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLink';
import * as StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLinks from './StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLinks';
import * as StandardCcStandardCcToResourceLinksGetStandardCcToResourceLink from './StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLink';
import * as StandardCcStandardCcToResourceLinksGetStandardCcToResourceLinks from './StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLinks';
import * as StandardCcVersionsGetStandardCc from './StandardCC.Versions.GetStandardCC';
import * as StandardCcVersionsGetStandardCCs from './StandardCC.Versions.GetStandardCCs';
import * as StandardProcedureAssignedOptionSetGetOptionSet from './StandardProcedure.AssignedOptionSet.GetOptionSet';
import * as StandardProcedureContextGetContainer from './StandardProcedure.Context.GetContainer';
import * as StandardProcedureCreatorGetUser from './StandardProcedure.Creator.GetUser';
import * as StandardProcedureDocumentDescribeLinksGetDocumentDescribeLink from './StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLink';
import * as StandardProcedureDocumentDescribeLinksGetDocumentDescribeLinks from './StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLinks';
import * as StandardProcedureDocumentReferenceLinksGetDocumentReferenceLink from './StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLink';
import * as StandardProcedureDocumentReferenceLinksGetDocumentReferenceLinks from './StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLinks';
import * as StandardProcedureEffectivitiesGetEffectivity from './StandardProcedure.Effectivities.GetEffectivity';
import * as StandardProcedureEffectivitiesGetEffectivitys from './StandardProcedure.Effectivities.GetEffectivitys';
import * as StandardProcedureFolderGetFolder from './StandardProcedure.Folder.GetFolder';
import * as StandardProcedureModifierGetUser from './StandardProcedure.Modifier.GetUser';
import * as StandardProcedureOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink from './StandardProcedure.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink';
import * as StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLink from './StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLink';
import * as StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLinks from './StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLinks';
import * as StandardProcedureOperationUsageLinksGetOperationUsageLink from './StandardProcedure.OperationUsageLinks.GetOperationUsageLink';
import * as StandardProcedureOperationUsageLinksGetOperationUsageLinks from './StandardProcedure.OperationUsageLinks.GetOperationUsageLinks';
import * as StandardProcedureOrganizationGetOrganization from './StandardProcedure.Organization.GetOrganization';
import * as StandardProcedureResultedByObjectsGetChangeItem from './StandardProcedure.ResultedByObjects.GetChangeItem';
import * as StandardProcedureResultedByObjectsGetChangeItems from './StandardProcedure.ResultedByObjects.GetChangeItems';
import * as StandardProcedureRevisionsGetProcessPlan from './StandardProcedure.Revisions.GetProcessPlan';
import * as StandardProcedureRevisionsGetProcessPlans from './StandardProcedure.Revisions.GetProcessPlans';
import * as StandardProcedureStandardProcedureLinkGetStandardProcedureLink from './StandardProcedure.StandardProcedureLink.GetStandardProcedureLink';
import * as StandardProcedureStandardProcedureLinkGetStandardProcedureLinks from './StandardProcedure.StandardProcedureLink.GetStandardProcedureLinks';
import * as StandardProcedureStandardProcedureLinkPostStandardProcedureLink from './StandardProcedure.StandardProcedureLink.PostStandardProcedureLink';
import * as StandardProcedureVersionsGetProcessPlan from './StandardProcedure.Versions.GetProcessPlan';
import * as StandardProcedureVersionsGetProcessPlans from './StandardProcedure.Versions.GetProcessPlans';
import * as ToolingAssignedOptionSetGetOptionSet from './Tooling.AssignedOptionSet.GetOptionSet';
import * as ToolingContextGetContainer from './Tooling.Context.GetContainer';
import * as ToolingCreatorGetUser from './Tooling.Creator.GetUser';
import * as ToolingDescribedByGetResourceDescribeLink from './Tooling.DescribedBy.GetResourceDescribeLink';
import * as ToolingDescribedByGetResourceDescribeLinks from './Tooling.DescribedBy.GetResourceDescribeLinks';
import * as ToolingEffectivitiesGetEffectivity from './Tooling.Effectivities.GetEffectivity';
import * as ToolingEffectivitiesGetEffectivitys from './Tooling.Effectivities.GetEffectivitys';
import * as ToolingFolderGetFolder from './Tooling.Folder.GetFolder';
import * as ToolingModifierGetUser from './Tooling.Modifier.GetUser';
import * as ToolingMpmCompatibilityLinksGetMpmCompatibilityLink from './Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLink';
import * as ToolingMpmCompatibilityLinksGetMpmCompatibilityLinks from './Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLinks';
import * as ToolingMpmCompatibilityLinksPostMpmCompatibilityLink from './Tooling.MPMCompatibilityLinks.PostMPMCompatibilityLink';
import * as ToolingOrganizationGetOrganization from './Tooling.Organization.GetOrganization';
import * as ToolingPartDocAssociationsGetPartDocAssociation from './Tooling.PartDocAssociations.GetPartDocAssociation';
import * as ToolingPartDocAssociationsGetPartDocAssociations from './Tooling.PartDocAssociations.GetPartDocAssociations';
import * as ToolingReferencesGetResourceReferenceLink from './Tooling.References.GetResourceReferenceLink';
import * as ToolingReferencesGetResourceReferenceLinks from './Tooling.References.GetResourceReferenceLinks';
import * as ToolingResultedByObjectsGetChangeItem from './Tooling.ResultedByObjects.GetChangeItem';
import * as ToolingResultedByObjectsGetChangeItems from './Tooling.ResultedByObjects.GetChangeItems';
import * as ToolingRevisionsGetTooling from './Tooling.Revisions.GetTooling';
import * as ToolingRevisionsGetToolings from './Tooling.Revisions.GetToolings';
import * as ToolingUsesDeletePtcProdMgmtPartUse from './Tooling.Uses.DeletePTC.ProdMgmt.PartUse';
import * as ToolingUsesGetPartUse from './Tooling.Uses.GetPartUse';
import * as ToolingUsesGetPartUses from './Tooling.Uses.GetPartUses';
import * as ToolingUsesPostPartUse from './Tooling.Uses.PostPartUse';
import * as ToolingUsesUpdatePartUse from './Tooling.Uses.UpdatePartUse';
import * as ToolingVersionsGetTooling from './Tooling.Versions.GetTooling';
import * as ToolingVersionsGetToolings from './Tooling.Versions.GetToolings';
import * as UpdateOperation from './UpdateOperation';
import * as UpdateProcessMaterial from './UpdateProcessMaterial';
import * as UpdateProcessPlan from './UpdateProcessPlan';
import * as UpdateSequence from './UpdateSequence';
import * as UpdateSkill from './UpdateSkill';
import * as UpdateStandardCc from './UpdateStandardCC';
import * as UpdateTooling from './UpdateTooling';
import * as UpdateWorkCenter from './UpdateWorkCenter';
import * as WorkCenterAssignedOptionSetGetOptionSet from './WorkCenter.AssignedOptionSet.GetOptionSet';
import * as WorkCenterContextGetContainer from './WorkCenter.Context.GetContainer';
import * as WorkCenterCreatorGetUser from './WorkCenter.Creator.GetUser';
import * as WorkCenterDescribedByGetResourceDescribeLink from './WorkCenter.DescribedBy.GetResourceDescribeLink';
import * as WorkCenterDescribedByGetResourceDescribeLinks from './WorkCenter.DescribedBy.GetResourceDescribeLinks';
import * as WorkCenterEffectivitiesGetEffectivity from './WorkCenter.Effectivities.GetEffectivity';
import * as WorkCenterEffectivitiesGetEffectivitys from './WorkCenter.Effectivities.GetEffectivitys';
import * as WorkCenterFolderGetFolder from './WorkCenter.Folder.GetFolder';
import * as WorkCenterModifierGetUser from './WorkCenter.Modifier.GetUser';
import * as WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLink from './WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLink';
import * as WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLinks from './WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLinks';
import * as WorkCenterMpmCompatibilityLinksPostMpmCompatibilityLink from './WorkCenter.MPMCompatibilityLinks.PostMPMCompatibilityLink';
import * as WorkCenterOrganizationGetOrganization from './WorkCenter.Organization.GetOrganization';
import * as WorkCenterPartDocAssociationsGetPartDocAssociation from './WorkCenter.PartDocAssociations.GetPartDocAssociation';
import * as WorkCenterPartDocAssociationsGetPartDocAssociations from './WorkCenter.PartDocAssociations.GetPartDocAssociations';
import * as WorkCenterReferencesGetResourceReferenceLink from './WorkCenter.References.GetResourceReferenceLink';
import * as WorkCenterReferencesGetResourceReferenceLinks from './WorkCenter.References.GetResourceReferenceLinks';
import * as WorkCenterResultedByObjectsGetChangeItem from './WorkCenter.ResultedByObjects.GetChangeItem';
import * as WorkCenterResultedByObjectsGetChangeItems from './WorkCenter.ResultedByObjects.GetChangeItems';
import * as WorkCenterRevisionsGetWorkCenter from './WorkCenter.Revisions.GetWorkCenter';
import * as WorkCenterRevisionsGetWorkCenters from './WorkCenter.Revisions.GetWorkCenters';
import * as WorkCenterUsesDeletePtcProdMgmtPartUse from './WorkCenter.Uses.DeletePTC.ProdMgmt.PartUse';
import * as WorkCenterUsesGetPartUse from './WorkCenter.Uses.GetPartUse';
import * as WorkCenterUsesGetPartUses from './WorkCenter.Uses.GetPartUses';
import * as WorkCenterUsesPostPartUse from './WorkCenter.Uses.PostPartUse';
import * as WorkCenterUsesUpdatePartUse from './WorkCenter.Uses.UpdatePartUse';
import * as WorkCenterVersionsGetWorkCenter from './WorkCenter.Versions.GetWorkCenter';
import * as WorkCenterVersionsGetWorkCenters from './WorkCenter.Versions.GetWorkCenters';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionChangeOperationIdentity,
	ActionChangeProcessMaterialIdentity,
	ActionChangeProcessPlanIdentity,
	ActionChangeSequenceIdentity,
	ActionChangeSkillIdentity,
	ActionChangeToolingIdentity,
	ActionCheckInMaterials,
	ActionCheckInOperations,
	ActionCheckInProcessMaterials,
	ActionCheckInProcessPlans,
	ActionCheckInSequences,
	ActionCheckInSkills,
	ActionCheckInStandardCCs,
	ActionCheckInToolings,
	ActionCheckInWorkCenters,
	ActionCheckOutMaterials,
	ActionCheckOutOperations,
	ActionCheckOutProcessMaterials,
	ActionCheckOutProcessPlans,
	ActionCheckOutSequences,
	ActionCheckOutSkills,
	ActionCheckOutStandardCCs,
	ActionCheckOutToolings,
	ActionCheckOutWorkCenters,
	ActionCreateAssociativeToSccLinks,
	ActionCreateMpmStandardCcUsageToDdLinks,
	ActionCreateMpmStdCcUsageToProcessPlanLink,
	ActionCreateOperations,
	ActionCreatePartTags,
	ActionCreateProcessMaterials,
	ActionCreateProcessPlans,
	ActionCreateResourcesAssociations,
	ActionCreateSequences,
	ActionCreateSkills,
	ActionCreateStandardCCs,
	ActionCreateStandardCcUsageToResourceLink,
	ActionCreateToolings,
	ActionCreateWorkCenters,
	ActionDeleteAssociativeToSccLinks,
	ActionDeleteMpmCompatibilityLinks,
	ActionDeleteMpmStandardCcUsageToDdLinks,
	ActionDeleteMpmStdCcUsageToProcessPlanLinks,
	ActionDeleteMpmStdCcUsageToResourceLinks,
	ActionDeleteOperations,
	ActionDeletePartTags,
	ActionDeleteProcessMaterials,
	ActionDeleteProcessPlans,
	ActionDeleteResourcesAssociations,
	ActionDeleteSkills,
	ActionDeleteStandardCCs,
	ActionDeleteToolings,
	ActionDeleteWorkCenters,
	ActionEditOperationsSecurityLabels,
	ActionEditProcessMaterialsSecurityLabels,
	ActionEditProcessPlansSecurityLabels,
	ActionEditSequencesSecurityLabels,
	ActionEditSkillsSecurityLabels,
	ActionEditStandardCCsSecurityLabels,
	ActionEditToolingsSecurityLabels,
	ActionEditWorkCentersSecurityLabels,
	ActionGetUnallocatedScCs,
	ActionReviseMaterials,
	ActionReviseOperations,
	ActionReviseProcessMaterials,
	ActionReviseProcessPlans,
	ActionReviseSequences,
	ActionReviseSkills,
	ActionReviseStandardCCs,
	ActionReviseStandardProcedures,
	ActionReviseToolings,
	ActionReviseWorkCenters,
	ActionSetStateMaterials,
	ActionSetStateOperations,
	ActionSetStateProcessMaterials,
	ActionSetStateProcessPlans,
	ActionSetStateSequences,
	ActionSetStateSkills,
	ActionSetStateStandardCCs,
	ActionSetStateStandardProcedures,
	ActionSetStateToolings,
	ActionSetStateWorkCenters,
	ActionUndoCheckOutMaterials,
	ActionUndoCheckOutOperations,
	ActionUndoCheckOutProcessMaterials,
	ActionUndoCheckOutProcessPlans,
	ActionUndoCheckOutSequences,
	ActionUndoCheckOutSkills,
	ActionUndoCheckOutStandardCCs,
	ActionUndoCheckOutToolings,
	ActionUndoCheckOutWorkCenters,
	ActionUpdateAssociativeToSccLinks,
	ActionUpdateMpmStdCcUsageToProcessPlanLink,
	ActionUpdateMpmStdCcUsageToResourceLinks,
	ActionUpdateOperations,
	ActionUpdateProcessMaterials,
	ActionUpdateProcessPlans,
	ActionUpdateSequences,
	ActionUpdateSkills,
	ActionUpdateStandardCCs,
	ActionUpdateToolings,
	ActionUpdateWorkCenters,
	DeleteOperation,
	DeleteProcessMaterial,
	DeleteProcessPlan,
	DeleteSkill,
	DeleteStandardCc,
	DeleteTooling,
	DeleteWorkCenter,
	DocumentManageableCreatorGetUser,
	DocumentManageableDocumentDescribeLinksGetDocumentDescribeLink,
	DocumentManageableDocumentDescribeLinksGetDocumentDescribeLinks,
	DocumentManageableDocumentReferenceLinksGetDocumentReferenceLink,
	DocumentManageableDocumentReferenceLinksGetDocumentReferenceLinks,
	DocumentManageableModifierGetUser,
	EpmDocumentManageableCreatorGetUser,
	EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLink,
	EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLinks,
	EpmDocumentManageableModifierGetUser,
	GetConsumableResources,
	GetDocumentManageable,
	GetDocumentManageables,
	GetEpmDocumentManageable,
	GetEpmDocumentManageables,
	GetMaterial,
	GetMaterials,
	GetMpmStandardOperations,
	GetOperation,
	GetOperationHolder,
	GetOperationHolders,
	GetOperations,
	GetProcessMaterial,
	GetProcessMaterials,
	GetProcessPlan,
	GetProcessPlans,
	GetResource,
	GetResources,
	GetSequence,
	GetSequenceHolder,
	GetSequenceHolders,
	GetSequences,
	GetSkill,
	GetSkills,
	GetStandardCc,
	GetStandardCCs,
	GetStandardProcedure,
	GetStandardProcedures,
	GetTooling,
	GetToolings,
	GetWorkCenter,
	GetWorkCenters,
	MaterialAssociativeToSccLinksGetAssociativeToStandardCcLink,
	MaterialAssociativeToSccLinksGetAssociativeToStandardCcLinks,
	MaterialContextGetContainer,
	MaterialCreatorGetUser,
	MaterialFolderGetFolder,
	MaterialModifierGetUser,
	MaterialOrganizationGetOrganization,
	MaterialPartToProcessPlanLinksGetPartToProcessPlanLink,
	MaterialPartToProcessPlanLinksGetPartToProcessPlanLinks,
	MaterialRepresentationsGetRepresentation,
	MaterialRepresentationsGetRepresentations,
	MaterialRevisionsGetMaterial,
	MaterialRevisionsGetMaterials,
	MaterialVersionsGetMaterial,
	MaterialVersionsGetMaterials,
	OperationAssignedOptionSetGetOptionSet,
	OperationContextGetContainer,
	OperationCreatorGetUser,
	OperationDocumentDescribeLinksGetDocumentDescribeLink,
	OperationDocumentDescribeLinksGetDocumentDescribeLinks,
	OperationDocumentReferenceLinksGetDocumentReferenceLink,
	OperationDocumentReferenceLinksGetDocumentReferenceLinks,
	OperationEffectivitiesGetEffectivity,
	OperationEffectivitiesGetEffectivitys,
	OperationFolderGetFolder,
	OperationModifierGetUser,
	OperationOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink,
	OperationOperationHolderUsageLinkGetOperationHolderUsageLink,
	OperationOperationHolderUsageLinkGetOperationHolderUsageLinks,
	OperationOperationToConsumableLinksDeletePtcMfgProcMgmtOperationToConsumableLink,
	OperationOperationToConsumableLinksGetOperationToConsumableLink,
	OperationOperationToConsumableLinksGetOperationToConsumableLinks,
	OperationOperationToConsumableLinksPostOperationToConsumableLink,
	OperationOperationToConsumableLinksUpdateOperationToConsumableLink,
	OperationOperationToOperatedPartLinkGetOperationToOperatedPartLink,
	OperationOperationToOperatedPartLinkGetOperationToOperatedPartLinks,
	OperationOperationToPartLinkGetOperationToPartLink,
	OperationOperationToPartLinkGetOperationToPartLinks,
	OperationOperationToPartLinkUpdateOperationToPartLink,
	OperationOperationToWorkCenterLinksDeletePtcMfgProcMgmtOperationToWorkCenterLink,
	OperationOperationToWorkCenterLinksGetOperationToWorkCenterLink,
	OperationOperationToWorkCenterLinksGetOperationToWorkCenterLinks,
	OperationOperationToWorkCenterLinksUpdateOperationToWorkCenterLink,
	OperationOperationUsageLinksGetOperationUsageLink,
	OperationOperationUsageLinksGetOperationUsageLinks,
	OperationOrganizationGetOrganization,
	OperationRepresentationsGetRepresentation,
	OperationRepresentationsGetRepresentations,
	OperationResultedByObjectsGetChangeItem,
	OperationResultedByObjectsGetChangeItems,
	OperationRevisionsGetOperation,
	OperationRevisionsGetOperations,
	OperationStandardCcLinksGetOperationToStandardCcLink,
	OperationStandardCcLinksGetOperationToStandardCcLinks,
	OperationStandardProcedureLinkGetStandardProcedureLink,
	OperationStandardProcedureLinkGetStandardProcedureLinks,
	OperationStandardProcedureLinkPostStandardProcedureLink,
	OperationVersionsGetOperation,
	OperationVersionsGetOperations,
	OperationHolderCreatorGetUser,
	OperationHolderDocumentDescribeLinksGetDocumentDescribeLink,
	OperationHolderDocumentDescribeLinksGetDocumentDescribeLinks,
	OperationHolderDocumentReferenceLinksGetDocumentReferenceLink,
	OperationHolderDocumentReferenceLinksGetDocumentReferenceLinks,
	OperationHolderModifierGetUser,
	OperationHolderOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink,
	OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLink,
	OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLinks,
	OperationHolderOperationUsageLinksGetOperationUsageLink,
	OperationHolderOperationUsageLinksGetOperationUsageLinks,
	PostOperation,
	PostProcessMaterial,
	PostProcessPlan,
	PostSequence,
	PostSkill,
	PostStandardCc,
	PostTooling,
	PostWorkCenter,
	ProcessMaterialAssignedOptionSetGetOptionSet,
	ProcessMaterialContextGetContainer,
	ProcessMaterialCreatorGetUser,
	ProcessMaterialDescribedByGetResourceDescribeLink,
	ProcessMaterialDescribedByGetResourceDescribeLinks,
	ProcessMaterialEffectivitiesGetEffectivity,
	ProcessMaterialEffectivitiesGetEffectivitys,
	ProcessMaterialFolderGetFolder,
	ProcessMaterialModifierGetUser,
	ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLink,
	ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLinks,
	ProcessMaterialMpmCompatibilityLinksPostMpmCompatibilityLink,
	ProcessMaterialOrganizationGetOrganization,
	ProcessMaterialPartDocAssociationsGetPartDocAssociation,
	ProcessMaterialPartDocAssociationsGetPartDocAssociations,
	ProcessMaterialReferencesGetResourceReferenceLink,
	ProcessMaterialReferencesGetResourceReferenceLinks,
	ProcessMaterialResultedByObjectsGetChangeItem,
	ProcessMaterialResultedByObjectsGetChangeItems,
	ProcessMaterialRevisionsGetProcessMaterial,
	ProcessMaterialRevisionsGetProcessMaterials,
	ProcessMaterialUsesDeletePtcProdMgmtPartUse,
	ProcessMaterialUsesGetPartUse,
	ProcessMaterialUsesGetPartUses,
	ProcessMaterialUsesPostPartUse,
	ProcessMaterialUsesUpdatePartUse,
	ProcessMaterialVersionsGetProcessMaterial,
	ProcessMaterialVersionsGetProcessMaterials,
	ProcessPlanAssignedOptionSetGetOptionSet,
	ProcessPlanContextGetContainer,
	ProcessPlanCreatorGetUser,
	ProcessPlanDocumentDescribeLinksGetDocumentDescribeLink,
	ProcessPlanDocumentDescribeLinksGetDocumentDescribeLinks,
	ProcessPlanDocumentReferenceLinksGetDocumentReferenceLink,
	ProcessPlanDocumentReferenceLinksGetDocumentReferenceLinks,
	ProcessPlanEffectivitiesGetEffectivity,
	ProcessPlanEffectivitiesGetEffectivitys,
	ProcessPlanFolderGetFolder,
	ProcessPlanModifierGetUser,
	ProcessPlanOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink,
	ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLink,
	ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLinks,
	ProcessPlanOperationUsageLinksGetOperationUsageLink,
	ProcessPlanOperationUsageLinksGetOperationUsageLinks,
	ProcessPlanOrganizationGetOrganization,
	ProcessPlanResultedByObjectsGetChangeItem,
	ProcessPlanResultedByObjectsGetChangeItems,
	ProcessPlanRevisionsGetProcessPlan,
	ProcessPlanRevisionsGetProcessPlans,
	ProcessPlanStandardProcedureLinkGetStandardProcedureLink,
	ProcessPlanStandardProcedureLinkGetStandardProcedureLinks,
	ProcessPlanStandardProcedureLinkPostStandardProcedureLink,
	ProcessPlanVersionsGetProcessPlan,
	ProcessPlanVersionsGetProcessPlans,
	PtcMfgProcMgmtDocumentManageableActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtDocumentManageableActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtDocumentManageableActionGetDocumentsWith,
	PtcMfgProcMgmtDocumentManageableActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtDocumentManageableFunctionDownloadUrls,
	PtcMfgProcMgmtEpmDocumentManageableActionCreateMpmepmDocumentDescribeLinksWith,
	PtcMfgProcMgmtEpmDocumentManageableActionDeleteMpmepmDocumentDescribeLinksWithChangeOid,
	PtcMfgProcMgmtEpmDocumentManageableActionGetMpmepmDocumentDescribesWith,
	PtcMfgProcMgmtMaterialActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtMaterialActionCheckOutWith,
	PtcMfgProcMgmtMaterialActionCreateMpmPartToProcessPlanLinksWith,
	PtcMfgProcMgmtMaterialActionDeleteMpmPartToProcessPlanLinksWithChangeOid,
	PtcMfgProcMgmtMaterialActionReviseWith,
	PtcMfgProcMgmtMaterialActionSetStateWith,
	PtcMfgProcMgmtMaterialActionUndoCheckOut,
	PtcMfgProcMgmtMaterialActionUpdateMpmPartToProcessPlanLinksWith,
	PtcMfgProcMgmtMaterialFunctionAllProcessPlans,
	PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentation,
	PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationWith,
	PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWith,
	PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations,
	PtcMfgProcMgmtMaterialFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtMaterialFunctionGetValidStateTransitions,
	PtcMfgProcMgmtMaterialFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtMaterialFunctionLatestProcessPlans,
	PtcMfgProcMgmtOperationActionAssignCcFromProductWith,
	PtcMfgProcMgmtOperationActionAssociateConsumableResourcesWith,
	PtcMfgProcMgmtOperationActionAssociateStandardOperationsWith,
	PtcMfgProcMgmtOperationActionAssociateWorkCenterWithDoCopyOverDefaultCostAndTime,
	PtcMfgProcMgmtOperationActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtOperationActionCheckOutWith,
	PtcMfgProcMgmtOperationActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtOperationActionCreateMpmDocumentReferenceLinksWith,
	PtcMfgProcMgmtOperationActionCreateMpmOperationToPartLinksWithOperationPathProcessPlanIdRelatedAssemblyIdProcessPlanNavigationCriteriaIdRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationActionCreateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtOperationActionCreateOperationToOperatedPartLinkWith,
	PtcMfgProcMgmtOperationActionCreateOperationToStandardCcLinkWith,
	PtcMfgProcMgmtOperationActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtOperationActionDeleteMpmOperationToPartLinksWithChangeOid,
	PtcMfgProcMgmtOperationActionDeleteMpmOperationToStandardCcLinksWithChangeOid,
	PtcMfgProcMgmtOperationActionDeleteOperationToConsumableLinkWithChangeOid,
	PtcMfgProcMgmtOperationActionDeleteOperationToOperatedPartLinksWithChangeOid,
	PtcMfgProcMgmtOperationActionGetBopWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria,
	PtcMfgProcMgmtOperationActionGetConsumedWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationActionGetConsumedWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria,
	PtcMfgProcMgmtOperationActionGetDocumentsWith,
	PtcMfgProcMgmtOperationActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtOperationActionInsertNewOperationsWith,
	PtcMfgProcMgmtOperationActionModifyEffectivitiesWith,
	PtcMfgProcMgmtOperationActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtOperationActionReviseWith,
	PtcMfgProcMgmtOperationActionSetStateWith,
	PtcMfgProcMgmtOperationActionUndoCheckOut,
	PtcMfgProcMgmtOperationActionUpdateConsumableLinksWith,
	PtcMfgProcMgmtOperationActionUpdateMpmOperationUsageLinksWith,
	PtcMfgProcMgmtOperationActionUpdateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtOperationActionUpdateOperationToOperatedPartLinkWith,
	PtcMfgProcMgmtOperationActionUpdateOperationToPartLinkWith,
	PtcMfgProcMgmtOperationActionUpdateOperationToStandardCcLinkWith,
	PtcMfgProcMgmtOperationFunctionAllocatedWorkCenterWith,
	PtcMfgProcMgmtOperationFunctionConsumedPartsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionConsumedProcessMaterialsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionConsumedResourcesWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionConsumedSkillsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionConsumedToolingsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionDownloadUrls,
	PtcMfgProcMgmtOperationFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtOperationFunctionGetValidStateTransitions,
	PtcMfgProcMgmtOperationFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtOperationFunctionOperatedOnPartsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionOperationsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtOperationHolderActionAssociateStandardOperationsWith,
	PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentReferenceLinksWith,
	PtcMfgProcMgmtOperationHolderActionCreateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtOperationHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtOperationHolderActionGetDocumentsWith,
	PtcMfgProcMgmtOperationHolderActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtOperationHolderActionUpdateMpmOperationUsageLinksWith,
	PtcMfgProcMgmtOperationHolderActionUpdateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtOperationHolderFunctionDownloadUrls,
	PtcMfgProcMgmtProcessMaterialActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtProcessMaterialActionCheckOutWith,
	PtcMfgProcMgmtProcessMaterialActionModifyEffectivitiesWith,
	PtcMfgProcMgmtProcessMaterialActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtProcessMaterialActionReviseWith,
	PtcMfgProcMgmtProcessMaterialActionSetStateWith,
	PtcMfgProcMgmtProcessMaterialActionUndoCheckOut,
	PtcMfgProcMgmtProcessMaterialFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtProcessMaterialFunctionGetValidStateTransitions,
	PtcMfgProcMgmtProcessMaterialFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtProcessPlanActionAssociateStandardOperationsWith,
	PtcMfgProcMgmtProcessPlanActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtProcessPlanActionCheckOutWith,
	PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentReferenceLinksWith,
	PtcMfgProcMgmtProcessPlanActionCreateMpmPartToProcessPlanLinksWith,
	PtcMfgProcMgmtProcessPlanActionCreateMpmSequencesInProcessPlanContextWith,
	PtcMfgProcMgmtProcessPlanActionCreateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtProcessPlanActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtProcessPlanActionGetBopWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtProcessPlanActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria,
	PtcMfgProcMgmtProcessPlanActionGetDocumentsWith,
	PtcMfgProcMgmtProcessPlanActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtProcessPlanActionModifyEffectivitiesWith,
	PtcMfgProcMgmtProcessPlanActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtProcessPlanActionReviseWith,
	PtcMfgProcMgmtProcessPlanActionSetStateWith,
	PtcMfgProcMgmtProcessPlanActionUndoCheckOut,
	PtcMfgProcMgmtProcessPlanActionUpdateMpmOperationUsageLinksWith,
	PtcMfgProcMgmtProcessPlanActionUpdateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtProcessPlanFunctionDownloadUrls,
	PtcMfgProcMgmtProcessPlanFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtProcessPlanFunctionGetValidStateTransitions,
	PtcMfgProcMgmtProcessPlanFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtProcessPlanFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtProcessPlanFunctionOperationsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtProcessPlanFunctionSequencesWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtProcessPlanFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtResourceActionCreateMpmCompatibilityLinksWith,
	PtcMfgProcMgmtResourceActionCreateResourceDescribeDocumentLinksWith,
	PtcMfgProcMgmtResourceActionCreateResourceReferenceDocumentLinksWith,
	PtcMfgProcMgmtResourceActionCreateUsesWithResourceUses,
	PtcMfgProcMgmtResourceActionDeleteResourceDescribeLinksWithChangeOid,
	PtcMfgProcMgmtResourceActionDeleteResourceReferenceLinksWithChangeOid,
	PtcMfgProcMgmtResourceActionGetPartStructureWith,
	PtcMfgProcMgmtSequenceActionAssociateStandardOperationsWith,
	PtcMfgProcMgmtSequenceActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtSequenceActionCheckOutWith,
	PtcMfgProcMgmtSequenceActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtSequenceActionCreateMpmDocumentReferenceLinksWith,
	PtcMfgProcMgmtSequenceActionCreateMpmSequencesInSequenceContextWith,
	PtcMfgProcMgmtSequenceActionCreateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtSequenceActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtSequenceActionGetBopWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtSequenceActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria,
	PtcMfgProcMgmtSequenceActionGetDocumentsWith,
	PtcMfgProcMgmtSequenceActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtSequenceActionModifyEffectivitiesWith,
	PtcMfgProcMgmtSequenceActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtSequenceActionReviseWith,
	PtcMfgProcMgmtSequenceActionSetStateWith,
	PtcMfgProcMgmtSequenceActionUndoCheckOut,
	PtcMfgProcMgmtSequenceActionUpdateMpmOperationUsageLinksWith,
	PtcMfgProcMgmtSequenceActionUpdateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtSequenceFunctionDownloadUrls,
	PtcMfgProcMgmtSequenceFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtSequenceFunctionGetValidStateTransitions,
	PtcMfgProcMgmtSequenceFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtSequenceFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtSequenceFunctionOperationsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtSequenceFunctionSequencesWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtSequenceFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtSequenceHolderActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtSequenceHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtSequenceHolderActionGetDocumentsWith,
	PtcMfgProcMgmtSequenceHolderActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtSequenceHolderActionUpdateSequenceUsageLinkWith,
	PtcMfgProcMgmtSequenceHolderFunctionDownloadUrls,
	PtcMfgProcMgmtSkillActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtSkillActionCheckOutWith,
	PtcMfgProcMgmtSkillActionModifyEffectivitiesWith,
	PtcMfgProcMgmtSkillActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtSkillActionReviseWith,
	PtcMfgProcMgmtSkillActionSetStateWith,
	PtcMfgProcMgmtSkillActionUndoCheckOut,
	PtcMfgProcMgmtSkillFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtSkillFunctionGetValidStateTransitions,
	PtcMfgProcMgmtSkillFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtStandardCcActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtStandardCcActionCheckOutWith,
	PtcMfgProcMgmtStandardCcActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToProcessPlanLinksWith,
	PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToResourceLinksWith,
	PtcMfgProcMgmtStandardCcActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToProcessPlanLinksWith,
	PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToResourceLinksWithChangeOid,
	PtcMfgProcMgmtStandardCcActionGetDocumentsWith,
	PtcMfgProcMgmtStandardCcActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtStandardCcActionReviseWith,
	PtcMfgProcMgmtStandardCcActionSetStateWith,
	PtcMfgProcMgmtStandardCcActionUndoCheckOut,
	PtcMfgProcMgmtStandardCcActionUpdateMpmStandardCcToProcessPlanLinksWith,
	PtcMfgProcMgmtStandardCcFunctionDownloadUrls,
	PtcMfgProcMgmtStandardCcFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtStandardCcFunctionGetValidStateTransitions,
	PtcMfgProcMgmtStandardCcFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtStandardProcedureActionAssociateStandardOperationsWith,
	PtcMfgProcMgmtStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtStandardProcedureActionCheckOutWith,
	PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentDescribeLinksWith,
	PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentReferenceLinksWith,
	PtcMfgProcMgmtStandardProcedureActionCreateMpmPartToProcessPlanLinksWith,
	PtcMfgProcMgmtStandardProcedureActionCreateMpmSequencesInProcessPlanContextWith,
	PtcMfgProcMgmtStandardProcedureActionCreateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtStandardProcedureActionDeleteMpmDocumentDescribeLinkWithChangeOid,
	PtcMfgProcMgmtStandardProcedureActionGetBopWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtStandardProcedureActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria,
	PtcMfgProcMgmtStandardProcedureActionGetDocumentsWith,
	PtcMfgProcMgmtStandardProcedureActionGetDocumentsWithInlineNavCriteriaWith,
	PtcMfgProcMgmtStandardProcedureActionModifyEffectivitiesWith,
	PtcMfgProcMgmtStandardProcedureActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtStandardProcedureActionReviseWith,
	PtcMfgProcMgmtStandardProcedureActionSetStateWith,
	PtcMfgProcMgmtStandardProcedureActionUndoCheckOut,
	PtcMfgProcMgmtStandardProcedureActionUpdateMpmOperationUsageLinksWith,
	PtcMfgProcMgmtStandardProcedureActionUpdateMpmStandardProcedureLinksWith,
	PtcMfgProcMgmtStandardProcedureFunctionDownloadUrls,
	PtcMfgProcMgmtStandardProcedureFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtStandardProcedureFunctionGetValidStateTransitions,
	PtcMfgProcMgmtStandardProcedureFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtStandardProcedureFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtStandardProcedureFunctionOperationsWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtStandardProcedureFunctionSequencesWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtStandardProcedureFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId,
	PtcMfgProcMgmtToolingActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtToolingActionCheckOutWith,
	PtcMfgProcMgmtToolingActionModifyEffectivitiesWith,
	PtcMfgProcMgmtToolingActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtToolingActionReviseWith,
	PtcMfgProcMgmtToolingActionSetStateWith,
	PtcMfgProcMgmtToolingActionUndoCheckOut,
	PtcMfgProcMgmtToolingFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtToolingFunctionGetValidStateTransitions,
	PtcMfgProcMgmtToolingFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtWorkCenterActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcMfgProcMgmtWorkCenterActionCheckOutWith,
	PtcMfgProcMgmtWorkCenterActionCreateMpmCompatibilityLinksWith,
	PtcMfgProcMgmtWorkCenterActionCreateResourceDescribeDocumentLinksWith,
	PtcMfgProcMgmtWorkCenterActionCreateResourceReferenceDocumentLinksWith,
	PtcMfgProcMgmtWorkCenterActionCreateUsesWithResourceUses,
	PtcMfgProcMgmtWorkCenterActionDeleteResourceDescribeLinksWithChangeOid,
	PtcMfgProcMgmtWorkCenterActionDeleteResourceReferenceLinksWithChangeOid,
	PtcMfgProcMgmtWorkCenterActionGetPartStructureWith,
	PtcMfgProcMgmtWorkCenterActionModifyEffectivitiesWith,
	PtcMfgProcMgmtWorkCenterActionRemoveEffectivitiesWith,
	PtcMfgProcMgmtWorkCenterActionReviseWith,
	PtcMfgProcMgmtWorkCenterActionSetStateWith,
	PtcMfgProcMgmtWorkCenterActionUndoCheckOut,
	PtcMfgProcMgmtWorkCenterFunctionGetLifeCycleTemplate,
	PtcMfgProcMgmtWorkCenterFunctionGetValidStateTransitions,
	PtcMfgProcMgmtWorkCenterFunctionIsCheckoutAllowed,
	PtcMfgProcMgmtWorkCenterFunctionLocalizedOperationsWithProcessPlanId,
	ResourceCreatorGetUser,
	ResourceDescribedByGetResourceDescribeLink,
	ResourceDescribedByGetResourceDescribeLinks,
	ResourceModifierGetUser,
	ResourceMpmCompatibilityLinksGetMpmCompatibilityLink,
	ResourceMpmCompatibilityLinksGetMpmCompatibilityLinks,
	ResourceMpmCompatibilityLinksPostMpmCompatibilityLink,
	ResourcePartDocAssociationsGetPartDocAssociation,
	ResourcePartDocAssociationsGetPartDocAssociations,
	ResourceReferencesGetResourceReferenceLink,
	ResourceReferencesGetResourceReferenceLinks,
	ResourceUsesDeletePtcProdMgmtPartUse,
	ResourceUsesGetPartUse,
	ResourceUsesGetPartUses,
	ResourceUsesPostPartUse,
	ResourceUsesUpdatePartUse,
	SequenceAssignedOptionSetGetOptionSet,
	SequenceContextGetContainer,
	SequenceCreatorGetUser,
	SequenceDocumentDescribeLinksGetDocumentDescribeLink,
	SequenceDocumentDescribeLinksGetDocumentDescribeLinks,
	SequenceDocumentReferenceLinksGetDocumentReferenceLink,
	SequenceDocumentReferenceLinksGetDocumentReferenceLinks,
	SequenceEffectivitiesGetEffectivity,
	SequenceEffectivitiesGetEffectivitys,
	SequenceModifierGetUser,
	SequenceOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink,
	SequenceOperationHolderUsageLinkGetOperationHolderUsageLink,
	SequenceOperationHolderUsageLinkGetOperationHolderUsageLinks,
	SequenceOperationUsageLinksGetOperationUsageLink,
	SequenceOperationUsageLinksGetOperationUsageLinks,
	SequenceResultedByObjectsGetChangeItem,
	SequenceResultedByObjectsGetChangeItems,
	SequenceRevisionsGetSequence,
	SequenceRevisionsGetSequences,
	SequenceStandardProcedureLinkGetStandardProcedureLink,
	SequenceStandardProcedureLinkGetStandardProcedureLinks,
	SequenceStandardProcedureLinkPostStandardProcedureLink,
	SequenceVersionsGetSequence,
	SequenceVersionsGetSequences,
	SequenceHolderCreatorGetUser,
	SequenceHolderDocumentDescribeLinksGetDocumentDescribeLink,
	SequenceHolderDocumentDescribeLinksGetDocumentDescribeLinks,
	SequenceHolderDocumentReferenceLinksGetDocumentReferenceLink,
	SequenceHolderDocumentReferenceLinksGetDocumentReferenceLinks,
	SequenceHolderModifierGetUser,
	SequenceHolderSequenceUsageLinkGetSequenceUsageLink,
	SequenceHolderSequenceUsageLinkGetSequenceUsageLinks,
	SkillAssignedOptionSetGetOptionSet,
	SkillContextGetContainer,
	SkillCreatorGetUser,
	SkillDescribedByGetResourceDescribeLink,
	SkillDescribedByGetResourceDescribeLinks,
	SkillEffectivitiesGetEffectivity,
	SkillEffectivitiesGetEffectivitys,
	SkillFolderGetFolder,
	SkillModifierGetUser,
	SkillMpmCompatibilityLinksGetMpmCompatibilityLink,
	SkillMpmCompatibilityLinksGetMpmCompatibilityLinks,
	SkillMpmCompatibilityLinksPostMpmCompatibilityLink,
	SkillOrganizationGetOrganization,
	SkillPartDocAssociationsGetPartDocAssociation,
	SkillPartDocAssociationsGetPartDocAssociations,
	SkillReferencesGetResourceReferenceLink,
	SkillReferencesGetResourceReferenceLinks,
	SkillResultedByObjectsGetChangeItem,
	SkillResultedByObjectsGetChangeItems,
	SkillRevisionsGetSkill,
	SkillRevisionsGetSkills,
	SkillUsesDeletePtcProdMgmtPartUse,
	SkillUsesGetPartUse,
	SkillUsesGetPartUses,
	SkillUsesPostPartUse,
	SkillUsesUpdatePartUse,
	SkillVersionsGetSkill,
	SkillVersionsGetSkills,
	StandardCcContextGetContainer,
	StandardCcCreatorGetUser,
	StandardCcDocumentDescribeLinksGetDocumentDescribeLink,
	StandardCcDocumentDescribeLinksGetDocumentDescribeLinks,
	StandardCcDocumentReferenceLinksGetDocumentReferenceLink,
	StandardCcDocumentReferenceLinksGetDocumentReferenceLinks,
	StandardCcFolderGetFolder,
	StandardCcModifierGetUser,
	StandardCcOrganizationGetOrganization,
	StandardCcResultedByObjectsGetChangeItem,
	StandardCcResultedByObjectsGetChangeItems,
	StandardCcRevisionsGetStandardCc,
	StandardCcRevisionsGetStandardCCs,
	StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLink,
	StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLinks,
	StandardCcStandardCcToResourceLinksGetStandardCcToResourceLink,
	StandardCcStandardCcToResourceLinksGetStandardCcToResourceLinks,
	StandardCcVersionsGetStandardCc,
	StandardCcVersionsGetStandardCCs,
	StandardProcedureAssignedOptionSetGetOptionSet,
	StandardProcedureContextGetContainer,
	StandardProcedureCreatorGetUser,
	StandardProcedureDocumentDescribeLinksGetDocumentDescribeLink,
	StandardProcedureDocumentDescribeLinksGetDocumentDescribeLinks,
	StandardProcedureDocumentReferenceLinksGetDocumentReferenceLink,
	StandardProcedureDocumentReferenceLinksGetDocumentReferenceLinks,
	StandardProcedureEffectivitiesGetEffectivity,
	StandardProcedureEffectivitiesGetEffectivitys,
	StandardProcedureFolderGetFolder,
	StandardProcedureModifierGetUser,
	StandardProcedureOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink,
	StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLink,
	StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLinks,
	StandardProcedureOperationUsageLinksGetOperationUsageLink,
	StandardProcedureOperationUsageLinksGetOperationUsageLinks,
	StandardProcedureOrganizationGetOrganization,
	StandardProcedureResultedByObjectsGetChangeItem,
	StandardProcedureResultedByObjectsGetChangeItems,
	StandardProcedureRevisionsGetProcessPlan,
	StandardProcedureRevisionsGetProcessPlans,
	StandardProcedureStandardProcedureLinkGetStandardProcedureLink,
	StandardProcedureStandardProcedureLinkGetStandardProcedureLinks,
	StandardProcedureStandardProcedureLinkPostStandardProcedureLink,
	StandardProcedureVersionsGetProcessPlan,
	StandardProcedureVersionsGetProcessPlans,
	ToolingAssignedOptionSetGetOptionSet,
	ToolingContextGetContainer,
	ToolingCreatorGetUser,
	ToolingDescribedByGetResourceDescribeLink,
	ToolingDescribedByGetResourceDescribeLinks,
	ToolingEffectivitiesGetEffectivity,
	ToolingEffectivitiesGetEffectivitys,
	ToolingFolderGetFolder,
	ToolingModifierGetUser,
	ToolingMpmCompatibilityLinksGetMpmCompatibilityLink,
	ToolingMpmCompatibilityLinksGetMpmCompatibilityLinks,
	ToolingMpmCompatibilityLinksPostMpmCompatibilityLink,
	ToolingOrganizationGetOrganization,
	ToolingPartDocAssociationsGetPartDocAssociation,
	ToolingPartDocAssociationsGetPartDocAssociations,
	ToolingReferencesGetResourceReferenceLink,
	ToolingReferencesGetResourceReferenceLinks,
	ToolingResultedByObjectsGetChangeItem,
	ToolingResultedByObjectsGetChangeItems,
	ToolingRevisionsGetTooling,
	ToolingRevisionsGetToolings,
	ToolingUsesDeletePtcProdMgmtPartUse,
	ToolingUsesGetPartUse,
	ToolingUsesGetPartUses,
	ToolingUsesPostPartUse,
	ToolingUsesUpdatePartUse,
	ToolingVersionsGetTooling,
	ToolingVersionsGetToolings,
	UpdateOperation,
	UpdateProcessMaterial,
	UpdateProcessPlan,
	UpdateSequence,
	UpdateSkill,
	UpdateStandardCc,
	UpdateTooling,
	UpdateWorkCenter,
	WorkCenterAssignedOptionSetGetOptionSet,
	WorkCenterContextGetContainer,
	WorkCenterCreatorGetUser,
	WorkCenterDescribedByGetResourceDescribeLink,
	WorkCenterDescribedByGetResourceDescribeLinks,
	WorkCenterEffectivitiesGetEffectivity,
	WorkCenterEffectivitiesGetEffectivitys,
	WorkCenterFolderGetFolder,
	WorkCenterModifierGetUser,
	WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLink,
	WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLinks,
	WorkCenterMpmCompatibilityLinksPostMpmCompatibilityLink,
	WorkCenterOrganizationGetOrganization,
	WorkCenterPartDocAssociationsGetPartDocAssociation,
	WorkCenterPartDocAssociationsGetPartDocAssociations,
	WorkCenterReferencesGetResourceReferenceLink,
	WorkCenterReferencesGetResourceReferenceLinks,
	WorkCenterResultedByObjectsGetChangeItem,
	WorkCenterResultedByObjectsGetChangeItems,
	WorkCenterRevisionsGetWorkCenter,
	WorkCenterRevisionsGetWorkCenters,
	WorkCenterUsesDeletePtcProdMgmtPartUse,
	WorkCenterUsesGetPartUse,
	WorkCenterUsesGetPartUses,
	WorkCenterUsesPostPartUse,
	WorkCenterUsesUpdatePartUse,
	WorkCenterVersionsGetWorkCenter,
	WorkCenterVersionsGetWorkCenters,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v6/MfgProcMgmt',
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
					'PTC.MfgProcMgmt',
				],
			},
		},
		default: 'POST /ChangeOperationIdentity',
		options: [
			{
				name: 'Action_ChangeOperationIdentity',
				value: 'POST /ChangeOperationIdentity',
				description: 'Change Identity - post /ChangeOperationIdentity',
				action: 'Action_ChangeOperationIdentity',
			},
			{
				name: 'Action_ChangeProcessMaterialIdentity',
				value: 'POST /ChangeProcessMaterialIdentity',
				description: 'Change Identity - post /ChangeProcessMaterialIdentity',
				action: 'Action_ChangeProcessMaterialIdentity',
			},
			{
				name: 'Action_ChangeProcessPlanIdentity',
				value: 'POST /ChangeProcessPlanIdentity',
				description: 'Change Identity - post /ChangeProcessPlanIdentity',
				action: 'Action_ChangeProcessPlanIdentity',
			},
			{
				name: 'Action_ChangeSequenceIdentity',
				value: 'POST /ChangeSequenceIdentity',
				description: 'Change Identity - post /ChangeSequenceIdentity',
				action: 'Action_ChangeSequenceIdentity',
			},
			{
				name: 'Action_ChangeSkillIdentity',
				value: 'POST /ChangeSkillIdentity',
				description: 'Change Identity - post /ChangeSkillIdentity',
				action: 'Action_ChangeSkillIdentity',
			},
			{
				name: 'Action_ChangeToolingIdentity',
				value: 'POST /ChangeToolingIdentity',
				description: 'Change Identity - post /ChangeToolingIdentity',
				action: 'Action_ChangeToolingIdentity',
			},
			{
				name: 'Action_CheckInMaterials',
				value: 'POST /CheckInMaterials',
				description: 'Execute CheckInMaterials - post /CheckInMaterials',
				action: 'Action_CheckInMaterials',
			},
			{
				name: 'Action_CheckInOperations',
				value: 'POST /CheckInOperations',
				description: 'Execute CheckInOperations - post /CheckInOperations',
				action: 'Action_CheckInOperations',
			},
			{
				name: 'Action_CheckInProcessMaterials',
				value: 'POST /CheckInProcessMaterials',
				description: 'Execute CheckInProcessMaterials - post /CheckInProcessMaterials',
				action: 'Action_CheckInProcessMaterials',
			},
			{
				name: 'Action_CheckInProcessPlans',
				value: 'POST /CheckInProcessPlans',
				description: 'Execute CheckInProcessPlans - post /CheckInProcessPlans',
				action: 'Action_CheckInProcessPlans',
			},
			{
				name: 'Action_CheckInSequences',
				value: 'POST /CheckInSequences',
				description: 'Execute CheckInSequences - post /CheckInSequences',
				action: 'Action_CheckInSequences',
			},
			{
				name: 'Action_CheckInSkills',
				value: 'POST /CheckInSkills',
				description: 'Execute CheckInSkills - post /CheckInSkills',
				action: 'Action_CheckInSkills',
			},
			{
				name: 'Action_CheckInStandardCCs',
				value: 'POST /CheckInStandardCCs',
				description: 'Execute CheckInStandardCCs - post /CheckInStandardCCs',
				action: 'Action_CheckInStandardCCs',
			},
			{
				name: 'Action_CheckInToolings',
				value: 'POST /CheckInToolings',
				description: 'Execute CheckInToolings - post /CheckInToolings',
				action: 'Action_CheckInToolings',
			},
			{
				name: 'Action_CheckInWorkCenters',
				value: 'POST /CheckInWorkCenters',
				description: 'Execute CheckInWorkCenters - post /CheckInWorkCenters',
				action: 'Action_CheckInWorkCenters',
			},
			{
				name: 'Action_CheckOutMaterials',
				value: 'POST /CheckOutMaterials',
				description: 'Execute CheckOutMaterials - post /CheckOutMaterials',
				action: 'Action_CheckOutMaterials',
			},
			{
				name: 'Action_CheckOutOperations',
				value: 'POST /CheckOutOperations',
				description: 'Execute CheckOutOperations - post /CheckOutOperations',
				action: 'Action_CheckOutOperations',
			},
			{
				name: 'Action_CheckOutProcessMaterials',
				value: 'POST /CheckOutProcessMaterials',
				description: 'Execute CheckOutProcessMaterials - post /CheckOutProcessMaterials',
				action: 'Action_CheckOutProcessMaterials',
			},
			{
				name: 'Action_CheckOutProcessPlans',
				value: 'POST /CheckOutProcessPlans',
				description: 'Execute CheckOutProcessPlans - post /CheckOutProcessPlans',
				action: 'Action_CheckOutProcessPlans',
			},
			{
				name: 'Action_CheckOutSequences',
				value: 'POST /CheckOutSequences',
				description: 'Execute CheckOutSequences - post /CheckOutSequences',
				action: 'Action_CheckOutSequences',
			},
			{
				name: 'Action_CheckOutSkills',
				value: 'POST /CheckOutSkills',
				description: 'Execute CheckOutSkills - post /CheckOutSkills',
				action: 'Action_CheckOutSkills',
			},
			{
				name: 'Action_CheckOutStandardCCs',
				value: 'POST /CheckOutStandardCCs',
				description: 'Execute CheckOutStandardCCs - post /CheckOutStandardCCs',
				action: 'Action_CheckOutStandardCCs',
			},
			{
				name: 'Action_CheckOutToolings',
				value: 'POST /CheckOutToolings',
				description: 'Execute CheckOutToolings - post /CheckOutToolings',
				action: 'Action_CheckOutToolings',
			},
			{
				name: 'Action_CheckOutWorkCenters',
				value: 'POST /CheckOutWorkCenters',
				description: 'Execute CheckOutWorkCenters - post /CheckOutWorkCenters',
				action: 'Action_CheckOutWorkCenters',
			},
			{
				name: 'Action_CreateAssociativeToSCCLinks',
				value: 'POST /CreateAssociativeToSCCLinks',
				description: 'Create Associative (WTPart) to SCC Links Multi Api - post /CreateAssociativeToSCCLinks',
				action: 'Action_CreateAssociativeToSCCLinks',
			},
			{
				name: 'Action_CreateMPMStandardCCUsageToDDLinks',
				value: 'POST /CreateMPMStandardCCUsageToDDLinks',
				description: 'Create Standard CC Usage (MPMOperationToStandardCCLink) to Document Describe Links - post /CreateMPMStandardCCUsageToDDLinks',
				action: 'Action_CreateMPMStandardCCUsageToDDLinks',
			},
			{
				name: 'Action_CreateMPMStdCCUsageToProcessPlanLink',
				value: 'POST /CreateMPMStdCCUsageToProcessPlanLink',
				description: 'Create MPMStdCCUsageToProcessPlanLinks Multi API - post /CreateMPMStdCCUsageToProcessPlanLink',
				action: 'Action_CreateMPMStdCCUsageToProcessPlanLink',
			},
			{
				name: 'Action_CreateOperations',
				value: 'POST /CreateOperations',
				description: 'Execute CreateOperations - post /CreateOperations',
				action: 'Action_CreateOperations',
			},
			{
				name: 'Action_CreatePartTags',
				value: 'POST /CreatePartTags',
				description: 'Create PartTag Links - post /CreatePartTags',
				action: 'Action_CreatePartTags',
			},
			{
				name: 'Action_CreateProcessMaterials',
				value: 'POST /CreateProcessMaterials',
				description: 'Execute CreateProcessMaterials - post /CreateProcessMaterials',
				action: 'Action_CreateProcessMaterials',
			},
			{
				name: 'Action_CreateProcessPlans',
				value: 'POST /CreateProcessPlans',
				description: 'Execute CreateProcessPlans - post /CreateProcessPlans',
				action: 'Action_CreateProcessPlans',
			},
			{
				name: 'Action_CreateResourcesAssociations',
				value: 'POST /CreateResourcesAssociations',
				description: 'Create Single or Multiple Associations between Resources and CAD documents. - post /CreateResourcesAssociations',
				action: 'Action_CreateResourcesAssociations',
			},
			{
				name: 'Action_CreateSequences',
				value: 'POST /CreateSequences',
				description: 'Execute CreateSequences - post /CreateSequences',
				action: 'Action_CreateSequences',
			},
			{
				name: 'Action_CreateSkills',
				value: 'POST /CreateSkills',
				description: 'Execute CreateSkills - post /CreateSkills',
				action: 'Action_CreateSkills',
			},
			{
				name: 'Action_CreateStandardCCs',
				value: 'POST /CreateStandardCCs',
				description: 'Execute CreateStandardCCs - post /CreateStandardCCs',
				action: 'Action_CreateStandardCCs',
			},
			{
				name: 'Action_CreateStandardCCUsageToResourceLink',
				value: 'POST /CreateStandardCCUsageToResourceLink',
				description: 'CreateStandardCCUsageToResourceLink - post /CreateStandardCCUsageToResourceLink',
				action: 'Action_CreateStandardCCUsageToResourceLink',
			},
			{
				name: 'Action_CreateToolings',
				value: 'POST /CreateToolings',
				description: 'Execute CreateToolings - post /CreateToolings',
				action: 'Action_CreateToolings',
			},
			{
				name: 'Action_CreateWorkCenters',
				value: 'POST /CreateWorkCenters',
				description: 'Execute CreateWorkCenters - post /CreateWorkCenters',
				action: 'Action_CreateWorkCenters',
			},
			{
				name: 'Action_DeleteAssociativeToSCCLinks',
				value: 'POST /DeleteAssociativeToSCCLinks',
				description: 'Delete Multiple AssociativeToSCCLinks - post /DeleteAssociativeToSCCLinks',
				action: 'Action_DeleteAssociativeToSCCLinks',
			},
			{
				name: 'Action_DeleteMPMCompatibilityLinks',
				value: 'POST /DeleteMPMCompatibleLinks',
				description: 'Delete MPM Cpmpatible Links - post /DeleteMPMCompatibleLinks',
				action: 'Action_DeleteMPMCompatibilityLinks',
			},
			{
				name: 'Action_DeleteMPMStandardCCUsageToDDLinks',
				value: 'POST /DeleteMPMStandardCCUsageToDDLinks',
				description: 'Delete Standard Control Characteristic Usage to Decsribed By Documents Links Multi Api - post /DeleteMPMStandardCCUsageToDDLinks',
				action: 'Action_DeleteMPMStandardCCUsageToDDLinks',
			},
			{
				name: 'Action_DeleteMPMStdCCUsageToProcessPlanLinks',
				value: 'POST /DeleteMPMStdCCUsageToProcessPlanLinks',
				description: 'Delete Standard Control Characteristic Usage to Process Plan Links Multi Api - post /DeleteMPMStdCCUsageToProcessPlanLinks',
				action: 'Action_DeleteMPMStdCCUsageToProcessPlanLinks',
			},
			{
				name: 'Action_DeleteMPMStdCCUsageToResourceLinks',
				value: 'POST /DeleteMPMStdCCUsageToResourceLinks',
				description: 'Delete Standard Control Characteristic Usage to Resource Links Multi Api - post /DeleteMPMStdCCUsageToResourceLinks',
				action: 'Action_DeleteMPMStdCCUsageToResourceLinks',
			},
			{
				name: 'Action_DeleteOperations',
				value: 'POST /DeleteOperations',
				description: 'Execute DeleteOperations - post /DeleteOperations',
				action: 'Action_DeleteOperations',
			},
			{
				name: 'Action_DeletePartTags',
				value: 'POST /DeletePartTags',
				description: 'Delete PartTag Links - post /DeletePartTags',
				action: 'Action_DeletePartTags',
			},
			{
				name: 'Action_DeleteProcessMaterials',
				value: 'POST /DeleteProcessMaterials',
				description: 'Execute DeleteProcessMaterials - post /DeleteProcessMaterials',
				action: 'Action_DeleteProcessMaterials',
			},
			{
				name: 'Action_DeleteProcessPlans',
				value: 'POST /DeleteProcessPlans',
				description: 'Execute DeleteProcessPlans - post /DeleteProcessPlans',
				action: 'Action_DeleteProcessPlans',
			},
			{
				name: 'Action_DeleteResourcesAssociations',
				value: 'POST /DeleteResourcesAssociations',
				description: 'Delete Single or Multiple Associations between Resources and CAD documents. - post /DeleteResourcesAssociations',
				action: 'Action_DeleteResourcesAssociations',
			},
			{
				name: 'Action_DeleteSkills',
				value: 'POST /DeleteSkills',
				description: 'Execute DeleteSkills - post /DeleteSkills',
				action: 'Action_DeleteSkills',
			},
			{
				name: 'Action_DeleteStandardCCs',
				value: 'POST /DeleteStandardCCs',
				description: 'Execute DeleteStandardCCs - post /DeleteStandardCCs',
				action: 'Action_DeleteStandardCCs',
			},
			{
				name: 'Action_DeleteToolings',
				value: 'POST /DeleteToolings',
				description: 'Execute DeleteToolings - post /DeleteToolings',
				action: 'Action_DeleteToolings',
			},
			{
				name: 'Action_DeleteWorkCenters',
				value: 'POST /DeleteWorkCenters',
				description: 'Execute DeleteWorkCenters - post /DeleteWorkCenters',
				action: 'Action_DeleteWorkCenters',
			},
			{
				name: 'Action_EditOperationsSecurityLabels',
				value: 'POST /EditOperationsSecurityLabels',
				description: 'Execute EditOperationsSecurityLabels - post /EditOperationsSecurityLabels',
				action: 'Action_EditOperationsSecurityLabels',
			},
			{
				name: 'Action_EditProcessMaterialsSecurityLabels',
				value: 'POST /EditProcessMaterialsSecurityLabels',
				description: 'Execute EditProcessMaterialsSecurityLabels - post /EditProcessMaterialsSecurityLabels',
				action: 'Action_EditProcessMaterialsSecurityLabels',
			},
			{
				name: 'Action_EditProcessPlansSecurityLabels',
				value: 'POST /EditProcessPlansSecurityLabels',
				description: 'Execute EditProcessPlansSecurityLabels - post /EditProcessPlansSecurityLabels',
				action: 'Action_EditProcessPlansSecurityLabels',
			},
			{
				name: 'Action_EditSequencesSecurityLabels',
				value: 'POST /EditSequencesSecurityLabels',
				description: 'Execute EditSequencesSecurityLabels - post /EditSequencesSecurityLabels',
				action: 'Action_EditSequencesSecurityLabels',
			},
			{
				name: 'Action_EditSkillsSecurityLabels',
				value: 'POST /EditSkillsSecurityLabels',
				description: 'Execute EditSkillsSecurityLabels - post /EditSkillsSecurityLabels',
				action: 'Action_EditSkillsSecurityLabels',
			},
			{
				name: 'Action_EditStandardCCsSecurityLabels',
				value: 'POST /EditStandardCCsSecurityLabels',
				description: 'Execute EditStandardCCsSecurityLabels - post /EditStandardCCsSecurityLabels',
				action: 'Action_EditStandardCCsSecurityLabels',
			},
			{
				name: 'Action_EditToolingsSecurityLabels',
				value: 'POST /EditToolingsSecurityLabels',
				description: 'Execute EditToolingsSecurityLabels - post /EditToolingsSecurityLabels',
				action: 'Action_EditToolingsSecurityLabels',
			},
			{
				name: 'Action_EditWorkCentersSecurityLabels',
				value: 'POST /EditWorkCentersSecurityLabels',
				description: 'Execute EditWorkCentersSecurityLabels - post /EditWorkCentersSecurityLabels',
				action: 'Action_EditWorkCentersSecurityLabels',
			},
			{
				name: 'Action_GetUnallocatedSCCs',
				value: 'POST /GetUnallocatedSCCs',
				description: 'Get unallocated Standard Control Characteristics. - post /GetUnallocatedSCCs',
				action: 'Action_GetUnallocatedSCCs',
			},
			{
				name: 'Action_ReviseMaterials',
				value: 'POST /ReviseMaterials',
				description: 'Execute ReviseMaterials - post /ReviseMaterials',
				action: 'Action_ReviseMaterials',
			},
			{
				name: 'Action_ReviseOperations',
				value: 'POST /ReviseOperations',
				description: 'Execute ReviseOperations - post /ReviseOperations',
				action: 'Action_ReviseOperations',
			},
			{
				name: 'Action_ReviseProcessMaterials',
				value: 'POST /ReviseProcessMaterials',
				description: 'Execute ReviseProcessMaterials - post /ReviseProcessMaterials',
				action: 'Action_ReviseProcessMaterials',
			},
			{
				name: 'Action_ReviseProcessPlans',
				value: 'POST /ReviseProcessPlans',
				description: 'Execute ReviseProcessPlans - post /ReviseProcessPlans',
				action: 'Action_ReviseProcessPlans',
			},
			{
				name: 'Action_ReviseSequences',
				value: 'POST /ReviseSequences',
				description: 'Execute ReviseSequences - post /ReviseSequences',
				action: 'Action_ReviseSequences',
			},
			{
				name: 'Action_ReviseSkills',
				value: 'POST /ReviseSkills',
				description: 'Execute ReviseSkills - post /ReviseSkills',
				action: 'Action_ReviseSkills',
			},
			{
				name: 'Action_ReviseStandardCCs',
				value: 'POST /ReviseStandardCCs',
				description: 'Execute ReviseStandardCCs - post /ReviseStandardCCs',
				action: 'Action_ReviseStandardCCs',
			},
			{
				name: 'Action_ReviseStandardProcedures',
				value: 'POST /ReviseStandardProcedures',
				description: 'Execute ReviseStandardProcedures - post /ReviseStandardProcedures',
				action: 'Action_ReviseStandardProcedures',
			},
			{
				name: 'Action_ReviseToolings',
				value: 'POST /ReviseToolings',
				description: 'Execute ReviseToolings - post /ReviseToolings',
				action: 'Action_ReviseToolings',
			},
			{
				name: 'Action_ReviseWorkCenters',
				value: 'POST /ReviseWorkCenters',
				description: 'Execute ReviseWorkCenters - post /ReviseWorkCenters',
				action: 'Action_ReviseWorkCenters',
			},
			{
				name: 'Action_SetStateMaterials',
				value: 'POST /SetStateMaterials',
				description: 'Execute SetStateMaterials - post /SetStateMaterials',
				action: 'Action_SetStateMaterials',
			},
			{
				name: 'Action_SetStateOperations',
				value: 'POST /SetStateOperations',
				description: 'Execute SetStateOperations - post /SetStateOperations',
				action: 'Action_SetStateOperations',
			},
			{
				name: 'Action_SetStateProcessMaterials',
				value: 'POST /SetStateProcessMaterials',
				description: 'Execute SetStateProcessMaterials - post /SetStateProcessMaterials',
				action: 'Action_SetStateProcessMaterials',
			},
			{
				name: 'Action_SetStateProcessPlans',
				value: 'POST /SetStateProcessPlans',
				description: 'Execute SetStateProcessPlans - post /SetStateProcessPlans',
				action: 'Action_SetStateProcessPlans',
			},
			{
				name: 'Action_SetStateSequences',
				value: 'POST /SetStateSequences',
				description: 'Execute SetStateSequences - post /SetStateSequences',
				action: 'Action_SetStateSequences',
			},
			{
				name: 'Action_SetStateSkills',
				value: 'POST /SetStateSkills',
				description: 'Execute SetStateSkills - post /SetStateSkills',
				action: 'Action_SetStateSkills',
			},
			{
				name: 'Action_SetStateStandardCCs',
				value: 'POST /SetStateStandardCCs',
				description: 'Execute SetStateStandardCCs - post /SetStateStandardCCs',
				action: 'Action_SetStateStandardCCs',
			},
			{
				name: 'Action_SetStateStandardProcedures',
				value: 'POST /SetStateStandardProcedures',
				description: 'Execute SetStateStandardProcedures - post /SetStateStandardProcedures',
				action: 'Action_SetStateStandardProcedures',
			},
			{
				name: 'Action_SetStateToolings',
				value: 'POST /SetStateToolings',
				description: 'Execute SetStateToolings - post /SetStateToolings',
				action: 'Action_SetStateToolings',
			},
			{
				name: 'Action_SetStateWorkCenters',
				value: 'POST /SetStateWorkCenters',
				description: 'Execute SetStateWorkCenters - post /SetStateWorkCenters',
				action: 'Action_SetStateWorkCenters',
			},
			{
				name: 'Action_UndoCheckOutMaterials',
				value: 'POST /UndoCheckOutMaterials',
				description: 'Execute UndoCheckOutMaterials - post /UndoCheckOutMaterials',
				action: 'Action_UndoCheckOutMaterials',
			},
			{
				name: 'Action_UndoCheckOutOperations',
				value: 'POST /UndoCheckOutOperations',
				description: 'Execute UndoCheckOutOperations - post /UndoCheckOutOperations',
				action: 'Action_UndoCheckOutOperations',
			},
			{
				name: 'Action_UndoCheckOutProcessMaterials',
				value: 'POST /UndoCheckOutProcessMaterials',
				description: 'Execute UndoCheckOutProcessMaterials - post /UndoCheckOutProcessMaterials',
				action: 'Action_UndoCheckOutProcessMaterials',
			},
			{
				name: 'Action_UndoCheckOutProcessPlans',
				value: 'POST /UndoCheckOutProcessPlans',
				description: 'Execute UndoCheckOutProcessPlans - post /UndoCheckOutProcessPlans',
				action: 'Action_UndoCheckOutProcessPlans',
			},
			{
				name: 'Action_UndoCheckOutSequences',
				value: 'POST /UndoCheckOutSequences',
				description: 'Execute UndoCheckOutSequences - post /UndoCheckOutSequences',
				action: 'Action_UndoCheckOutSequences',
			},
			{
				name: 'Action_UndoCheckOutSkills',
				value: 'POST /UndoCheckOutSkills',
				description: 'Execute UndoCheckOutSkills - post /UndoCheckOutSkills',
				action: 'Action_UndoCheckOutSkills',
			},
			{
				name: 'Action_UndoCheckOutStandardCCs',
				value: 'POST /UndoCheckOutStandardCCs',
				description: 'Execute UndoCheckOutStandardCCs - post /UndoCheckOutStandardCCs',
				action: 'Action_UndoCheckOutStandardCCs',
			},
			{
				name: 'Action_UndoCheckOutToolings',
				value: 'POST /UndoCheckOutToolings',
				description: 'Execute UndoCheckOutToolings - post /UndoCheckOutToolings',
				action: 'Action_UndoCheckOutToolings',
			},
			{
				name: 'Action_UndoCheckOutWorkCenters',
				value: 'POST /UndoCheckOutWorkCenters',
				description: 'Execute UndoCheckOutWorkCenters - post /UndoCheckOutWorkCenters',
				action: 'Action_UndoCheckOutWorkCenters',
			},
			{
				name: 'Action_UpdateAssociativeToSCCLinks',
				value: 'POST /UpdateAssociativeToSCCLinks',
				description: 'Update Associative (WTPart) to SCC Links Multi Api - post /UpdateAssociativeToSCCLinks',
				action: 'Action_UpdateAssociativeToSCCLinks',
			},
			{
				name: 'Action_UpdateMPMStdCCUsageToProcessPlanLink',
				value: 'POST /UpdateMPMStdCCUsageToProcessPlanLink',
				description: 'Update MPMStdCCUsageToProcessPlanLinks Multi API - post /UpdateMPMStdCCUsageToProcessPlanLink',
				action: 'Action_UpdateMPMStdCCUsageToProcessPlanLink',
			},
			{
				name: 'Action_UpdateMPMStdCCUsageToResourceLinks',
				value: 'POST /UpdateMPMStdCCUsageToResourceLinks',
				description: 'Update Standard Control Characteristic Usage to Resource Links Multi Api - post /UpdateMPMStdCCUsageToResourceLinks',
				action: 'Action_UpdateMPMStdCCUsageToResourceLinks',
			},
			{
				name: 'Action_UpdateOperations',
				value: 'POST /UpdateOperations',
				description: 'Execute UpdateOperations - post /UpdateOperations',
				action: 'Action_UpdateOperations',
			},
			{
				name: 'Action_UpdateProcessMaterials',
				value: 'POST /UpdateProcessMaterials',
				description: 'Execute UpdateProcessMaterials - post /UpdateProcessMaterials',
				action: 'Action_UpdateProcessMaterials',
			},
			{
				name: 'Action_UpdateProcessPlans',
				value: 'POST /UpdateProcessPlans',
				description: 'Execute UpdateProcessPlans - post /UpdateProcessPlans',
				action: 'Action_UpdateProcessPlans',
			},
			{
				name: 'Action_UpdateSequences',
				value: 'POST /UpdateSequences',
				description: 'Execute UpdateSequences - post /UpdateSequences',
				action: 'Action_UpdateSequences',
			},
			{
				name: 'Action_UpdateSkills',
				value: 'POST /UpdateSkills',
				description: 'Execute UpdateSkills - post /UpdateSkills',
				action: 'Action_UpdateSkills',
			},
			{
				name: 'Action_UpdateStandardCCs',
				value: 'POST /UpdateStandardCCs',
				description: 'Execute UpdateStandardCCs - post /UpdateStandardCCs',
				action: 'Action_UpdateStandardCCs',
			},
			{
				name: 'Action_UpdateToolings',
				value: 'POST /UpdateToolings',
				description: 'Execute UpdateToolings - post /UpdateToolings',
				action: 'Action_UpdateToolings',
			},
			{
				name: 'Action_UpdateWorkCenters',
				value: 'POST /UpdateWorkCenters',
				description: 'Execute UpdateWorkCenters - post /UpdateWorkCenters',
				action: 'Action_UpdateWorkCenters',
			},
			{
				name: 'DeleteOperation',
				value: "DELETE /Operations('{OperationId}')",
				description: "DeleteOperation - delete /Operations('{OperationId}')",
				action: 'DeleteOperation',
			},
			{
				name: 'DeleteProcessMaterial',
				value: "DELETE /ProcessMaterials('{ProcessMaterialId}')",
				description: "DeleteProcessMaterial - delete /ProcessMaterials('{ProcessMaterialId}')",
				action: 'DeleteProcessMaterial',
			},
			{
				name: 'DeleteProcessPlan',
				value: "DELETE /ProcessPlans('{ProcessPlanId}')",
				description: "DeleteProcessPlan - delete /ProcessPlans('{ProcessPlanId}')",
				action: 'DeleteProcessPlan',
			},
			{
				name: 'DeleteSkill',
				value: "DELETE /Skills('{SkillId}')",
				description: "DeleteSkill - delete /Skills('{SkillId}')",
				action: 'DeleteSkill',
			},
			{
				name: 'DeleteStandardCC',
				value: "DELETE /StandardCCs('{StandardCCId}')",
				description: "DeleteStandardCC - delete /StandardCCs('{StandardCCId}')",
				action: 'DeleteStandardCC',
			},
			{
				name: 'DeleteTooling',
				value: "DELETE /Toolings('{ToolingId}')",
				description: "DeleteTooling - delete /Toolings('{ToolingId}')",
				action: 'DeleteTooling',
			},
			{
				name: 'DeleteWorkCenter',
				value: "DELETE /WorkCenters('{WorkCenterId}')",
				description: "DeleteWorkCenter - delete /WorkCenters('{WorkCenterId}')",
				action: 'DeleteWorkCenter',
			},
			{
				name: 'DocumentManageable.Creator.GetUser',
				value: "GET /DocumentManageables('{DocumentManageableId}')/Creator",
				description: "Get User - get /DocumentManageables('{DocumentManageableId}')/Creator",
				action: 'DocumentManageable.Creator.GetUser',
			},
			{
				name: 'DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /DocumentManageables('{DocumentManageableId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /DocumentManageables('{DocumentManageableId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /DocumentManageables('{DocumentManageableId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /DocumentManageables('{DocumentManageableId}')/DocumentDescribeLinks",
				action: 'DocumentManageable.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /DocumentManageables('{DocumentManageableId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /DocumentManageables('{DocumentManageableId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /DocumentManageables('{DocumentManageableId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /DocumentManageables('{DocumentManageableId}')/DocumentReferenceLinks",
				action: 'DocumentManageable.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'DocumentManageable.Modifier.GetUser',
				value: "GET /DocumentManageables('{DocumentManageableId}')/Modifier",
				description: "Get User - get /DocumentManageables('{DocumentManageableId}')/Modifier",
				action: 'DocumentManageable.Modifier.GetUser',
			},
			{
				name: 'EPMDocumentManageable.Creator.GetUser',
				value: "GET /EPMDocumentManageables('{EPMDocumentManageableId}')/Creator",
				description: "Get User - get /EPMDocumentManageables('{EPMDocumentManageableId}')/Creator",
				action: 'EPMDocumentManageable.Creator.GetUser',
			},
			{
				name: 'EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLink',
				value: "GET /EPMDocumentManageables('{EPMDocumentManageableId}')/EPMDocumentDescribeLinks('{MpmEpmDocumentDescribeLinkId}')",
				description: "Get MpmEpmDocumentDescribeLink for a given MpmEpmDocumentDescribeLinkId - get /EPMDocumentManageables('{EPMDocumentManageableId}')/EPMDocumentDescribeLinks('{MpmEpmDocumentDescribeLinkId}')",
				action: 'EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLink',
			},
			{
				name: 'EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLinks',
				value: "GET /EPMDocumentManageables('{EPMDocumentManageableId}')/EPMDocumentDescribeLinks",
				description: "Get MpmEpmDocumentDescribeLink - get /EPMDocumentManageables('{EPMDocumentManageableId}')/EPMDocumentDescribeLinks",
				action: 'EPMDocumentManageable.EPMDocumentDescribeLinks.GetMpmEpmDocumentDescribeLinks',
			},
			{
				name: 'EPMDocumentManageable.Modifier.GetUser',
				value: "GET /EPMDocumentManageables('{EPMDocumentManageableId}')/Modifier",
				description: "Get User - get /EPMDocumentManageables('{EPMDocumentManageableId}')/Modifier",
				action: 'EPMDocumentManageable.Modifier.GetUser',
			},
			{
				name: 'GetConsumableResources',
				value: 'GET /Resources/PTC.MfgProcMgmt.ConsumableResource',
				description: 'Get Resources of type ConsumableResource - get /Resources/PTC.MfgProcMgmt.ConsumableResource',
				action: 'GetConsumableResources',
			},
			{
				name: 'GetDocumentManageable',
				value: "GET /DocumentManageables('{DocumentManageableId}')",
				description: "Get DocumentManageable for a given DocumentManageableId - get /DocumentManageables('{DocumentManageableId}')",
				action: 'GetDocumentManageable',
			},
			{
				name: 'GetDocumentManageables',
				value: 'GET /DocumentManageables',
				description: 'Get DocumentManageables - get /DocumentManageables',
				action: 'GetDocumentManageables',
			},
			{
				name: 'GetEPMDocumentManageable',
				value: "GET /EPMDocumentManageables('{EPMDocumentManageableId}')",
				description: "Get EPMDocumentManageable for a given EPMDocumentManageableId - get /EPMDocumentManageables('{EPMDocumentManageableId}')",
				action: 'GetEPMDocumentManageable',
			},
			{
				name: 'GetEPMDocumentManageables',
				value: 'GET /EPMDocumentManageables',
				description: 'Get EPMDocumentManageables - get /EPMDocumentManageables',
				action: 'GetEPMDocumentManageables',
			},
			{
				name: 'GetMaterial',
				value: "GET /Materials('{MaterialId}')",
				description: "Get Material for a given MaterialId - get /Materials('{MaterialId}')",
				action: 'GetMaterial',
			},
			{
				name: 'GetMaterials',
				value: 'GET /Materials',
				description: 'Get Materials - get /Materials',
				action: 'GetMaterials',
			},
			{
				name: 'GetMPMStandardOperations',
				value: 'GetMPMStandardOperations',
				description: 'Get DocumentManageables of type MPMStandardOperation - get /DocumentManageables/PTC.MfgProcMgmt.MPMStandardOperation',
				action: 'GetMPMStandardOperations',
			},
			{
				name: 'GetOperation',
				value: "GET /Operations('{OperationId}')",
				description: "Get Operation for a given OperationId - get /Operations('{OperationId}')",
				action: 'GetOperation',
			},
			{
				name: 'GetOperationHolder',
				value: "GET /OperationHolders('{OperationHolderId}')",
				description: "Get OperationHolder for a given OperationHolderId - get /OperationHolders('{OperationHolderId}')",
				action: 'GetOperationHolder',
			},
			{
				name: 'GetOperationHolders',
				value: 'GET /OperationHolders',
				description: 'Get OperationHolders - get /OperationHolders',
				action: 'GetOperationHolders',
			},
			{
				name: 'GetOperations',
				value: 'GET /Operations',
				description: 'Get Operations - get /Operations',
				action: 'GetOperations',
			},
			{
				name: 'GetProcessMaterial',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')",
				description: "Get ProcessMaterial for a given ProcessMaterialId - get /ProcessMaterials('{ProcessMaterialId}')",
				action: 'GetProcessMaterial',
			},
			{
				name: 'GetProcessMaterials',
				value: 'GET /ProcessMaterials',
				description: 'Get ProcessMaterials - get /ProcessMaterials',
				action: 'GetProcessMaterials',
			},
			{
				name: 'GetProcessPlan',
				value: "GET /ProcessPlans('{ProcessPlanId}')",
				description: "Get ProcessPlan for a given ProcessPlanId - get /ProcessPlans('{ProcessPlanId}')",
				action: 'GetProcessPlan',
			},
			{
				name: 'GetProcessPlans',
				value: 'GET /ProcessPlans',
				description: 'Get ProcessPlans - get /ProcessPlans',
				action: 'GetProcessPlans',
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
				name: 'GetSequence',
				value: "GET /Sequences('{SequenceId}')",
				description: "Get Sequence for a given SequenceId - get /Sequences('{SequenceId}')",
				action: 'GetSequence',
			},
			{
				name: 'GetSequenceHolder',
				value: "GET /SequenceHolders('{SequenceHolderId}')",
				description: "Get SequenceHolder for a given SequenceHolderId - get /SequenceHolders('{SequenceHolderId}')",
				action: 'GetSequenceHolder',
			},
			{
				name: 'GetSequenceHolders',
				value: 'GET /SequenceHolders',
				description: 'Get SequenceHolders - get /SequenceHolders',
				action: 'GetSequenceHolders',
			},
			{
				name: 'GetSequences',
				value: 'GET /Sequences',
				description: 'Get Sequences - get /Sequences',
				action: 'GetSequences',
			},
			{
				name: 'GetSkill',
				value: "GET /Skills('{SkillId}')",
				description: "Get Skill for a given SkillId - get /Skills('{SkillId}')",
				action: 'GetSkill',
			},
			{
				name: 'GetSkills',
				value: 'GET /Skills',
				description: 'Get Skills - get /Skills',
				action: 'GetSkills',
			},
			{
				name: 'GetStandardCC',
				value: "GET /StandardCCs('{StandardCCId}')",
				description: "Get StandardCC for a given StandardCCId - get /StandardCCs('{StandardCCId}')",
				action: 'GetStandardCC',
			},
			{
				name: 'GetStandardCCs',
				value: 'GET /StandardCCs',
				description: 'Get StandardCCs - get /StandardCCs',
				action: 'GetStandardCCs',
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
				name: 'GetTooling',
				value: "GET /Toolings('{ToolingId}')",
				description: "Get Tooling for a given ToolingId - get /Toolings('{ToolingId}')",
				action: 'GetTooling',
			},
			{
				name: 'GetToolings',
				value: 'GET /Toolings',
				description: 'Get Toolings - get /Toolings',
				action: 'GetToolings',
			},
			{
				name: 'GetWorkCenter',
				value: "GET /WorkCenters('{WorkCenterId}')",
				description: "Get WorkCenter for a given WorkCenterId - get /WorkCenters('{WorkCenterId}')",
				action: 'GetWorkCenter',
			},
			{
				name: 'GetWorkCenters',
				value: 'GET /WorkCenters',
				description: 'Get WorkCenters - get /WorkCenters',
				action: 'GetWorkCenters',
			},
			{
				name: 'Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLink',
				value: "GET /Materials('{MaterialId}')/AssociativeToSCCLinks('{AssociativeToStandardCCLinkId}')",
				description: "Get AssociativeToStandardCCLink for a given AssociativeToStandardCCLinkId - get /Materials('{MaterialId}')/AssociativeToSCCLinks('{AssociativeToStandardCCLinkId}')",
				action: 'Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLink',
			},
			{
				name: 'Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLinks',
				value: "GET /Materials('{MaterialId}')/AssociativeToSCCLinks",
				description: "Get AssociativeToStandardCCLink - get /Materials('{MaterialId}')/AssociativeToSCCLinks",
				action: 'Material.AssociativeToSCCLinks.GetAssociativeToStandardCCLinks',
			},
			{
				name: 'Material.Context.GetContainer',
				value: "GET /Materials('{MaterialId}')/Context",
				description: "Get Container - get /Materials('{MaterialId}')/Context",
				action: 'Material.Context.GetContainer',
			},
			{
				name: 'Material.Creator.GetUser',
				value: "GET /Materials('{MaterialId}')/Creator",
				description: "Get User - get /Materials('{MaterialId}')/Creator",
				action: 'Material.Creator.GetUser',
			},
			{
				name: 'Material.Folder.GetFolder',
				value: "GET /Materials('{MaterialId}')/Folder",
				description: "Get Folder - get /Materials('{MaterialId}')/Folder",
				action: 'Material.Folder.GetFolder',
			},
			{
				name: 'Material.Modifier.GetUser',
				value: "GET /Materials('{MaterialId}')/Modifier",
				description: "Get User - get /Materials('{MaterialId}')/Modifier",
				action: 'Material.Modifier.GetUser',
			},
			{
				name: 'Material.Organization.GetOrganization',
				value: "GET /Materials('{MaterialId}')/Organization",
				description: "Get Organization - get /Materials('{MaterialId}')/Organization",
				action: 'Material.Organization.GetOrganization',
			},
			{
				name: 'Material.PartToProcessPlanLinks.GetPartToProcessPlanLink',
				value: "GET /Materials('{MaterialId}')/PartToProcessPlanLinks('{PartToProcessPlanLinkId}')",
				description: "Get PartToProcessPlanLink for a given PartToProcessPlanLinkId - get /Materials('{MaterialId}')/PartToProcessPlanLinks('{PartToProcessPlanLinkId}')",
				action: 'Material.PartToProcessPlanLinks.GetPartToProcessPlanLink',
			},
			{
				name: 'Material.PartToProcessPlanLinks.GetPartToProcessPlanLinks',
				value: "GET /Materials('{MaterialId}')/PartToProcessPlanLinks",
				description: "Get PartToProcessPlanLink - get /Materials('{MaterialId}')/PartToProcessPlanLinks",
				action: 'Material.PartToProcessPlanLinks.GetPartToProcessPlanLinks',
			},
			{
				name: 'Material.Representations.GetRepresentation',
				value: "GET /Materials('{MaterialId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Materials('{MaterialId}')/Representations('{RepresentationId}')",
				action: 'Material.Representations.GetRepresentation',
			},
			{
				name: 'Material.Representations.GetRepresentations',
				value: "GET /Materials('{MaterialId}')/Representations",
				description: "Get Representation - get /Materials('{MaterialId}')/Representations",
				action: 'Material.Representations.GetRepresentations',
			},
			{
				name: 'Material.Revisions.GetMaterial',
				value: "GET /Materials('{MaterialId}')/Revisions('{RevisionsId}')",
				description: "Get Material for a given RevisionsId - get /Materials('{MaterialId}')/Revisions('{RevisionsId}')",
				action: 'Material.Revisions.GetMaterial',
			},
			{
				name: 'Material.Revisions.GetMaterials',
				value: "GET /Materials('{MaterialId}')/Revisions",
				description: "Get Material - get /Materials('{MaterialId}')/Revisions",
				action: 'Material.Revisions.GetMaterials',
			},
			{
				name: 'Material.Versions.GetMaterial',
				value: "GET /Materials('{MaterialId}')/Versions('{VersionsId}')",
				description: "Get Material for a given VersionsId - get /Materials('{MaterialId}')/Versions('{VersionsId}')",
				action: 'Material.Versions.GetMaterial',
			},
			{
				name: 'Material.Versions.GetMaterials',
				value: "GET /Materials('{MaterialId}')/Versions",
				description: "Get Material - get /Materials('{MaterialId}')/Versions",
				action: 'Material.Versions.GetMaterials',
			},
			{
				name: 'Operation.AssignedOptionSet.GetOptionSet',
				value: "GET /Operations('{OperationId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Operations('{OperationId}')/AssignedOptionSet",
				action: 'Operation.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'Operation.Context.GetContainer',
				value: "GET /Operations('{OperationId}')/Context",
				description: "Get Container - get /Operations('{OperationId}')/Context",
				action: 'Operation.Context.GetContainer',
			},
			{
				name: 'Operation.Creator.GetUser',
				value: "GET /Operations('{OperationId}')/Creator",
				description: "Get User - get /Operations('{OperationId}')/Creator",
				action: 'Operation.Creator.GetUser',
			},
			{
				name: 'Operation.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /Operations('{OperationId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /Operations('{OperationId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'Operation.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'Operation.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /Operations('{OperationId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /Operations('{OperationId}')/DocumentDescribeLinks",
				action: 'Operation.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'Operation.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /Operations('{OperationId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /Operations('{OperationId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'Operation.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'Operation.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /Operations('{OperationId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /Operations('{OperationId}')/DocumentReferenceLinks",
				action: 'Operation.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'Operation.Effectivities.GetEffectivity',
				value: "GET /Operations('{OperationId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Operations('{OperationId}')/Effectivities('{EffectivityId}')",
				action: 'Operation.Effectivities.GetEffectivity',
			},
			{
				name: 'Operation.Effectivities.GetEffectivitys',
				value: "GET /Operations('{OperationId}')/Effectivities",
				description: "Get Effectivity - get /Operations('{OperationId}')/Effectivities",
				action: 'Operation.Effectivities.GetEffectivitys',
			},
			{
				name: 'Operation.Folder.GetFolder',
				value: "GET /Operations('{OperationId}')/Folder",
				description: "Get Folder - get /Operations('{OperationId}')/Folder",
				action: 'Operation.Folder.GetFolder',
			},
			{
				name: 'Operation.Modifier.GetUser',
				value: "GET /Operations('{OperationId}')/Modifier",
				description: "Get User - get /Operations('{OperationId}')/Modifier",
				action: 'Operation.Modifier.GetUser',
			},
			{
				name: 'Operation.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
				value: "DELETE /Operations('{OperationId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Delete an existing OperationHolderUsageLink - delete /Operations('{OperationId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'Operation.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
			},
			{
				name: 'Operation.OperationHolderUsageLink.GetOperationHolderUsageLink',
				value: "GET /Operations('{OperationId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Get OperationHolderUsageLink for a given OperationHolderUsageLinkId - get /Operations('{OperationId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'Operation.OperationHolderUsageLink.GetOperationHolderUsageLink',
			},
			{
				name: 'Operation.OperationHolderUsageLink.GetOperationHolderUsageLinks',
				value: "GET /Operations('{OperationId}')/OperationHolderUsageLink",
				description: "Get OperationHolderUsageLink - get /Operations('{OperationId}')/OperationHolderUsageLink",
				action: 'Operation.OperationHolderUsageLink.GetOperationHolderUsageLinks',
			},
			{
				name: 'Operation.OperationToConsumableLinks.DeletePTC.MfgProcMgmt.OperationToConsumableLink',
				value: "DELETE /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				description: "Delete an existing OperationToConsumableLink - delete /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				action: 'Operation.OperationToConsumableLinks.DeletePTC.MfgProcMgmt.OperationToConsumableLink',
			},
			{
				name: 'Operation.OperationToConsumableLinks.GetOperationToConsumableLink',
				value: "GET /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				description: "Get OperationToConsumableLink for a given OperationToConsumableLinkId - get /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				action: 'Operation.OperationToConsumableLinks.GetOperationToConsumableLink',
			},
			{
				name: 'Operation.OperationToConsumableLinks.GetOperationToConsumableLinks',
				value: "GET /Operations('{OperationId}')/OperationToConsumableLinks",
				description: "Get OperationToConsumableLink - get /Operations('{OperationId}')/OperationToConsumableLinks",
				action: 'Operation.OperationToConsumableLinks.GetOperationToConsumableLinks',
			},
			{
				name: 'Operation.OperationToConsumableLinks.PostOperationToConsumableLink',
				value: "POST /Operations('{OperationId}')/OperationToConsumableLinks",
				description: "Create OperationToConsumableLink - post /Operations('{OperationId}')/OperationToConsumableLinks",
				action: 'Operation.OperationToConsumableLinks.PostOperationToConsumableLink',
			},
			{
				name: 'Operation.OperationToConsumableLinks.UpdateOperationToConsumableLink',
				value: "PATCH /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				description: "Update an existing OperationToConsumableLink - patch /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				action: 'Operation.OperationToConsumableLinks.UpdateOperationToConsumableLink',
			},
			{
				name: 'Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLink',
				value: "GET /Operations('{OperationId}')/OperationToOperatedPartLink('{OperationToOperatedPartLinkId}')",
				description: "Get OperationToOperatedPartLink for a given OperationToOperatedPartLinkId - get /Operations('{OperationId}')/OperationToOperatedPartLink('{OperationToOperatedPartLinkId}')",
				action: 'Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLink',
			},
			{
				name: 'Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLinks',
				value: "GET /Operations('{OperationId}')/OperationToOperatedPartLink",
				description: "Get OperationToOperatedPartLink - get /Operations('{OperationId}')/OperationToOperatedPartLink",
				action: 'Operation.OperationToOperatedPartLink.GetOperationToOperatedPartLinks',
			},
			{
				name: 'Operation.OperationToPartLink.GetOperationToPartLink',
				value: "GET /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
				description: "Get OperationToPartLink for a given OperationToPartLinkId - get /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
				action: 'Operation.OperationToPartLink.GetOperationToPartLink',
			},
			{
				name: 'Operation.OperationToPartLink.GetOperationToPartLinks',
				value: "GET /Operations('{OperationId}')/OperationToPartLink",
				description: "Get OperationToPartLink - get /Operations('{OperationId}')/OperationToPartLink",
				action: 'Operation.OperationToPartLink.GetOperationToPartLinks',
			},
			{
				name: 'Operation.OperationToPartLink.UpdateOperationToPartLink',
				value: "PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
				description: "Update an existing OperationToPartLink - patch /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
				action: 'Operation.OperationToPartLink.UpdateOperationToPartLink',
			},
			{
				name: 'Operation.OperationToWorkCenterLinks.DeletePTC.MfgProcMgmt.OperationToWorkCenterLink',
				value: "DELETE /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				description: "Delete an existing OperationToWorkCenterLink - delete /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				action: 'Operation.OperationToWorkCenterLinks.DeletePTC.MfgProcMgmt.OperationToWorkCenterLink',
			},
			{
				name: 'Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLink',
				value: "GET /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				description: "Get OperationToWorkCenterLink for a given OperationToWorkCenterLinkId - get /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				action: 'Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLink',
			},
			{
				name: 'Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLinks',
				value: "GET /Operations('{OperationId}')/OperationToWorkCenterLinks",
				description: "Get OperationToWorkCenterLink - get /Operations('{OperationId}')/OperationToWorkCenterLinks",
				action: 'Operation.OperationToWorkCenterLinks.GetOperationToWorkCenterLinks',
			},
			{
				name: 'Operation.OperationToWorkCenterLinks.UpdateOperationToWorkCenterLink',
				value: "PATCH /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				description: "Update an existing OperationToWorkCenterLink - patch /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				action: 'Operation.OperationToWorkCenterLinks.UpdateOperationToWorkCenterLink',
			},
			{
				name: 'Operation.OperationUsageLinks.GetOperationUsageLink',
				value: "GET /Operations('{OperationId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				description: "Get OperationUsageLink for a given OperationUsageLinkId - get /Operations('{OperationId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				action: 'Operation.OperationUsageLinks.GetOperationUsageLink',
			},
			{
				name: 'Operation.OperationUsageLinks.GetOperationUsageLinks',
				value: "GET /Operations('{OperationId}')/OperationUsageLinks",
				description: "Get OperationUsageLink - get /Operations('{OperationId}')/OperationUsageLinks",
				action: 'Operation.OperationUsageLinks.GetOperationUsageLinks',
			},
			{
				name: 'Operation.Organization.GetOrganization',
				value: "GET /Operations('{OperationId}')/Organization",
				description: "Get Organization - get /Operations('{OperationId}')/Organization",
				action: 'Operation.Organization.GetOrganization',
			},
			{
				name: 'Operation.Representations.GetRepresentation',
				value: "GET /Operations('{OperationId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Operations('{OperationId}')/Representations('{RepresentationId}')",
				action: 'Operation.Representations.GetRepresentation',
			},
			{
				name: 'Operation.Representations.GetRepresentations',
				value: "GET /Operations('{OperationId}')/Representations",
				description: "Get Representation - get /Operations('{OperationId}')/Representations",
				action: 'Operation.Representations.GetRepresentations',
			},
			{
				name: 'Operation.ResultedByObjects.GetChangeItem',
				value: "GET /Operations('{OperationId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Operations('{OperationId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'Operation.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'Operation.ResultedByObjects.GetChangeItems',
				value: "GET /Operations('{OperationId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Operations('{OperationId}')/ResultedByObjects",
				action: 'Operation.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'Operation.Revisions.GetOperation',
				value: "GET /Operations('{OperationId}')/Revisions('{RevisionsId}')",
				description: "Get Operation for a given RevisionsId - get /Operations('{OperationId}')/Revisions('{RevisionsId}')",
				action: 'Operation.Revisions.GetOperation',
			},
			{
				name: 'Operation.Revisions.GetOperations',
				value: "GET /Operations('{OperationId}')/Revisions",
				description: "Get Operation - get /Operations('{OperationId}')/Revisions",
				action: 'Operation.Revisions.GetOperations',
			},
			{
				name: 'Operation.StandardCCLinks.GetOperationToStandardCCLink',
				value: "GET /Operations('{OperationId}')/StandardCCLinks('{OperationToStandardCCLinkId}')",
				description: "Get OperationToStandardCCLink for a given OperationToStandardCCLinkId - get /Operations('{OperationId}')/StandardCCLinks('{OperationToStandardCCLinkId}')",
				action: 'Operation.StandardCCLinks.GetOperationToStandardCCLink',
			},
			{
				name: 'Operation.StandardCCLinks.GetOperationToStandardCCLinks',
				value: "GET /Operations('{OperationId}')/StandardCCLinks",
				description: "Get OperationToStandardCCLink - get /Operations('{OperationId}')/StandardCCLinks",
				action: 'Operation.StandardCCLinks.GetOperationToStandardCCLinks',
			},
			{
				name: 'Operation.StandardProcedureLink.GetStandardProcedureLink',
				value: "GET /Operations('{OperationId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				description: "Get StandardProcedureLink for a given StandardProcedureLinkId - get /Operations('{OperationId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				action: 'Operation.StandardProcedureLink.GetStandardProcedureLink',
			},
			{
				name: 'Operation.StandardProcedureLink.GetStandardProcedureLinks',
				value: "GET /Operations('{OperationId}')/StandardProcedureLink",
				description: "Get StandardProcedureLink - get /Operations('{OperationId}')/StandardProcedureLink",
				action: 'Operation.StandardProcedureLink.GetStandardProcedureLinks',
			},
			{
				name: 'Operation.StandardProcedureLink.PostStandardProcedureLink',
				value: "POST /Operations('{OperationId}')/StandardProcedureLink",
				description: "Create StandardProcedureLink - post /Operations('{OperationId}')/StandardProcedureLink",
				action: 'Operation.StandardProcedureLink.PostStandardProcedureLink',
			},
			{
				name: 'Operation.Versions.GetOperation',
				value: "GET /Operations('{OperationId}')/Versions('{VersionsId}')",
				description: "Get Operation for a given VersionsId - get /Operations('{OperationId}')/Versions('{VersionsId}')",
				action: 'Operation.Versions.GetOperation',
			},
			{
				name: 'Operation.Versions.GetOperations',
				value: "GET /Operations('{OperationId}')/Versions",
				description: "Get Operation - get /Operations('{OperationId}')/Versions",
				action: 'Operation.Versions.GetOperations',
			},
			{
				name: 'OperationHolder.Creator.GetUser',
				value: "GET /OperationHolders('{OperationHolderId}')/Creator",
				description: "Get User - get /OperationHolders('{OperationHolderId}')/Creator",
				action: 'OperationHolder.Creator.GetUser',
			},
			{
				name: 'OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /OperationHolders('{OperationHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /OperationHolders('{OperationHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /OperationHolders('{OperationHolderId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /OperationHolders('{OperationHolderId}')/DocumentDescribeLinks",
				action: 'OperationHolder.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /OperationHolders('{OperationHolderId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /OperationHolders('{OperationHolderId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /OperationHolders('{OperationHolderId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /OperationHolders('{OperationHolderId}')/DocumentReferenceLinks",
				action: 'OperationHolder.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'OperationHolder.Modifier.GetUser',
				value: "GET /OperationHolders('{OperationHolderId}')/Modifier",
				description: "Get User - get /OperationHolders('{OperationHolderId}')/Modifier",
				action: 'OperationHolder.Modifier.GetUser',
			},
			{
				name: 'OperationHolder.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
				value: "DELETE /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Delete an existing OperationHolderUsageLink - delete /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'OperationHolder.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
			},
			{
				name: 'OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLink',
				value: "GET /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Get OperationHolderUsageLink for a given OperationHolderUsageLinkId - get /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLink',
			},
			{
				name: 'OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLinks',
				value: "GET /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink",
				description: "Get OperationHolderUsageLink - get /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink",
				action: 'OperationHolder.OperationHolderUsageLink.GetOperationHolderUsageLinks',
			},
			{
				name: 'OperationHolder.OperationUsageLinks.GetOperationUsageLink',
				value: "GET /OperationHolders('{OperationHolderId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				description: "Get OperationUsageLink for a given OperationUsageLinkId - get /OperationHolders('{OperationHolderId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				action: 'OperationHolder.OperationUsageLinks.GetOperationUsageLink',
			},
			{
				name: 'OperationHolder.OperationUsageLinks.GetOperationUsageLinks',
				value: "GET /OperationHolders('{OperationHolderId}')/OperationUsageLinks",
				description: "Get OperationUsageLink - get /OperationHolders('{OperationHolderId}')/OperationUsageLinks",
				action: 'OperationHolder.OperationUsageLinks.GetOperationUsageLinks',
			},
			{
				name: 'PostOperation',
				value: 'POST /Operations',
				description: 'Create Operation - post /Operations',
				action: 'PostOperation',
			},
			{
				name: 'PostProcessMaterial',
				value: 'POST /ProcessMaterials',
				description: 'Create ProcessMaterial - post /ProcessMaterials',
				action: 'PostProcessMaterial',
			},
			{
				name: 'PostProcessPlan',
				value: 'POST /ProcessPlans',
				description: 'Create ProcessPlan - post /ProcessPlans',
				action: 'PostProcessPlan',
			},
			{
				name: 'PostSequence',
				value: 'POST /Sequences',
				description: 'Create Sequence - post /Sequences',
				action: 'PostSequence',
			},
			{
				name: 'PostSkill',
				value: 'POST /Skills',
				description: 'Create Skill - post /Skills',
				action: 'PostSkill',
			},
			{
				name: 'PostStandardCC',
				value: 'POST /StandardCCs',
				description: 'Create StandardCC - post /StandardCCs',
				action: 'PostStandardCC',
			},
			{
				name: 'PostTooling',
				value: 'POST /Toolings',
				description: 'Create Tooling - post /Toolings',
				action: 'PostTooling',
			},
			{
				name: 'PostWorkCenter',
				value: 'POST /WorkCenters',
				description: 'Create WorkCenter - post /WorkCenters',
				action: 'PostWorkCenter',
			},
			{
				name: 'ProcessMaterial.AssignedOptionSet.GetOptionSet',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/AssignedOptionSet",
				description: "Get OptionSet - get /ProcessMaterials('{ProcessMaterialId}')/AssignedOptionSet",
				action: 'ProcessMaterial.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'ProcessMaterial.Context.GetContainer',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Context",
				description: "Get Container - get /ProcessMaterials('{ProcessMaterialId}')/Context",
				action: 'ProcessMaterial.Context.GetContainer',
			},
			{
				name: 'ProcessMaterial.Creator.GetUser',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Creator",
				description: "Get User - get /ProcessMaterials('{ProcessMaterialId}')/Creator",
				action: 'ProcessMaterial.Creator.GetUser',
			},
			{
				name: 'ProcessMaterial.DescribedBy.GetResourceDescribeLink',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/DescribedBy('{ResourceDescribeLinkId}')",
				description: "Get ResourceDescribeLink for a given ResourceDescribeLinkId - get /ProcessMaterials('{ProcessMaterialId}')/DescribedBy('{ResourceDescribeLinkId}')",
				action: 'ProcessMaterial.DescribedBy.GetResourceDescribeLink',
			},
			{
				name: 'ProcessMaterial.DescribedBy.GetResourceDescribeLinks',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/DescribedBy",
				description: "Get ResourceDescribeLink - get /ProcessMaterials('{ProcessMaterialId}')/DescribedBy",
				action: 'ProcessMaterial.DescribedBy.GetResourceDescribeLinks',
			},
			{
				name: 'ProcessMaterial.Effectivities.GetEffectivity',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /ProcessMaterials('{ProcessMaterialId}')/Effectivities('{EffectivityId}')",
				action: 'ProcessMaterial.Effectivities.GetEffectivity',
			},
			{
				name: 'ProcessMaterial.Effectivities.GetEffectivitys',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Effectivities",
				description: "Get Effectivity - get /ProcessMaterials('{ProcessMaterialId}')/Effectivities",
				action: 'ProcessMaterial.Effectivities.GetEffectivitys',
			},
			{
				name: 'ProcessMaterial.Folder.GetFolder',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Folder",
				description: "Get Folder - get /ProcessMaterials('{ProcessMaterialId}')/Folder",
				action: 'ProcessMaterial.Folder.GetFolder',
			},
			{
				name: 'ProcessMaterial.Modifier.GetUser',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Modifier",
				description: "Get User - get /ProcessMaterials('{ProcessMaterialId}')/Modifier",
				action: 'ProcessMaterial.Modifier.GetUser',
			},
			{
				name: 'ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLink',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				description: "Get MPMCompatibilityLink for a given MPMCompatibilityLinkId - get /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				action: 'ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLink',
			},
			{
				name: 'ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks",
				description: "Get MPMCompatibilityLink - get /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks",
				action: 'ProcessMaterial.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
			},
			{
				name: 'ProcessMaterial.MPMCompatibilityLinks.PostMPMCompatibilityLink',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink - post /ProcessMaterials('{ProcessMaterialId}')/MPMCompatibilityLinks",
				action: 'ProcessMaterial.MPMCompatibilityLinks.PostMPMCompatibilityLink',
			},
			{
				name: 'ProcessMaterial.Organization.GetOrganization',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Organization",
				description: "Get Organization - get /ProcessMaterials('{ProcessMaterialId}')/Organization",
				action: 'ProcessMaterial.Organization.GetOrganization',
			},
			{
				name: 'ProcessMaterial.PartDocAssociations.GetPartDocAssociation',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /ProcessMaterials('{ProcessMaterialId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'ProcessMaterial.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'ProcessMaterial.PartDocAssociations.GetPartDocAssociations',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/PartDocAssociations",
				description: "Get PartDocAssociation - get /ProcessMaterials('{ProcessMaterialId}')/PartDocAssociations",
				action: 'ProcessMaterial.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'ProcessMaterial.References.GetResourceReferenceLink',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/References('{ResourceReferenceLinkId}')",
				description: "Get ResourceReferenceLink for a given ResourceReferenceLinkId - get /ProcessMaterials('{ProcessMaterialId}')/References('{ResourceReferenceLinkId}')",
				action: 'ProcessMaterial.References.GetResourceReferenceLink',
			},
			{
				name: 'ProcessMaterial.References.GetResourceReferenceLinks',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/References",
				description: "Get ResourceReferenceLink - get /ProcessMaterials('{ProcessMaterialId}')/References",
				action: 'ProcessMaterial.References.GetResourceReferenceLinks',
			},
			{
				name: 'ProcessMaterial.ResultedByObjects.GetChangeItem',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProcessMaterials('{ProcessMaterialId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'ProcessMaterial.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'ProcessMaterial.ResultedByObjects.GetChangeItems',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/ResultedByObjects",
				description: "Get ChangeItem - get /ProcessMaterials('{ProcessMaterialId}')/ResultedByObjects",
				action: 'ProcessMaterial.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'ProcessMaterial.Revisions.GetProcessMaterial',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Revisions('{RevisionsId}')",
				description: "Get ProcessMaterial for a given RevisionsId - get /ProcessMaterials('{ProcessMaterialId}')/Revisions('{RevisionsId}')",
				action: 'ProcessMaterial.Revisions.GetProcessMaterial',
			},
			{
				name: 'ProcessMaterial.Revisions.GetProcessMaterials',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Revisions",
				description: "Get ProcessMaterial - get /ProcessMaterials('{ProcessMaterialId}')/Revisions",
				action: 'ProcessMaterial.Revisions.GetProcessMaterials',
			},
			{
				name: 'ProcessMaterial.Uses.DeletePTC.ProdMgmt.PartUse',
				value: "DELETE /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				action: 'ProcessMaterial.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'ProcessMaterial.Uses.GetPartUse',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				action: 'ProcessMaterial.Uses.GetPartUse',
			},
			{
				name: 'ProcessMaterial.Uses.GetPartUses',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Uses",
				description: "Get PartUse - get /ProcessMaterials('{ProcessMaterialId}')/Uses",
				action: 'ProcessMaterial.Uses.GetPartUses',
			},
			{
				name: 'ProcessMaterial.Uses.PostPartUse',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/Uses",
				description: "Create PartUse - post /ProcessMaterials('{ProcessMaterialId}')/Uses",
				action: 'ProcessMaterial.Uses.PostPartUse',
			},
			{
				name: 'ProcessMaterial.Uses.UpdatePartUse',
				value: "PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				action: 'ProcessMaterial.Uses.UpdatePartUse',
			},
			{
				name: 'ProcessMaterial.Versions.GetProcessMaterial',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Versions('{VersionsId}')",
				description: "Get ProcessMaterial for a given VersionsId - get /ProcessMaterials('{ProcessMaterialId}')/Versions('{VersionsId}')",
				action: 'ProcessMaterial.Versions.GetProcessMaterial',
			},
			{
				name: 'ProcessMaterial.Versions.GetProcessMaterials',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/Versions",
				description: "Get ProcessMaterial - get /ProcessMaterials('{ProcessMaterialId}')/Versions",
				action: 'ProcessMaterial.Versions.GetProcessMaterials',
			},
			{
				name: 'ProcessPlan.AssignedOptionSet.GetOptionSet',
				value: "GET /ProcessPlans('{ProcessPlanId}')/AssignedOptionSet",
				description: "Get OptionSet - get /ProcessPlans('{ProcessPlanId}')/AssignedOptionSet",
				action: 'ProcessPlan.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'ProcessPlan.Context.GetContainer',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Context",
				description: "Get Container - get /ProcessPlans('{ProcessPlanId}')/Context",
				action: 'ProcessPlan.Context.GetContainer',
			},
			{
				name: 'ProcessPlan.Creator.GetUser',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Creator",
				description: "Get User - get /ProcessPlans('{ProcessPlanId}')/Creator",
				action: 'ProcessPlan.Creator.GetUser',
			},
			{
				name: 'ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /ProcessPlans('{ProcessPlanId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /ProcessPlans('{ProcessPlanId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /ProcessPlans('{ProcessPlanId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /ProcessPlans('{ProcessPlanId}')/DocumentDescribeLinks",
				action: 'ProcessPlan.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /ProcessPlans('{ProcessPlanId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /ProcessPlans('{ProcessPlanId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /ProcessPlans('{ProcessPlanId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /ProcessPlans('{ProcessPlanId}')/DocumentReferenceLinks",
				action: 'ProcessPlan.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'ProcessPlan.Effectivities.GetEffectivity',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /ProcessPlans('{ProcessPlanId}')/Effectivities('{EffectivityId}')",
				action: 'ProcessPlan.Effectivities.GetEffectivity',
			},
			{
				name: 'ProcessPlan.Effectivities.GetEffectivitys',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Effectivities",
				description: "Get Effectivity - get /ProcessPlans('{ProcessPlanId}')/Effectivities",
				action: 'ProcessPlan.Effectivities.GetEffectivitys',
			},
			{
				name: 'ProcessPlan.Folder.GetFolder',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Folder",
				description: "Get Folder - get /ProcessPlans('{ProcessPlanId}')/Folder",
				action: 'ProcessPlan.Folder.GetFolder',
			},
			{
				name: 'ProcessPlan.Modifier.GetUser',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Modifier",
				description: "Get User - get /ProcessPlans('{ProcessPlanId}')/Modifier",
				action: 'ProcessPlan.Modifier.GetUser',
			},
			{
				name: 'ProcessPlan.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
				value: "DELETE /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Delete an existing OperationHolderUsageLink - delete /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'ProcessPlan.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
			},
			{
				name: 'ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLink',
				value: "GET /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Get OperationHolderUsageLink for a given OperationHolderUsageLinkId - get /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLink',
			},
			{
				name: 'ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLinks',
				value: "GET /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink",
				description: "Get OperationHolderUsageLink - get /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink",
				action: 'ProcessPlan.OperationHolderUsageLink.GetOperationHolderUsageLinks',
			},
			{
				name: 'ProcessPlan.OperationUsageLinks.GetOperationUsageLink',
				value: "GET /ProcessPlans('{ProcessPlanId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				description: "Get OperationUsageLink for a given OperationUsageLinkId - get /ProcessPlans('{ProcessPlanId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				action: 'ProcessPlan.OperationUsageLinks.GetOperationUsageLink',
			},
			{
				name: 'ProcessPlan.OperationUsageLinks.GetOperationUsageLinks',
				value: "GET /ProcessPlans('{ProcessPlanId}')/OperationUsageLinks",
				description: "Get OperationUsageLink - get /ProcessPlans('{ProcessPlanId}')/OperationUsageLinks",
				action: 'ProcessPlan.OperationUsageLinks.GetOperationUsageLinks',
			},
			{
				name: 'ProcessPlan.Organization.GetOrganization',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Organization",
				description: "Get Organization - get /ProcessPlans('{ProcessPlanId}')/Organization",
				action: 'ProcessPlan.Organization.GetOrganization',
			},
			{
				name: 'ProcessPlan.ResultedByObjects.GetChangeItem',
				value: "GET /ProcessPlans('{ProcessPlanId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProcessPlans('{ProcessPlanId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'ProcessPlan.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'ProcessPlan.ResultedByObjects.GetChangeItems',
				value: "GET /ProcessPlans('{ProcessPlanId}')/ResultedByObjects",
				description: "Get ChangeItem - get /ProcessPlans('{ProcessPlanId}')/ResultedByObjects",
				action: 'ProcessPlan.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'ProcessPlan.Revisions.GetProcessPlan',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Revisions('{RevisionsId}')",
				description: "Get ProcessPlan for a given RevisionsId - get /ProcessPlans('{ProcessPlanId}')/Revisions('{RevisionsId}')",
				action: 'ProcessPlan.Revisions.GetProcessPlan',
			},
			{
				name: 'ProcessPlan.Revisions.GetProcessPlans',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Revisions",
				description: "Get ProcessPlan - get /ProcessPlans('{ProcessPlanId}')/Revisions",
				action: 'ProcessPlan.Revisions.GetProcessPlans',
			},
			{
				name: 'ProcessPlan.StandardProcedureLink.GetStandardProcedureLink',
				value: "GET /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				description: "Get StandardProcedureLink for a given StandardProcedureLinkId - get /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				action: 'ProcessPlan.StandardProcedureLink.GetStandardProcedureLink',
			},
			{
				name: 'ProcessPlan.StandardProcedureLink.GetStandardProcedureLinks',
				value: "GET /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink",
				description: "Get StandardProcedureLink - get /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink",
				action: 'ProcessPlan.StandardProcedureLink.GetStandardProcedureLinks',
			},
			{
				name: 'ProcessPlan.StandardProcedureLink.PostStandardProcedureLink',
				value: "POST /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink",
				description: "Create StandardProcedureLink - post /ProcessPlans('{ProcessPlanId}')/StandardProcedureLink",
				action: 'ProcessPlan.StandardProcedureLink.PostStandardProcedureLink',
			},
			{
				name: 'ProcessPlan.Versions.GetProcessPlan',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Versions('{VersionsId}')",
				description: "Get ProcessPlan for a given VersionsId - get /ProcessPlans('{ProcessPlanId}')/Versions('{VersionsId}')",
				action: 'ProcessPlan.Versions.GetProcessPlan',
			},
			{
				name: 'ProcessPlan.Versions.GetProcessPlans',
				value: "GET /ProcessPlans('{ProcessPlanId}')/Versions",
				description: "Get ProcessPlan - get /ProcessPlans('{ProcessPlanId}')/Versions",
				action: 'ProcessPlan.Versions.GetProcessPlans',
			},
			{
				name: 'PTC.MfgProcMgmt.DocumentManageable.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.DocumentManageable.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.DocumentManageable.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.DocumentManageable.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.DocumentManageable.Action_GetDocuments_With',
				value: "POST /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.DocumentManageable.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.DocumentManageable.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.DocumentManageable.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.DocumentManageable.Function_DownloadUrls',
				value: "GET /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.DocumentManageable.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_CreateMPMEPMDocumentDescribeLinks_With',
				value: "POST /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.CreateMPMEPMDocumentDescribeLinks",
				description: "Create MPM EPM Document Describe Links MULTI API - post /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.CreateMPMEPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_CreateMPMEPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_DeleteMPMEPMDocumentDescribeLinks_With_ChangeOID',
				value: "POST /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.DeleteMPMEPMDocumentDescribeLinks",
				description: "Delete MPM EPM Document Describe Links MULTI API - post /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.DeleteMPMEPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_DeleteMPMEPMDocumentDescribeLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_GetMPMEPMDocumentDescribes_With',
				value: "POST /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.GetMPMEPMDocumentDescribes",
				description: "Get MPM EPM Document Describe Links and EPM Documents MULTI API - post /EPMDocumentManageables('{EPMDocumentManageableId}')/PTC.MfgProcMgmt.GetMPMEPMDocumentDescribes",
				action: 'PTC.MfgProcMgmt.EPMDocumentManageable.Action_GetMPMEPMDocumentDescribes_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.Material.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_CheckOut_With',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.Material.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_CreateMPMPartToProcessPlanLinks_With',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				description: "Associate multiple Process plans to Material(WTPart) - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.Material.Action_CreateMPMPartToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_DeleteMPMPartToProcessPlanLinks_With_ChangeOID',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.DeleteMPMPartToProcessPlanLinks",
				description: "Delete Multiple MPMPartToProcessPlanLinks providing material OID and links OIDs - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.DeleteMPMPartToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.Material.Action_DeleteMPMPartToProcessPlanLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_Revise_With',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.Material.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_SetState_With',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.Material.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_UndoCheckOut',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.Material.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Action_UpdateMPMPartToProcessPlanLinks_With',
				value: "POST /Materials('{MaterialId}')/PTC.MfgProcMgmt.UpdateMPMPartToProcessPlanLinks",
				description: "Update Part To Process Plan Link Multi Api - post /Materials('{MaterialId}')/PTC.MfgProcMgmt.UpdateMPMPartToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.Material.Action_UpdateMPMPartToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_allProcessPlans',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.allProcessPlans()",
				description: "All related Process Plans iterations - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.allProcessPlans()",
				action: 'PTC.MfgProcMgmt.Material.Function_allProcessPlans',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation()",
				description: "Execute GetDynamicStructureRepresentation - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation()",
				action: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation_With',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				description: "Execute GetDynamicStructureRepresentation - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentation_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				description: "Execute GetDynamicStructureRepresentationPVZ - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				action: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
				description: "Execute GetDynamicStructureRepresentationPVZ - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
				action: 'PTC.MfgProcMgmt.Material.Function_GetDynamicStructureRepresentationPVZ_With_IncludeAnnotations',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetLifeCycleTemplate',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.Material.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_GetValidStateTransitions',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.Material.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_IsCheckoutAllowed',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.Material.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.Material.Function_latestProcessPlans',
				value: "GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.latestProcessPlans()",
				description: "Latest related Process Plans - get /Materials('{MaterialId}')/PTC.MfgProcMgmt.latestProcessPlans()",
				action: 'PTC.MfgProcMgmt.Material.Function_latestProcessPlans',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_AssignCCFromProduct_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssignCCFromProduct",
				description: "Assign Control Characteristic from Product - post /Operations('{OperationId}')/PTC.MfgProcMgmt.AssignCCFromProduct",
				action: 'PTC.MfgProcMgmt.Operation.Action_AssignCCFromProduct_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_AssociateConsumableResources_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateConsumableResources",
				description: "Associated multiple consumable resources to operation - post /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateConsumableResources",
				action: 'PTC.MfgProcMgmt.Operation.Action_AssociateConsumableResources_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_AssociateStandardOperations_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				description: "Associated multiple OperationUsageLinks to OperationHolder - post /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				action: 'PTC.MfgProcMgmt.Operation.Action_AssociateStandardOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_AssociateWorkCenter_With_doCopyOverDefaultCostAndTime',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
				description: "Associated  Workcenter to operation - post /Operations('{OperationId}')/PTC.MfgProcMgmt.AssociateWorkCenter",
				action: 'PTC.MfgProcMgmt.Operation.Action_AssociateWorkCenter_With_doCopyOverDefaultCostAndTime',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.Operation.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CheckOut_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.Operation.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentReferenceLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				description: "Create MPMDocumentReferenceLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMDocumentReferenceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMOperationToPartLinks_With_operationPath_processPlanId_relatedAssemblyId_processPlanNavigationCriteriaId_relatedAssemblyNavigationCriteriaId',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
				description: "Create MPMOperationToPartLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMOperationToPartLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMOperationToPartLinks_With_operationPath_processPlanId_relatedAssemblyId_processPlanNavigationCriteriaId_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMStandardProcedureLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				description: "Create MPMStandardProceduresLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateOperationToOperatedPartLink_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateOperationToOperatedPartLink",
				description: "Allocate multiple operated parts to operation - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateOperationToOperatedPartLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateOperationToOperatedPartLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_CreateOperationToStandardCCLink_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateOperationToStandardCCLink",
				description: "Create Operation To StandardCC Link - post /Operations('{OperationId}')/PTC.MfgProcMgmt.CreateOperationToStandardCCLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_CreateOperationToStandardCCLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToPartLinks_With_ChangeOID',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMOperationToPartLinks",
				description: "Delete Multiple MPMOperationToPartLinks providing standard OID and links OIDs - post /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMOperationToPartLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToPartLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToStandardCCLinks_With_ChangeOID',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMOperationToStandardCCLinks",
				description: "Delete Multiple DeleteMPMOperationToStandardCCLinks providing Operation OID and links OIDs - post /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteMPMOperationToStandardCCLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_DeleteMPMOperationToStandardCCLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_DeleteOperationToConsumableLink_With_ChangeOID',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteOperationToConsumableLink",
				description: "Delete Multiple MPMOperationConsumableLinks providing operation OID and links OIDs - post /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteOperationToConsumableLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_DeleteOperationToConsumableLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_DeleteOperationToOperatedPartLinks_With_ChangeOID',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteOperationToOperatedPartLinks",
				description: "Delete Multiple OperationToOperatedPartLinks providing operation OID and links OIDs - post /Operations('{OperationId}')/PTC.MfgProcMgmt.DeleteOperationToOperatedPartLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_DeleteOperationToOperatedPartLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetBOP",
				description: "Get Bill Of Process - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetBOP",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				description: "Get Bill Of Process - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetConsumed_With_relatedAssemblyNavigationCriteriaId',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetConsumed",
				description: "Get consumed parts and resources - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetConsumed",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetConsumed_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetConsumedWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetConsumedWithInlineNavCriteria",
				description: "Get consumed parts and resources - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetConsumedWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetConsumedWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetDocuments_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /Operations('{OperationId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.Operation.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_InsertNewOperations_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
				description: "Insert Multiple Operations After Operation - post /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
				action: 'PTC.MfgProcMgmt.Operation.Action_InsertNewOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_ModifyEffectivities_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /Operations('{OperationId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.Operation.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_RemoveEffectivities_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /Operations('{OperationId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.Operation.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_Revise_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /Operations('{OperationId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.Operation.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_SetState_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /Operations('{OperationId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.Operation.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UndoCheckOut',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.Operation.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateConsumableLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateConsumableLinks",
				description: "Update multiple OperationToConsumableLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateConsumableLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateConsumableLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateMPMOperationUsageLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				description: "Update Operation Usage Links - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateMPMOperationUsageLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateMPMStandardProcedureLinks_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				description: "Update MPMStandardProceduresLinks - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToOperatedPartLink_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToOperatedPartLink",
				description: "Update multiple operated parts of operation - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToOperatedPartLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToOperatedPartLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToPartLink_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToPartLink",
				description: "Update Operation To Part Link - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToPartLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToPartLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToStandardCCLink_With',
				value: "POST /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToStandardCCLink",
				description: "Update Operation To StandardCC Link - post /Operations('{OperationId}')/PTC.MfgProcMgmt.UpdateOperationToStandardCCLink",
				action: 'PTC.MfgProcMgmt.Operation.Action_UpdateOperationToStandardCCLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_AllocatedWorkCenter_With',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.AllocatedWorkCenter(navigationCriteriaId='{navigationCriteriaId}')",
				description: "Filtered Allocated Work Center - get /Operations('{OperationId}')/PTC.MfgProcMgmt.AllocatedWorkCenter(navigationCriteriaId='{navigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_AllocatedWorkCenter_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_ConsumedParts_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedParts(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Consumed (Allocated) Parts - get /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedParts(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_ConsumedParts_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_ConsumedProcessMaterials_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedProcessMaterials(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Consumed Process Materials - get /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedProcessMaterials(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_ConsumedProcessMaterials_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_ConsumedResources_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedResources(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Consumed Resources - get /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedResources(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_ConsumedResources_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_ConsumedSkills_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedSkills(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Consumed Skills - get /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedSkills(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_ConsumedSkills_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_ConsumedToolings_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedToolings(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Consumed Toolings - get /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedToolings(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_ConsumedToolings_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_DownloadUrls',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /Operations('{OperationId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.Operation.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_GetLifeCycleTemplate',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Operations('{OperationId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.Operation.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_GetValidStateTransitions',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Operations('{OperationId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.Operation.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_IsCheckoutAllowed',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Operations('{OperationId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.Operation.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_OperatedOnParts_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.OperatedOnParts(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operated On Parts - get /Operations('{OperationId}')/PTC.MfgProcMgmt.OperatedOnParts(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_OperatedOnParts_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operation Holders - get /Operations('{OperationId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operations - get /Operations('{OperationId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Operation.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Operations('{OperationId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Standard Procedures - get /Operations('{OperationId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Operation.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_AssociateStandardOperations_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				description: "Associated multiple OperationUsageLinks to OperationHolder - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_AssociateStandardOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentReferenceLinks_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				description: "Create MPMDocumentReferenceLinks - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMDocumentReferenceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMStandardProcedureLinks_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				description: "Create MPMStandardProceduresLinks - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_CreateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_GetDocuments_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMOperationUsageLinks_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				description: "Update Operation Usage Links - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMOperationUsageLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMStandardProcedureLinks_With',
				value: "POST /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				description: "Update MPMStandardProceduresLinks - post /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.OperationHolder.Action_UpdateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.OperationHolder.Function_DownloadUrls',
				value: "GET /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.OperationHolder.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_CheckOut_With',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_ModifyEffectivities_With',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_RemoveEffectivities_With',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_Revise_With',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_SetState_With',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Action_UndoCheckOut',
				value: "POST /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Function_GetLifeCycleTemplate',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Function_GetValidStateTransitions',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessMaterial.Function_IsCheckoutAllowed',
				value: "GET /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.ProcessMaterial.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_AssociateStandardOperations_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				description: "Associated multiple OperationUsageLinks to OperationHolder - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_AssociateStandardOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CheckOut_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentReferenceLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				description: "Create MPMDocumentReferenceLinks - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMDocumentReferenceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMPartToProcessPlanLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				description: "Associate multiple Materials(WTParts) to ProcessPlan - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMPartToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMSequencesInProcessPlanContext_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
				description: "Create Sequences in context of ProcessPlan - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMSequencesInProcessPlanContext_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMStandardProcedureLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				description: "Create MPMStandardProceduresLinks - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_CreateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetBOP",
				description: "Get Bill Of Process - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetBOP",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				description: "Get Bill Of Process - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetDocuments_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_ModifyEffectivities_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_RemoveEffectivities_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_Revise_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_SetState_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_UndoCheckOut',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMOperationUsageLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				description: "Update Operation Usage Links - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMOperationUsageLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMStandardProcedureLinks_With',
				value: "POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				description: "Update MPMStandardProceduresLinks - post /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Action_UpdateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_DownloadUrls',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_GetLifeCycleTemplate',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_GetValidStateTransitions',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_IsCheckoutAllowed',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operation Holders - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operations - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Sequences - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.ProcessPlan.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Standard Procedures - get /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.ProcessPlan.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_CreateMPMCompatibilityLinks_With',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink between Resources - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
				action: 'PTC.MfgProcMgmt.Resource.Action_CreateMPMCompatibilityLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_CreateResourceDescribeDocumentLinks_With',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateResourceDescribeDocumentLinks",
				description: "Create multiple links between Resource and DescribeBy Documents - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateResourceDescribeDocumentLinks",
				action: 'PTC.MfgProcMgmt.Resource.Action_CreateResourceDescribeDocumentLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_CreateResourceReferenceDocumentLinks_With',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateResourceReferenceDocumentLinks",
				description: "Create multiple links between Resource and Reference Documents - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateResourceReferenceDocumentLinks",
				action: 'PTC.MfgProcMgmt.Resource.Action_CreateResourceReferenceDocumentLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_CreateUses_With_ResourceUses',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateUses",
				description: "Add multiple Resources/Parts to Resource - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateUses",
				action: 'PTC.MfgProcMgmt.Resource.Action_CreateUses_With_ResourceUses',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_DeleteResourceDescribeLinks_With_ChangeOID',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.DeleteResourceDescribeLinks",
				description: "Delete Multiple WTPartDescribeLinks providing resource OID,links OIDs and Changeable OID - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.DeleteResourceDescribeLinks",
				action: 'PTC.MfgProcMgmt.Resource.Action_DeleteResourceDescribeLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_DeleteResourceReferenceLinks_With_ChangeOID',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.DeleteResourceReferenceLinks",
				description: "Delete Multiple WTPartReferenceLink providing resource OID,links OIDs and Changeable OID - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.DeleteResourceReferenceLinks",
				action: 'PTC.MfgProcMgmt.Resource.Action_DeleteResourceReferenceLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Resource.Action_GetPartStructure_With',
				value: "POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.GetPartStructure",
				description: "Get Part Structure with Path Info, using the Navigation Criteria passed in the navigationCriteria parameter. - post /Resources('{ResourceId}')/PTC.MfgProcMgmt.GetPartStructure",
				action: 'PTC.MfgProcMgmt.Resource.Action_GetPartStructure_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_AssociateStandardOperations_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				description: "Associated multiple OperationUsageLinks to OperationHolder - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				action: 'PTC.MfgProcMgmt.Sequence.Action_AssociateStandardOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CheckOut_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentReferenceLinks_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				description: "Create MPMDocumentReferenceLinks - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMDocumentReferenceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMSequencesInSequenceContext_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMSequencesInSequenceContext",
				description: "Create Sequences in context of Sequence - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMSequencesInSequenceContext",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMSequencesInSequenceContext_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMStandardProcedureLinks_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				description: "Create MPMStandardProceduresLinks - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.Sequence.Action_CreateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.Sequence.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetBOP",
				description: "Get Bill Of Process - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetBOP",
				action: 'PTC.MfgProcMgmt.Sequence.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				description: "Get Bill Of Process - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.Sequence.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_GetDocuments_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.Sequence.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.Sequence.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_ModifyEffectivities_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.Sequence.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_RemoveEffectivities_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.Sequence.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_Revise_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.Sequence.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_SetState_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.Sequence.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_UndoCheckOut',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.Sequence.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_UpdateMPMOperationUsageLinks_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				description: "Update Operation Usage Links - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				action: 'PTC.MfgProcMgmt.Sequence.Action_UpdateMPMOperationUsageLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Action_UpdateMPMStandardProcedureLinks_With',
				value: "POST /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				description: "Update MPMStandardProceduresLinks - post /Sequences('{SequenceId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.Sequence.Action_UpdateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_DownloadUrls',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.Sequence.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_GetLifeCycleTemplate',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.Sequence.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_GetValidStateTransitions',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.Sequence.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_IsCheckoutAllowed',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.Sequence.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operation Holders - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Sequence.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operations - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Sequence.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Sequences - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Sequence.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Sequence.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Standard Procedures - get /Sequences('{SequenceId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.Sequence.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Action_GetDocuments_With',
				value: "POST /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Action_UpdateSequenceUsageLink_With',
				value: "POST /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.UpdateSequenceUsageLink",
				description: "Update multiple SequenceUsageLinks - post /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.UpdateSequenceUsageLink",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Action_UpdateSequenceUsageLink_With',
			},
			{
				name: 'PTC.MfgProcMgmt.SequenceHolder.Function_DownloadUrls',
				value: "GET /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.SequenceHolder.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /Skills('{SkillId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.Skill.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_CheckOut_With',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /Skills('{SkillId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.Skill.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_ModifyEffectivities_With',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /Skills('{SkillId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.Skill.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_RemoveEffectivities_With',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /Skills('{SkillId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.Skill.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_Revise_With',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /Skills('{SkillId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.Skill.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_SetState_With',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /Skills('{SkillId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.Skill.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Action_UndoCheckOut',
				value: "POST /Skills('{SkillId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Skills('{SkillId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.Skill.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Function_GetLifeCycleTemplate',
				value: "GET /Skills('{SkillId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Skills('{SkillId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.Skill.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Function_GetValidStateTransitions',
				value: "GET /Skills('{SkillId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Skills('{SkillId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.Skill.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.Skill.Function_IsCheckoutAllowed',
				value: "GET /Skills('{SkillId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Skills('{SkillId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.Skill.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_CheckOut_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToProcessPlanLinks_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMStandardCCToProcessPlanLinks",
				description: "Create MPMStandardCCToProcessPlanLinks - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMStandardCCToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToResourceLinks_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMStandardCCToResourceLinks",
				description: "Associate multiple Resources to StandardCC - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.CreateMPMStandardCCToResourceLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_CreateMPMStandardCCToResourceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToProcessPlanLinks_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMStandardCCToProcessPlanLinks",
				description: "Delete Multiple DeleteMPMStandardCCToProcessPlanLinks providing standardCC OID and links OIDs - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMStandardCCToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToResourceLinks_With_ChangeOID',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMStandardCCToResourceLinks",
				description: "Delete Multiple MPMStandardCCToResourceLinks providing standard OID and links OIDs - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DeleteMPMStandardCCToResourceLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_DeleteMPMStandardCCToResourceLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_GetDocuments_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_Revise_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_SetState_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_UndoCheckOut',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Action_UpdateMPMStandardCCToProcessPlanLinks_With',
				value: "POST /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.UpdateMPMStandardCCToProcessPlanLinks",
				description: "Update MPMStandardCCToProcessPlanLinks - post /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.UpdateMPMStandardCCToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.StandardCC.Action_UpdateMPMStandardCCToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Function_DownloadUrls',
				value: "GET /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.StandardCC.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Function_GetLifeCycleTemplate',
				value: "GET /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.StandardCC.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Function_GetValidStateTransitions',
				value: "GET /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.StandardCC.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardCC.Function_IsCheckoutAllowed',
				value: "GET /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.StandardCC.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_AssociateStandardOperations_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				description: "Associated multiple OperationUsageLinks to OperationHolder - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_AssociateStandardOperations_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CheckOut_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentDescribeLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				description: "Create MPMDocumentDescribeLinks - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMDocumentDescribeLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentDescribeLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentReferenceLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				description: "Create MPMDocumentReferenceLinks - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMDocumentReferenceLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMDocumentReferenceLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMPartToProcessPlanLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				description: "Associate multiple Materials(WTParts) to ProcessPlan - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMPartToProcessPlanLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMPartToProcessPlanLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMSequencesInProcessPlanContext_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
				description: "Create Sequences in context of ProcessPlan - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMSequencesInProcessPlanContext",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMSequencesInProcessPlanContext_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMStandardProcedureLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				description: "Create MPMStandardProceduresLinks - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_CreateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				description: "Delete Multiple MPMDocumentDescribeLink providing document manageable oid and links OIDs - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.DeleteMPMDocumentDescribeLink",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_DeleteMPMDocumentDescribeLink_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetBOP",
				description: "Get Bill Of Process - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetBOP",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetBOP_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				description: "Get Bill Of Process - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetBOPWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetBOPWithInlineNavCriteria_With_relatedAssemblyNavigationCriteria',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetDocuments_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetDocuments",
				description: "Get documents - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetDocuments",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetDocuments_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetDocumentsWithInlineNavCriteria_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				description: "Get documents - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetDocumentsWithInlineNavCriteria",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_GetDocumentsWithInlineNavCriteria_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_ModifyEffectivities_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_RemoveEffectivities_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_Revise_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_SetState_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_UndoCheckOut',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMOperationUsageLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				description: "Update Operation Usage Links - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UpdateMPMOperationUsageLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMOperationUsageLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMStandardProcedureLinks_With',
				value: "POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				description: "Update MPMStandardProceduresLinks - post /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.UpdateMPMStandardProcedureLinks",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Action_UpdateMPMStandardProcedureLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_DownloadUrls',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.DownloadUrls()",
				description: "Download Urls - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.DownloadUrls()",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_DownloadUrls',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_GetLifeCycleTemplate',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_GetValidStateTransitions',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_IsCheckoutAllowed',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operation Holders - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.OperationHolders(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_OperationHolders_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Operations - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_Operations_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Sequences - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_Sequences_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.StandardProcedure.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
				value: "GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				description: "Filtered Standard Procedures - get /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.StandardProcedures(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				action: 'PTC.MfgProcMgmt.StandardProcedure.Function_StandardProcedures_With_relatedAssemblyNavigationCriteriaId',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.Tooling.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_CheckOut_With',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.Tooling.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_ModifyEffectivities_With',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.Tooling.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_RemoveEffectivities_With',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.Tooling.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_Revise_With',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.Tooling.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_SetState_With',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.Tooling.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Action_UndoCheckOut',
				value: "POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /Toolings('{ToolingId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.Tooling.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Function_GetLifeCycleTemplate',
				value: "GET /Toolings('{ToolingId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Toolings('{ToolingId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.Tooling.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Function_GetValidStateTransitions',
				value: "GET /Toolings('{ToolingId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Toolings('{ToolingId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.Tooling.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.Tooling.Function_IsCheckoutAllowed',
				value: "GET /Toolings('{ToolingId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /Toolings('{ToolingId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.Tooling.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CheckIn",
				description: "Execute CheckIn - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CheckIn",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CheckOut_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CheckOut",
				description: "Execute CheckOut - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CheckOut",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CheckOut_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateMPMCompatibilityLinks_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink between Resources - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateMPMCompatibilityLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceDescribeDocumentLinks_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateResourceDescribeDocumentLinks",
				description: "Create multiple links between Resource and DescribeBy Documents - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateResourceDescribeDocumentLinks",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceDescribeDocumentLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceReferenceDocumentLinks_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateResourceReferenceDocumentLinks",
				description: "Create multiple links between Resource and Reference Documents - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateResourceReferenceDocumentLinks",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateResourceReferenceDocumentLinks_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateUses_With_ResourceUses',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateUses",
				description: "Add multiple Resources/Parts to Resource - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.CreateUses",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_CreateUses_With_ResourceUses',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceDescribeLinks_With_ChangeOID',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.DeleteResourceDescribeLinks",
				description: "Delete Multiple WTPartDescribeLinks providing resource OID,links OIDs and Changeable OID - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.DeleteResourceDescribeLinks",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceDescribeLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceReferenceLinks_With_ChangeOID',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.DeleteResourceReferenceLinks",
				description: "Delete Multiple WTPartReferenceLink providing resource OID,links OIDs and Changeable OID - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.DeleteResourceReferenceLinks",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_DeleteResourceReferenceLinks_With_ChangeOID',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_GetPartStructure_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
				description: "Get Part Structure with Path Info, using the Navigation Criteria passed in the navigationCriteria parameter. - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetPartStructure",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_GetPartStructure_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_ModifyEffectivities_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				description: "Execute ModifyEffectivities - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.ModifyEffectivities",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_ModifyEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_RemoveEffectivities_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				description: "Execute RemoveEffectivities - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.RemoveEffectivities",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_RemoveEffectivities_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_Revise_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.Revise",
				description: "Execute Revise - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.Revise",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_Revise_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_SetState_With',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.SetState",
				description: "Execute SetState - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.SetState",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_SetState_With',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Action_UndoCheckOut',
				value: "POST /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.UndoCheckOut",
				action: 'PTC.MfgProcMgmt.WorkCenter.Action_UndoCheckOut',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Function_GetLifeCycleTemplate',
				value: "GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				action: 'PTC.MfgProcMgmt.WorkCenter.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Function_GetValidStateTransitions',
				value: "GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				action: 'PTC.MfgProcMgmt.WorkCenter.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Function_IsCheckoutAllowed',
				value: "GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				action: 'PTC.MfgProcMgmt.WorkCenter.Function_IsCheckoutAllowed',
			},
			{
				name: 'PTC.MfgProcMgmt.WorkCenter.Function_LocalizedOperations_With_processPlanId',
				value: "GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.LocalizedOperations(navigationCriteriaId='{navigationCriteriaId}',processPlanId='{processPlanId}')",
				description: "Filtered Localized Operations - get /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.LocalizedOperations(navigationCriteriaId='{navigationCriteriaId}',processPlanId='{processPlanId}')",
				action: 'PTC.MfgProcMgmt.WorkCenter.Function_LocalizedOperations_With_processPlanId',
			},
			{
				name: 'Resource.Creator.GetUser',
				value: "GET /Resources('{ResourceId}')/Creator",
				description: "Get User - get /Resources('{ResourceId}')/Creator",
				action: 'Resource.Creator.GetUser',
			},
			{
				name: 'Resource.DescribedBy.GetResourceDescribeLink',
				value: "GET /Resources('{ResourceId}')/DescribedBy('{ResourceDescribeLinkId}')",
				description: "Get ResourceDescribeLink for a given ResourceDescribeLinkId - get /Resources('{ResourceId}')/DescribedBy('{ResourceDescribeLinkId}')",
				action: 'Resource.DescribedBy.GetResourceDescribeLink',
			},
			{
				name: 'Resource.DescribedBy.GetResourceDescribeLinks',
				value: "GET /Resources('{ResourceId}')/DescribedBy",
				description: "Get ResourceDescribeLink - get /Resources('{ResourceId}')/DescribedBy",
				action: 'Resource.DescribedBy.GetResourceDescribeLinks',
			},
			{
				name: 'Resource.Modifier.GetUser',
				value: "GET /Resources('{ResourceId}')/Modifier",
				description: "Get User - get /Resources('{ResourceId}')/Modifier",
				action: 'Resource.Modifier.GetUser',
			},
			{
				name: 'Resource.MPMCompatibilityLinks.GetMPMCompatibilityLink',
				value: "GET /Resources('{ResourceId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				description: "Get MPMCompatibilityLink for a given MPMCompatibilityLinkId - get /Resources('{ResourceId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				action: 'Resource.MPMCompatibilityLinks.GetMPMCompatibilityLink',
			},
			{
				name: 'Resource.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
				value: "GET /Resources('{ResourceId}')/MPMCompatibilityLinks",
				description: "Get MPMCompatibilityLink - get /Resources('{ResourceId}')/MPMCompatibilityLinks",
				action: 'Resource.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
			},
			{
				name: 'Resource.MPMCompatibilityLinks.PostMPMCompatibilityLink',
				value: "POST /Resources('{ResourceId}')/MPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink - post /Resources('{ResourceId}')/MPMCompatibilityLinks",
				action: 'Resource.MPMCompatibilityLinks.PostMPMCompatibilityLink',
			},
			{
				name: 'Resource.PartDocAssociations.GetPartDocAssociation',
				value: "GET /Resources('{ResourceId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Resources('{ResourceId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'Resource.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'Resource.PartDocAssociations.GetPartDocAssociations',
				value: "GET /Resources('{ResourceId}')/PartDocAssociations",
				description: "Get PartDocAssociation - get /Resources('{ResourceId}')/PartDocAssociations",
				action: 'Resource.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'Resource.References.GetResourceReferenceLink',
				value: "GET /Resources('{ResourceId}')/References('{ResourceReferenceLinkId}')",
				description: "Get ResourceReferenceLink for a given ResourceReferenceLinkId - get /Resources('{ResourceId}')/References('{ResourceReferenceLinkId}')",
				action: 'Resource.References.GetResourceReferenceLink',
			},
			{
				name: 'Resource.References.GetResourceReferenceLinks',
				value: "GET /Resources('{ResourceId}')/References",
				description: "Get ResourceReferenceLink - get /Resources('{ResourceId}')/References",
				action: 'Resource.References.GetResourceReferenceLinks',
			},
			{
				name: 'Resource.Uses.DeletePTC.ProdMgmt.PartUse',
				value: "DELETE /Resources('{ResourceId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Resources('{ResourceId}')/Uses('{PartUseId}')",
				action: 'Resource.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'Resource.Uses.GetPartUse',
				value: "GET /Resources('{ResourceId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Resources('{ResourceId}')/Uses('{PartUseId}')",
				action: 'Resource.Uses.GetPartUse',
			},
			{
				name: 'Resource.Uses.GetPartUses',
				value: "GET /Resources('{ResourceId}')/Uses",
				description: "Get PartUse - get /Resources('{ResourceId}')/Uses",
				action: 'Resource.Uses.GetPartUses',
			},
			{
				name: 'Resource.Uses.PostPartUse',
				value: "POST /Resources('{ResourceId}')/Uses",
				description: "Create PartUse - post /Resources('{ResourceId}')/Uses",
				action: 'Resource.Uses.PostPartUse',
			},
			{
				name: 'Resource.Uses.UpdatePartUse',
				value: "PATCH /Resources('{ResourceId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Resources('{ResourceId}')/Uses('{PartUseId}')",
				action: 'Resource.Uses.UpdatePartUse',
			},
			{
				name: 'Sequence.AssignedOptionSet.GetOptionSet',
				value: "GET /Sequences('{SequenceId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Sequences('{SequenceId}')/AssignedOptionSet",
				action: 'Sequence.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'Sequence.Context.GetContainer',
				value: "GET /Sequences('{SequenceId}')/Context",
				description: "Get Container - get /Sequences('{SequenceId}')/Context",
				action: 'Sequence.Context.GetContainer',
			},
			{
				name: 'Sequence.Creator.GetUser',
				value: "GET /Sequences('{SequenceId}')/Creator",
				description: "Get User - get /Sequences('{SequenceId}')/Creator",
				action: 'Sequence.Creator.GetUser',
			},
			{
				name: 'Sequence.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /Sequences('{SequenceId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /Sequences('{SequenceId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'Sequence.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'Sequence.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /Sequences('{SequenceId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /Sequences('{SequenceId}')/DocumentDescribeLinks",
				action: 'Sequence.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'Sequence.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /Sequences('{SequenceId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /Sequences('{SequenceId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'Sequence.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'Sequence.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /Sequences('{SequenceId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /Sequences('{SequenceId}')/DocumentReferenceLinks",
				action: 'Sequence.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'Sequence.Effectivities.GetEffectivity',
				value: "GET /Sequences('{SequenceId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Sequences('{SequenceId}')/Effectivities('{EffectivityId}')",
				action: 'Sequence.Effectivities.GetEffectivity',
			},
			{
				name: 'Sequence.Effectivities.GetEffectivitys',
				value: "GET /Sequences('{SequenceId}')/Effectivities",
				description: "Get Effectivity - get /Sequences('{SequenceId}')/Effectivities",
				action: 'Sequence.Effectivities.GetEffectivitys',
			},
			{
				name: 'Sequence.Modifier.GetUser',
				value: "GET /Sequences('{SequenceId}')/Modifier",
				description: "Get User - get /Sequences('{SequenceId}')/Modifier",
				action: 'Sequence.Modifier.GetUser',
			},
			{
				name: 'Sequence.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
				value: "DELETE /Sequences('{SequenceId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Delete an existing OperationHolderUsageLink - delete /Sequences('{SequenceId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'Sequence.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
			},
			{
				name: 'Sequence.OperationHolderUsageLink.GetOperationHolderUsageLink',
				value: "GET /Sequences('{SequenceId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Get OperationHolderUsageLink for a given OperationHolderUsageLinkId - get /Sequences('{SequenceId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'Sequence.OperationHolderUsageLink.GetOperationHolderUsageLink',
			},
			{
				name: 'Sequence.OperationHolderUsageLink.GetOperationHolderUsageLinks',
				value: "GET /Sequences('{SequenceId}')/OperationHolderUsageLink",
				description: "Get OperationHolderUsageLink - get /Sequences('{SequenceId}')/OperationHolderUsageLink",
				action: 'Sequence.OperationHolderUsageLink.GetOperationHolderUsageLinks',
			},
			{
				name: 'Sequence.OperationUsageLinks.GetOperationUsageLink',
				value: "GET /Sequences('{SequenceId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				description: "Get OperationUsageLink for a given OperationUsageLinkId - get /Sequences('{SequenceId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				action: 'Sequence.OperationUsageLinks.GetOperationUsageLink',
			},
			{
				name: 'Sequence.OperationUsageLinks.GetOperationUsageLinks',
				value: "GET /Sequences('{SequenceId}')/OperationUsageLinks",
				description: "Get OperationUsageLink - get /Sequences('{SequenceId}')/OperationUsageLinks",
				action: 'Sequence.OperationUsageLinks.GetOperationUsageLinks',
			},
			{
				name: 'Sequence.ResultedByObjects.GetChangeItem',
				value: "GET /Sequences('{SequenceId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Sequences('{SequenceId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'Sequence.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'Sequence.ResultedByObjects.GetChangeItems',
				value: "GET /Sequences('{SequenceId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Sequences('{SequenceId}')/ResultedByObjects",
				action: 'Sequence.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'Sequence.Revisions.GetSequence',
				value: "GET /Sequences('{SequenceId}')/Revisions('{RevisionsId}')",
				description: "Get Sequence for a given RevisionsId - get /Sequences('{SequenceId}')/Revisions('{RevisionsId}')",
				action: 'Sequence.Revisions.GetSequence',
			},
			{
				name: 'Sequence.Revisions.GetSequences',
				value: "GET /Sequences('{SequenceId}')/Revisions",
				description: "Get Sequence - get /Sequences('{SequenceId}')/Revisions",
				action: 'Sequence.Revisions.GetSequences',
			},
			{
				name: 'Sequence.StandardProcedureLink.GetStandardProcedureLink',
				value: "GET /Sequences('{SequenceId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				description: "Get StandardProcedureLink for a given StandardProcedureLinkId - get /Sequences('{SequenceId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				action: 'Sequence.StandardProcedureLink.GetStandardProcedureLink',
			},
			{
				name: 'Sequence.StandardProcedureLink.GetStandardProcedureLinks',
				value: "GET /Sequences('{SequenceId}')/StandardProcedureLink",
				description: "Get StandardProcedureLink - get /Sequences('{SequenceId}')/StandardProcedureLink",
				action: 'Sequence.StandardProcedureLink.GetStandardProcedureLinks',
			},
			{
				name: 'Sequence.StandardProcedureLink.PostStandardProcedureLink',
				value: "POST /Sequences('{SequenceId}')/StandardProcedureLink",
				description: "Create StandardProcedureLink - post /Sequences('{SequenceId}')/StandardProcedureLink",
				action: 'Sequence.StandardProcedureLink.PostStandardProcedureLink',
			},
			{
				name: 'Sequence.Versions.GetSequence',
				value: "GET /Sequences('{SequenceId}')/Versions('{VersionsId}')",
				description: "Get Sequence for a given VersionsId - get /Sequences('{SequenceId}')/Versions('{VersionsId}')",
				action: 'Sequence.Versions.GetSequence',
			},
			{
				name: 'Sequence.Versions.GetSequences',
				value: "GET /Sequences('{SequenceId}')/Versions",
				description: "Get Sequence - get /Sequences('{SequenceId}')/Versions",
				action: 'Sequence.Versions.GetSequences',
			},
			{
				name: 'SequenceHolder.Creator.GetUser',
				value: "GET /SequenceHolders('{SequenceHolderId}')/Creator",
				description: "Get User - get /SequenceHolders('{SequenceHolderId}')/Creator",
				action: 'SequenceHolder.Creator.GetUser',
			},
			{
				name: 'SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks",
				action: 'SequenceHolder.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /SequenceHolders('{SequenceHolderId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /SequenceHolders('{SequenceHolderId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /SequenceHolders('{SequenceHolderId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /SequenceHolders('{SequenceHolderId}')/DocumentReferenceLinks",
				action: 'SequenceHolder.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'SequenceHolder.Modifier.GetUser',
				value: "GET /SequenceHolders('{SequenceHolderId}')/Modifier",
				description: "Get User - get /SequenceHolders('{SequenceHolderId}')/Modifier",
				action: 'SequenceHolder.Modifier.GetUser',
			},
			{
				name: 'SequenceHolder.SequenceUsageLink.GetSequenceUsageLink',
				value: "GET /SequenceHolders('{SequenceHolderId}')/SequenceUsageLink('{SequenceUsageLinkId}')",
				description: "Get SequenceUsageLink for a given SequenceUsageLinkId - get /SequenceHolders('{SequenceHolderId}')/SequenceUsageLink('{SequenceUsageLinkId}')",
				action: 'SequenceHolder.SequenceUsageLink.GetSequenceUsageLink',
			},
			{
				name: 'SequenceHolder.SequenceUsageLink.GetSequenceUsageLinks',
				value: "GET /SequenceHolders('{SequenceHolderId}')/SequenceUsageLink",
				description: "Get SequenceUsageLink - get /SequenceHolders('{SequenceHolderId}')/SequenceUsageLink",
				action: 'SequenceHolder.SequenceUsageLink.GetSequenceUsageLinks',
			},
			{
				name: 'Skill.AssignedOptionSet.GetOptionSet',
				value: "GET /Skills('{SkillId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Skills('{SkillId}')/AssignedOptionSet",
				action: 'Skill.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'Skill.Context.GetContainer',
				value: "GET /Skills('{SkillId}')/Context",
				description: "Get Container - get /Skills('{SkillId}')/Context",
				action: 'Skill.Context.GetContainer',
			},
			{
				name: 'Skill.Creator.GetUser',
				value: "GET /Skills('{SkillId}')/Creator",
				description: "Get User - get /Skills('{SkillId}')/Creator",
				action: 'Skill.Creator.GetUser',
			},
			{
				name: 'Skill.DescribedBy.GetResourceDescribeLink',
				value: "GET /Skills('{SkillId}')/DescribedBy('{ResourceDescribeLinkId}')",
				description: "Get ResourceDescribeLink for a given ResourceDescribeLinkId - get /Skills('{SkillId}')/DescribedBy('{ResourceDescribeLinkId}')",
				action: 'Skill.DescribedBy.GetResourceDescribeLink',
			},
			{
				name: 'Skill.DescribedBy.GetResourceDescribeLinks',
				value: "GET /Skills('{SkillId}')/DescribedBy",
				description: "Get ResourceDescribeLink - get /Skills('{SkillId}')/DescribedBy",
				action: 'Skill.DescribedBy.GetResourceDescribeLinks',
			},
			{
				name: 'Skill.Effectivities.GetEffectivity',
				value: "GET /Skills('{SkillId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Skills('{SkillId}')/Effectivities('{EffectivityId}')",
				action: 'Skill.Effectivities.GetEffectivity',
			},
			{
				name: 'Skill.Effectivities.GetEffectivitys',
				value: "GET /Skills('{SkillId}')/Effectivities",
				description: "Get Effectivity - get /Skills('{SkillId}')/Effectivities",
				action: 'Skill.Effectivities.GetEffectivitys',
			},
			{
				name: 'Skill.Folder.GetFolder',
				value: "GET /Skills('{SkillId}')/Folder",
				description: "Get Folder - get /Skills('{SkillId}')/Folder",
				action: 'Skill.Folder.GetFolder',
			},
			{
				name: 'Skill.Modifier.GetUser',
				value: "GET /Skills('{SkillId}')/Modifier",
				description: "Get User - get /Skills('{SkillId}')/Modifier",
				action: 'Skill.Modifier.GetUser',
			},
			{
				name: 'Skill.MPMCompatibilityLinks.GetMPMCompatibilityLink',
				value: "GET /Skills('{SkillId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				description: "Get MPMCompatibilityLink for a given MPMCompatibilityLinkId - get /Skills('{SkillId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				action: 'Skill.MPMCompatibilityLinks.GetMPMCompatibilityLink',
			},
			{
				name: 'Skill.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
				value: "GET /Skills('{SkillId}')/MPMCompatibilityLinks",
				description: "Get MPMCompatibilityLink - get /Skills('{SkillId}')/MPMCompatibilityLinks",
				action: 'Skill.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
			},
			{
				name: 'Skill.MPMCompatibilityLinks.PostMPMCompatibilityLink',
				value: "POST /Skills('{SkillId}')/MPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink - post /Skills('{SkillId}')/MPMCompatibilityLinks",
				action: 'Skill.MPMCompatibilityLinks.PostMPMCompatibilityLink',
			},
			{
				name: 'Skill.Organization.GetOrganization',
				value: "GET /Skills('{SkillId}')/Organization",
				description: "Get Organization - get /Skills('{SkillId}')/Organization",
				action: 'Skill.Organization.GetOrganization',
			},
			{
				name: 'Skill.PartDocAssociations.GetPartDocAssociation',
				value: "GET /Skills('{SkillId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Skills('{SkillId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'Skill.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'Skill.PartDocAssociations.GetPartDocAssociations',
				value: "GET /Skills('{SkillId}')/PartDocAssociations",
				description: "Get PartDocAssociation - get /Skills('{SkillId}')/PartDocAssociations",
				action: 'Skill.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'Skill.References.GetResourceReferenceLink',
				value: "GET /Skills('{SkillId}')/References('{ResourceReferenceLinkId}')",
				description: "Get ResourceReferenceLink for a given ResourceReferenceLinkId - get /Skills('{SkillId}')/References('{ResourceReferenceLinkId}')",
				action: 'Skill.References.GetResourceReferenceLink',
			},
			{
				name: 'Skill.References.GetResourceReferenceLinks',
				value: "GET /Skills('{SkillId}')/References",
				description: "Get ResourceReferenceLink - get /Skills('{SkillId}')/References",
				action: 'Skill.References.GetResourceReferenceLinks',
			},
			{
				name: 'Skill.ResultedByObjects.GetChangeItem',
				value: "GET /Skills('{SkillId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Skills('{SkillId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'Skill.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'Skill.ResultedByObjects.GetChangeItems',
				value: "GET /Skills('{SkillId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Skills('{SkillId}')/ResultedByObjects",
				action: 'Skill.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'Skill.Revisions.GetSkill',
				value: "GET /Skills('{SkillId}')/Revisions('{RevisionsId}')",
				description: "Get Skill for a given RevisionsId - get /Skills('{SkillId}')/Revisions('{RevisionsId}')",
				action: 'Skill.Revisions.GetSkill',
			},
			{
				name: 'Skill.Revisions.GetSkills',
				value: "GET /Skills('{SkillId}')/Revisions",
				description: "Get Skill - get /Skills('{SkillId}')/Revisions",
				action: 'Skill.Revisions.GetSkills',
			},
			{
				name: 'Skill.Uses.DeletePTC.ProdMgmt.PartUse',
				value: "DELETE /Skills('{SkillId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Skills('{SkillId}')/Uses('{PartUseId}')",
				action: 'Skill.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'Skill.Uses.GetPartUse',
				value: "GET /Skills('{SkillId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Skills('{SkillId}')/Uses('{PartUseId}')",
				action: 'Skill.Uses.GetPartUse',
			},
			{
				name: 'Skill.Uses.GetPartUses',
				value: "GET /Skills('{SkillId}')/Uses",
				description: "Get PartUse - get /Skills('{SkillId}')/Uses",
				action: 'Skill.Uses.GetPartUses',
			},
			{
				name: 'Skill.Uses.PostPartUse',
				value: "POST /Skills('{SkillId}')/Uses",
				description: "Create PartUse - post /Skills('{SkillId}')/Uses",
				action: 'Skill.Uses.PostPartUse',
			},
			{
				name: 'Skill.Uses.UpdatePartUse',
				value: "PATCH /Skills('{SkillId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Skills('{SkillId}')/Uses('{PartUseId}')",
				action: 'Skill.Uses.UpdatePartUse',
			},
			{
				name: 'Skill.Versions.GetSkill',
				value: "GET /Skills('{SkillId}')/Versions('{VersionsId}')",
				description: "Get Skill for a given VersionsId - get /Skills('{SkillId}')/Versions('{VersionsId}')",
				action: 'Skill.Versions.GetSkill',
			},
			{
				name: 'Skill.Versions.GetSkills',
				value: "GET /Skills('{SkillId}')/Versions",
				description: "Get Skill - get /Skills('{SkillId}')/Versions",
				action: 'Skill.Versions.GetSkills',
			},
			{
				name: 'StandardCC.Context.GetContainer',
				value: "GET /StandardCCs('{StandardCCId}')/Context",
				description: "Get Container - get /StandardCCs('{StandardCCId}')/Context",
				action: 'StandardCC.Context.GetContainer',
			},
			{
				name: 'StandardCC.Creator.GetUser',
				value: "GET /StandardCCs('{StandardCCId}')/Creator",
				description: "Get User - get /StandardCCs('{StandardCCId}')/Creator",
				action: 'StandardCC.Creator.GetUser',
			},
			{
				name: 'StandardCC.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /StandardCCs('{StandardCCId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /StandardCCs('{StandardCCId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'StandardCC.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'StandardCC.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /StandardCCs('{StandardCCId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /StandardCCs('{StandardCCId}')/DocumentDescribeLinks",
				action: 'StandardCC.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'StandardCC.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /StandardCCs('{StandardCCId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /StandardCCs('{StandardCCId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'StandardCC.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'StandardCC.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /StandardCCs('{StandardCCId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /StandardCCs('{StandardCCId}')/DocumentReferenceLinks",
				action: 'StandardCC.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'StandardCC.Folder.GetFolder',
				value: "GET /StandardCCs('{StandardCCId}')/Folder",
				description: "Get Folder - get /StandardCCs('{StandardCCId}')/Folder",
				action: 'StandardCC.Folder.GetFolder',
			},
			{
				name: 'StandardCC.Modifier.GetUser',
				value: "GET /StandardCCs('{StandardCCId}')/Modifier",
				description: "Get User - get /StandardCCs('{StandardCCId}')/Modifier",
				action: 'StandardCC.Modifier.GetUser',
			},
			{
				name: 'StandardCC.Organization.GetOrganization',
				value: "GET /StandardCCs('{StandardCCId}')/Organization",
				description: "Get Organization - get /StandardCCs('{StandardCCId}')/Organization",
				action: 'StandardCC.Organization.GetOrganization',
			},
			{
				name: 'StandardCC.ResultedByObjects.GetChangeItem',
				value: "GET /StandardCCs('{StandardCCId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /StandardCCs('{StandardCCId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'StandardCC.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'StandardCC.ResultedByObjects.GetChangeItems',
				value: "GET /StandardCCs('{StandardCCId}')/ResultedByObjects",
				description: "Get ChangeItem - get /StandardCCs('{StandardCCId}')/ResultedByObjects",
				action: 'StandardCC.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'StandardCC.Revisions.GetStandardCC',
				value: "GET /StandardCCs('{StandardCCId}')/Revisions('{RevisionsId}')",
				description: "Get StandardCC for a given RevisionsId - get /StandardCCs('{StandardCCId}')/Revisions('{RevisionsId}')",
				action: 'StandardCC.Revisions.GetStandardCC',
			},
			{
				name: 'StandardCC.Revisions.GetStandardCCs',
				value: "GET /StandardCCs('{StandardCCId}')/Revisions",
				description: "Get StandardCC - get /StandardCCs('{StandardCCId}')/Revisions",
				action: 'StandardCC.Revisions.GetStandardCCs',
			},
			{
				name: 'StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLink',
				value: "GET /StandardCCs('{StandardCCId}')/StandardCCToProcessPlanLinks('{StandardCCToProcessPlanLinkId}')",
				description: "Get StandardCCToProcessPlanLink for a given StandardCCToProcessPlanLinkId - get /StandardCCs('{StandardCCId}')/StandardCCToProcessPlanLinks('{StandardCCToProcessPlanLinkId}')",
				action: 'StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLink',
			},
			{
				name: 'StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLinks',
				value: "GET /StandardCCs('{StandardCCId}')/StandardCCToProcessPlanLinks",
				description: "Get StandardCCToProcessPlanLink - get /StandardCCs('{StandardCCId}')/StandardCCToProcessPlanLinks",
				action: 'StandardCC.StandardCCToProcessPlanLinks.GetStandardCCToProcessPlanLinks',
			},
			{
				name: 'StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLink',
				value: "GET /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks('{StandardCCToResourceLinkId}')",
				description: "Get StandardCCToResourceLink for a given StandardCCToResourceLinkId - get /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks('{StandardCCToResourceLinkId}')",
				action: 'StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLink',
			},
			{
				name: 'StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLinks',
				value: "GET /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks",
				description: "Get StandardCCToResourceLink - get /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks",
				action: 'StandardCC.StandardCCToResourceLinks.GetStandardCCToResourceLinks',
			},
			{
				name: 'StandardCC.Versions.GetStandardCC',
				value: "GET /StandardCCs('{StandardCCId}')/Versions('{VersionsId}')",
				description: "Get StandardCC for a given VersionsId - get /StandardCCs('{StandardCCId}')/Versions('{VersionsId}')",
				action: 'StandardCC.Versions.GetStandardCC',
			},
			{
				name: 'StandardCC.Versions.GetStandardCCs',
				value: "GET /StandardCCs('{StandardCCId}')/Versions",
				description: "Get StandardCC - get /StandardCCs('{StandardCCId}')/Versions",
				action: 'StandardCC.Versions.GetStandardCCs',
			},
			{
				name: 'StandardProcedure.AssignedOptionSet.GetOptionSet',
				value: "GET /StandardProcedures('{StandardProcedureId}')/AssignedOptionSet",
				description: "Get OptionSet - get /StandardProcedures('{StandardProcedureId}')/AssignedOptionSet",
				action: 'StandardProcedure.AssignedOptionSet.GetOptionSet',
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
				name: 'StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLink',
				value: "GET /StandardProcedures('{StandardProcedureId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				description: "Get DocumentDescribeLink for a given DocumentDescribeLinkId - get /StandardProcedures('{StandardProcedureId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				action: 'StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLink',
			},
			{
				name: 'StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLinks',
				value: "GET /StandardProcedures('{StandardProcedureId}')/DocumentDescribeLinks",
				description: "Get DocumentDescribeLink - get /StandardProcedures('{StandardProcedureId}')/DocumentDescribeLinks",
				action: 'StandardProcedure.DocumentDescribeLinks.GetDocumentDescribeLinks',
			},
			{
				name: 'StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLink',
				value: "GET /StandardProcedures('{StandardProcedureId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				description: "Get DocumentReferenceLink for a given DocumentReferenceLinkId - get /StandardProcedures('{StandardProcedureId}')/DocumentReferenceLinks('{DocumentReferenceLinkId}')",
				action: 'StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLink',
			},
			{
				name: 'StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLinks',
				value: "GET /StandardProcedures('{StandardProcedureId}')/DocumentReferenceLinks",
				description: "Get DocumentReferenceLink - get /StandardProcedures('{StandardProcedureId}')/DocumentReferenceLinks",
				action: 'StandardProcedure.DocumentReferenceLinks.GetDocumentReferenceLinks',
			},
			{
				name: 'StandardProcedure.Effectivities.GetEffectivity',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /StandardProcedures('{StandardProcedureId}')/Effectivities('{EffectivityId}')",
				action: 'StandardProcedure.Effectivities.GetEffectivity',
			},
			{
				name: 'StandardProcedure.Effectivities.GetEffectivitys',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Effectivities",
				description: "Get Effectivity - get /StandardProcedures('{StandardProcedureId}')/Effectivities",
				action: 'StandardProcedure.Effectivities.GetEffectivitys',
			},
			{
				name: 'StandardProcedure.Folder.GetFolder',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Folder",
				description: "Get Folder - get /StandardProcedures('{StandardProcedureId}')/Folder",
				action: 'StandardProcedure.Folder.GetFolder',
			},
			{
				name: 'StandardProcedure.Modifier.GetUser',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Modifier",
				description: "Get User - get /StandardProcedures('{StandardProcedureId}')/Modifier",
				action: 'StandardProcedure.Modifier.GetUser',
			},
			{
				name: 'StandardProcedure.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
				value: "DELETE /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Delete an existing OperationHolderUsageLink - delete /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'StandardProcedure.OperationHolderUsageLink.DeletePTC.MfgProcMgmt.OperationHolderUsageLink',
			},
			{
				name: 'StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLink',
				value: "GET /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				description: "Get OperationHolderUsageLink for a given OperationHolderUsageLinkId - get /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				action: 'StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLink',
			},
			{
				name: 'StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLinks',
				value: "GET /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink",
				description: "Get OperationHolderUsageLink - get /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink",
				action: 'StandardProcedure.OperationHolderUsageLink.GetOperationHolderUsageLinks',
			},
			{
				name: 'StandardProcedure.OperationUsageLinks.GetOperationUsageLink',
				value: "GET /StandardProcedures('{StandardProcedureId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				description: "Get OperationUsageLink for a given OperationUsageLinkId - get /StandardProcedures('{StandardProcedureId}')/OperationUsageLinks('{OperationUsageLinkId}')",
				action: 'StandardProcedure.OperationUsageLinks.GetOperationUsageLink',
			},
			{
				name: 'StandardProcedure.OperationUsageLinks.GetOperationUsageLinks',
				value: "GET /StandardProcedures('{StandardProcedureId}')/OperationUsageLinks",
				description: "Get OperationUsageLink - get /StandardProcedures('{StandardProcedureId}')/OperationUsageLinks",
				action: 'StandardProcedure.OperationUsageLinks.GetOperationUsageLinks',
			},
			{
				name: 'StandardProcedure.Organization.GetOrganization',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Organization",
				description: "Get Organization - get /StandardProcedures('{StandardProcedureId}')/Organization",
				action: 'StandardProcedure.Organization.GetOrganization',
			},
			{
				name: 'StandardProcedure.ResultedByObjects.GetChangeItem',
				value: "GET /StandardProcedures('{StandardProcedureId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /StandardProcedures('{StandardProcedureId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'StandardProcedure.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'StandardProcedure.ResultedByObjects.GetChangeItems',
				value: "GET /StandardProcedures('{StandardProcedureId}')/ResultedByObjects",
				description: "Get ChangeItem - get /StandardProcedures('{StandardProcedureId}')/ResultedByObjects",
				action: 'StandardProcedure.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'StandardProcedure.Revisions.GetProcessPlan',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Revisions('{ProcessPlanId}')",
				description: "Get ProcessPlan for a given ProcessPlanId - get /StandardProcedures('{StandardProcedureId}')/Revisions('{ProcessPlanId}')",
				action: 'StandardProcedure.Revisions.GetProcessPlan',
			},
			{
				name: 'StandardProcedure.Revisions.GetProcessPlans',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Revisions",
				description: "Get ProcessPlan - get /StandardProcedures('{StandardProcedureId}')/Revisions",
				action: 'StandardProcedure.Revisions.GetProcessPlans',
			},
			{
				name: 'StandardProcedure.StandardProcedureLink.GetStandardProcedureLink',
				value: "GET /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				description: "Get StandardProcedureLink for a given StandardProcedureLinkId - get /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				action: 'StandardProcedure.StandardProcedureLink.GetStandardProcedureLink',
			},
			{
				name: 'StandardProcedure.StandardProcedureLink.GetStandardProcedureLinks',
				value: "GET /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
				description: "Get StandardProcedureLink - get /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
				action: 'StandardProcedure.StandardProcedureLink.GetStandardProcedureLinks',
			},
			{
				name: 'StandardProcedure.StandardProcedureLink.PostStandardProcedureLink',
				value: "POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
				description: "Create StandardProcedureLink - post /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
				action: 'StandardProcedure.StandardProcedureLink.PostStandardProcedureLink',
			},
			{
				name: 'StandardProcedure.Versions.GetProcessPlan',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Versions('{ProcessPlanId}')",
				description: "Get ProcessPlan for a given ProcessPlanId - get /StandardProcedures('{StandardProcedureId}')/Versions('{ProcessPlanId}')",
				action: 'StandardProcedure.Versions.GetProcessPlan',
			},
			{
				name: 'StandardProcedure.Versions.GetProcessPlans',
				value: "GET /StandardProcedures('{StandardProcedureId}')/Versions",
				description: "Get ProcessPlan - get /StandardProcedures('{StandardProcedureId}')/Versions",
				action: 'StandardProcedure.Versions.GetProcessPlans',
			},
			{
				name: 'Tooling.AssignedOptionSet.GetOptionSet',
				value: "GET /Toolings('{ToolingId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Toolings('{ToolingId}')/AssignedOptionSet",
				action: 'Tooling.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'Tooling.Context.GetContainer',
				value: "GET /Toolings('{ToolingId}')/Context",
				description: "Get Container - get /Toolings('{ToolingId}')/Context",
				action: 'Tooling.Context.GetContainer',
			},
			{
				name: 'Tooling.Creator.GetUser',
				value: "GET /Toolings('{ToolingId}')/Creator",
				description: "Get User - get /Toolings('{ToolingId}')/Creator",
				action: 'Tooling.Creator.GetUser',
			},
			{
				name: 'Tooling.DescribedBy.GetResourceDescribeLink',
				value: "GET /Toolings('{ToolingId}')/DescribedBy('{ResourceDescribeLinkId}')",
				description: "Get ResourceDescribeLink for a given ResourceDescribeLinkId - get /Toolings('{ToolingId}')/DescribedBy('{ResourceDescribeLinkId}')",
				action: 'Tooling.DescribedBy.GetResourceDescribeLink',
			},
			{
				name: 'Tooling.DescribedBy.GetResourceDescribeLinks',
				value: "GET /Toolings('{ToolingId}')/DescribedBy",
				description: "Get ResourceDescribeLink - get /Toolings('{ToolingId}')/DescribedBy",
				action: 'Tooling.DescribedBy.GetResourceDescribeLinks',
			},
			{
				name: 'Tooling.Effectivities.GetEffectivity',
				value: "GET /Toolings('{ToolingId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Toolings('{ToolingId}')/Effectivities('{EffectivityId}')",
				action: 'Tooling.Effectivities.GetEffectivity',
			},
			{
				name: 'Tooling.Effectivities.GetEffectivitys',
				value: "GET /Toolings('{ToolingId}')/Effectivities",
				description: "Get Effectivity - get /Toolings('{ToolingId}')/Effectivities",
				action: 'Tooling.Effectivities.GetEffectivitys',
			},
			{
				name: 'Tooling.Folder.GetFolder',
				value: "GET /Toolings('{ToolingId}')/Folder",
				description: "Get Folder - get /Toolings('{ToolingId}')/Folder",
				action: 'Tooling.Folder.GetFolder',
			},
			{
				name: 'Tooling.Modifier.GetUser',
				value: "GET /Toolings('{ToolingId}')/Modifier",
				description: "Get User - get /Toolings('{ToolingId}')/Modifier",
				action: 'Tooling.Modifier.GetUser',
			},
			{
				name: 'Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLink',
				value: "GET /Toolings('{ToolingId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				description: "Get MPMCompatibilityLink for a given MPMCompatibilityLinkId - get /Toolings('{ToolingId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				action: 'Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLink',
			},
			{
				name: 'Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
				value: "GET /Toolings('{ToolingId}')/MPMCompatibilityLinks",
				description: "Get MPMCompatibilityLink - get /Toolings('{ToolingId}')/MPMCompatibilityLinks",
				action: 'Tooling.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
			},
			{
				name: 'Tooling.MPMCompatibilityLinks.PostMPMCompatibilityLink',
				value: "POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink - post /Toolings('{ToolingId}')/MPMCompatibilityLinks",
				action: 'Tooling.MPMCompatibilityLinks.PostMPMCompatibilityLink',
			},
			{
				name: 'Tooling.Organization.GetOrganization',
				value: "GET /Toolings('{ToolingId}')/Organization",
				description: "Get Organization - get /Toolings('{ToolingId}')/Organization",
				action: 'Tooling.Organization.GetOrganization',
			},
			{
				name: 'Tooling.PartDocAssociations.GetPartDocAssociation',
				value: "GET /Toolings('{ToolingId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Toolings('{ToolingId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'Tooling.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'Tooling.PartDocAssociations.GetPartDocAssociations',
				value: "GET /Toolings('{ToolingId}')/PartDocAssociations",
				description: "Get PartDocAssociation - get /Toolings('{ToolingId}')/PartDocAssociations",
				action: 'Tooling.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'Tooling.References.GetResourceReferenceLink',
				value: "GET /Toolings('{ToolingId}')/References('{ResourceReferenceLinkId}')",
				description: "Get ResourceReferenceLink for a given ResourceReferenceLinkId - get /Toolings('{ToolingId}')/References('{ResourceReferenceLinkId}')",
				action: 'Tooling.References.GetResourceReferenceLink',
			},
			{
				name: 'Tooling.References.GetResourceReferenceLinks',
				value: "GET /Toolings('{ToolingId}')/References",
				description: "Get ResourceReferenceLink - get /Toolings('{ToolingId}')/References",
				action: 'Tooling.References.GetResourceReferenceLinks',
			},
			{
				name: 'Tooling.ResultedByObjects.GetChangeItem',
				value: "GET /Toolings('{ToolingId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Toolings('{ToolingId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'Tooling.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'Tooling.ResultedByObjects.GetChangeItems',
				value: "GET /Toolings('{ToolingId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Toolings('{ToolingId}')/ResultedByObjects",
				action: 'Tooling.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'Tooling.Revisions.GetTooling',
				value: "GET /Toolings('{ToolingId}')/Revisions('{RevisionsId}')",
				description: "Get Tooling for a given RevisionsId - get /Toolings('{ToolingId}')/Revisions('{RevisionsId}')",
				action: 'Tooling.Revisions.GetTooling',
			},
			{
				name: 'Tooling.Revisions.GetToolings',
				value: "GET /Toolings('{ToolingId}')/Revisions",
				description: "Get Tooling - get /Toolings('{ToolingId}')/Revisions",
				action: 'Tooling.Revisions.GetToolings',
			},
			{
				name: 'Tooling.Uses.DeletePTC.ProdMgmt.PartUse',
				value: "DELETE /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				action: 'Tooling.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'Tooling.Uses.GetPartUse',
				value: "GET /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				action: 'Tooling.Uses.GetPartUse',
			},
			{
				name: 'Tooling.Uses.GetPartUses',
				value: "GET /Toolings('{ToolingId}')/Uses",
				description: "Get PartUse - get /Toolings('{ToolingId}')/Uses",
				action: 'Tooling.Uses.GetPartUses',
			},
			{
				name: 'Tooling.Uses.PostPartUse',
				value: "POST /Toolings('{ToolingId}')/Uses",
				description: "Create PartUse - post /Toolings('{ToolingId}')/Uses",
				action: 'Tooling.Uses.PostPartUse',
			},
			{
				name: 'Tooling.Uses.UpdatePartUse',
				value: "PATCH /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /Toolings('{ToolingId}')/Uses('{PartUseId}')",
				action: 'Tooling.Uses.UpdatePartUse',
			},
			{
				name: 'Tooling.Versions.GetTooling',
				value: "GET /Toolings('{ToolingId}')/Versions('{VersionsId}')",
				description: "Get Tooling for a given VersionsId - get /Toolings('{ToolingId}')/Versions('{VersionsId}')",
				action: 'Tooling.Versions.GetTooling',
			},
			{
				name: 'Tooling.Versions.GetToolings',
				value: "GET /Toolings('{ToolingId}')/Versions",
				description: "Get Tooling - get /Toolings('{ToolingId}')/Versions",
				action: 'Tooling.Versions.GetToolings',
			},
			{
				name: 'UpdateOperation',
				value: "PATCH /Operations('{OperationId}')",
				description: "Update an existing Operation - patch /Operations('{OperationId}')",
				action: 'UpdateOperation',
			},
			{
				name: 'UpdateProcessMaterial',
				value: "PATCH /ProcessMaterials('{ProcessMaterialId}')",
				description: "Update an existing ProcessMaterial - patch /ProcessMaterials('{ProcessMaterialId}')",
				action: 'UpdateProcessMaterial',
			},
			{
				name: 'UpdateProcessPlan',
				value: "PATCH /ProcessPlans('{ProcessPlanId}')",
				description: "Update an existing ProcessPlan - patch /ProcessPlans('{ProcessPlanId}')",
				action: 'UpdateProcessPlan',
			},
			{
				name: 'UpdateSequence',
				value: "PATCH /Sequences('{SequenceId}')",
				description: "Update an existing Sequence - patch /Sequences('{SequenceId}')",
				action: 'UpdateSequence',
			},
			{
				name: 'UpdateSkill',
				value: "PATCH /Skills('{SkillId}')",
				description: "Update an existing Skill - patch /Skills('{SkillId}')",
				action: 'UpdateSkill',
			},
			{
				name: 'UpdateStandardCC',
				value: "PATCH /StandardCCs('{StandardCCId}')",
				description: "Update an existing StandardCC - patch /StandardCCs('{StandardCCId}')",
				action: 'UpdateStandardCC',
			},
			{
				name: 'UpdateTooling',
				value: "PATCH /Toolings('{ToolingId}')",
				description: "Update an existing Tooling - patch /Toolings('{ToolingId}')",
				action: 'UpdateTooling',
			},
			{
				name: 'UpdateWorkCenter',
				value: "PATCH /WorkCenters('{WorkCenterId}')",
				description: "Update an existing WorkCenter - patch /WorkCenters('{WorkCenterId}')",
				action: 'UpdateWorkCenter',
			},
			{
				name: 'WorkCenter.AssignedOptionSet.GetOptionSet',
				value: "GET /WorkCenters('{WorkCenterId}')/AssignedOptionSet",
				description: "Get OptionSet - get /WorkCenters('{WorkCenterId}')/AssignedOptionSet",
				action: 'WorkCenter.AssignedOptionSet.GetOptionSet',
			},
			{
				name: 'WorkCenter.Context.GetContainer',
				value: "GET /WorkCenters('{WorkCenterId}')/Context",
				description: "Get Container - get /WorkCenters('{WorkCenterId}')/Context",
				action: 'WorkCenter.Context.GetContainer',
			},
			{
				name: 'WorkCenter.Creator.GetUser',
				value: "GET /WorkCenters('{WorkCenterId}')/Creator",
				description: "Get User - get /WorkCenters('{WorkCenterId}')/Creator",
				action: 'WorkCenter.Creator.GetUser',
			},
			{
				name: 'WorkCenter.DescribedBy.GetResourceDescribeLink',
				value: "GET /WorkCenters('{WorkCenterId}')/DescribedBy('{ResourceDescribeLinkId}')",
				description: "Get ResourceDescribeLink for a given ResourceDescribeLinkId - get /WorkCenters('{WorkCenterId}')/DescribedBy('{ResourceDescribeLinkId}')",
				action: 'WorkCenter.DescribedBy.GetResourceDescribeLink',
			},
			{
				name: 'WorkCenter.DescribedBy.GetResourceDescribeLinks',
				value: "GET /WorkCenters('{WorkCenterId}')/DescribedBy",
				description: "Get ResourceDescribeLink - get /WorkCenters('{WorkCenterId}')/DescribedBy",
				action: 'WorkCenter.DescribedBy.GetResourceDescribeLinks',
			},
			{
				name: 'WorkCenter.Effectivities.GetEffectivity',
				value: "GET /WorkCenters('{WorkCenterId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /WorkCenters('{WorkCenterId}')/Effectivities('{EffectivityId}')",
				action: 'WorkCenter.Effectivities.GetEffectivity',
			},
			{
				name: 'WorkCenter.Effectivities.GetEffectivitys',
				value: "GET /WorkCenters('{WorkCenterId}')/Effectivities",
				description: "Get Effectivity - get /WorkCenters('{WorkCenterId}')/Effectivities",
				action: 'WorkCenter.Effectivities.GetEffectivitys',
			},
			{
				name: 'WorkCenter.Folder.GetFolder',
				value: "GET /WorkCenters('{WorkCenterId}')/Folder",
				description: "Get Folder - get /WorkCenters('{WorkCenterId}')/Folder",
				action: 'WorkCenter.Folder.GetFolder',
			},
			{
				name: 'WorkCenter.Modifier.GetUser',
				value: "GET /WorkCenters('{WorkCenterId}')/Modifier",
				description: "Get User - get /WorkCenters('{WorkCenterId}')/Modifier",
				action: 'WorkCenter.Modifier.GetUser',
			},
			{
				name: 'WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLink',
				value: "GET /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				description: "Get MPMCompatibilityLink for a given MPMCompatibilityLinkId - get /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				action: 'WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLink',
			},
			{
				name: 'WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
				value: "GET /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks",
				description: "Get MPMCompatibilityLink - get /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks",
				action: 'WorkCenter.MPMCompatibilityLinks.GetMPMCompatibilityLinks',
			},
			{
				name: 'WorkCenter.MPMCompatibilityLinks.PostMPMCompatibilityLink',
				value: "POST /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks",
				description: "Create MPMCompatibilityLink - post /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks",
				action: 'WorkCenter.MPMCompatibilityLinks.PostMPMCompatibilityLink',
			},
			{
				name: 'WorkCenter.Organization.GetOrganization',
				value: "GET /WorkCenters('{WorkCenterId}')/Organization",
				description: "Get Organization - get /WorkCenters('{WorkCenterId}')/Organization",
				action: 'WorkCenter.Organization.GetOrganization',
			},
			{
				name: 'WorkCenter.PartDocAssociations.GetPartDocAssociation',
				value: "GET /WorkCenters('{WorkCenterId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /WorkCenters('{WorkCenterId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: 'WorkCenter.PartDocAssociations.GetPartDocAssociation',
			},
			{
				name: 'WorkCenter.PartDocAssociations.GetPartDocAssociations',
				value: "GET /WorkCenters('{WorkCenterId}')/PartDocAssociations",
				description: "Get PartDocAssociation - get /WorkCenters('{WorkCenterId}')/PartDocAssociations",
				action: 'WorkCenter.PartDocAssociations.GetPartDocAssociations',
			},
			{
				name: 'WorkCenter.References.GetResourceReferenceLink',
				value: "GET /WorkCenters('{WorkCenterId}')/References('{ResourceReferenceLinkId}')",
				description: "Get ResourceReferenceLink for a given ResourceReferenceLinkId - get /WorkCenters('{WorkCenterId}')/References('{ResourceReferenceLinkId}')",
				action: 'WorkCenter.References.GetResourceReferenceLink',
			},
			{
				name: 'WorkCenter.References.GetResourceReferenceLinks',
				value: "GET /WorkCenters('{WorkCenterId}')/References",
				description: "Get ResourceReferenceLink - get /WorkCenters('{WorkCenterId}')/References",
				action: 'WorkCenter.References.GetResourceReferenceLinks',
			},
			{
				name: 'WorkCenter.ResultedByObjects.GetChangeItem',
				value: "GET /WorkCenters('{WorkCenterId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /WorkCenters('{WorkCenterId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'WorkCenter.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'WorkCenter.ResultedByObjects.GetChangeItems',
				value: "GET /WorkCenters('{WorkCenterId}')/ResultedByObjects",
				description: "Get ChangeItem - get /WorkCenters('{WorkCenterId}')/ResultedByObjects",
				action: 'WorkCenter.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'WorkCenter.Revisions.GetWorkCenter',
				value: "GET /WorkCenters('{WorkCenterId}')/Revisions('{RevisionsId}')",
				description: "Get WorkCenter for a given RevisionsId - get /WorkCenters('{WorkCenterId}')/Revisions('{RevisionsId}')",
				action: 'WorkCenter.Revisions.GetWorkCenter',
			},
			{
				name: 'WorkCenter.Revisions.GetWorkCenters',
				value: "GET /WorkCenters('{WorkCenterId}')/Revisions",
				description: "Get WorkCenter - get /WorkCenters('{WorkCenterId}')/Revisions",
				action: 'WorkCenter.Revisions.GetWorkCenters',
			},
			{
				name: 'WorkCenter.Uses.DeletePTC.ProdMgmt.PartUse',
				value: "DELETE /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				description: "Delete an existing PartUse - delete /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				action: 'WorkCenter.Uses.DeletePTC.ProdMgmt.PartUse',
			},
			{
				name: 'WorkCenter.Uses.GetPartUse',
				value: "GET /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				action: 'WorkCenter.Uses.GetPartUse',
			},
			{
				name: 'WorkCenter.Uses.GetPartUses',
				value: "GET /WorkCenters('{WorkCenterId}')/Uses",
				description: "Get PartUse - get /WorkCenters('{WorkCenterId}')/Uses",
				action: 'WorkCenter.Uses.GetPartUses',
			},
			{
				name: 'WorkCenter.Uses.PostPartUse',
				value: "POST /WorkCenters('{WorkCenterId}')/Uses",
				description: "Create PartUse - post /WorkCenters('{WorkCenterId}')/Uses",
				action: 'WorkCenter.Uses.PostPartUse',
			},
			{
				name: 'WorkCenter.Uses.UpdatePartUse',
				value: "PATCH /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				description: "Update an existing PartUse - patch /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				action: 'WorkCenter.Uses.UpdatePartUse',
			},
			{
				name: 'WorkCenter.Versions.GetWorkCenter',
				value: "GET /WorkCenters('{WorkCenterId}')/Versions('{VersionsId}')",
				description: "Get WorkCenter for a given VersionsId - get /WorkCenters('{WorkCenterId}')/Versions('{VersionsId}')",
				action: 'WorkCenter.Versions.GetWorkCenter',
			},
			{
				name: 'WorkCenter.Versions.GetWorkCenters',
				value: "GET /WorkCenters('{WorkCenterId}')/Versions",
				description: "Get WorkCenter - get /WorkCenters('{WorkCenterId}')/Versions",
				action: 'WorkCenter.Versions.GetWorkCenters',
			},
		],
	},
	...ActionChangeOperationIdentity.description,
	...ActionChangeProcessMaterialIdentity.description,
	...ActionChangeProcessPlanIdentity.description,
	...ActionChangeSequenceIdentity.description,
	...ActionChangeSkillIdentity.description,
	...ActionChangeToolingIdentity.description,
	...ActionCheckInMaterials.description,
	...ActionCheckInOperations.description,
	...ActionCheckInProcessMaterials.description,
	...ActionCheckInProcessPlans.description,
	...ActionCheckInSequences.description,
	...ActionCheckInSkills.description,
	...ActionCheckInStandardCCs.description,
	...ActionCheckInToolings.description,
	...ActionCheckInWorkCenters.description,
	...ActionCheckOutMaterials.description,
	...ActionCheckOutOperations.description,
	...ActionCheckOutProcessMaterials.description,
	...ActionCheckOutProcessPlans.description,
	...ActionCheckOutSequences.description,
	...ActionCheckOutSkills.description,
	...ActionCheckOutStandardCCs.description,
	...ActionCheckOutToolings.description,
	...ActionCheckOutWorkCenters.description,
	...ActionCreateAssociativeToSccLinks.description,
	...ActionCreateMpmStandardCcUsageToDdLinks.description,
	...ActionCreateMpmStdCcUsageToProcessPlanLink.description,
	...ActionCreateOperations.description,
	...ActionCreatePartTags.description,
	...ActionCreateProcessMaterials.description,
	...ActionCreateProcessPlans.description,
	...ActionCreateResourcesAssociations.description,
	...ActionCreateSequences.description,
	...ActionCreateSkills.description,
	...ActionCreateStandardCCs.description,
	...ActionCreateStandardCcUsageToResourceLink.description,
	...ActionCreateToolings.description,
	...ActionCreateWorkCenters.description,
	...ActionDeleteAssociativeToSccLinks.description,
	...ActionDeleteMpmCompatibilityLinks.description,
	...ActionDeleteMpmStandardCcUsageToDdLinks.description,
	...ActionDeleteMpmStdCcUsageToProcessPlanLinks.description,
	...ActionDeleteMpmStdCcUsageToResourceLinks.description,
	...ActionDeleteOperations.description,
	...ActionDeletePartTags.description,
	...ActionDeleteProcessMaterials.description,
	...ActionDeleteProcessPlans.description,
	...ActionDeleteResourcesAssociations.description,
	...ActionDeleteSkills.description,
	...ActionDeleteStandardCCs.description,
	...ActionDeleteToolings.description,
	...ActionDeleteWorkCenters.description,
	...ActionEditOperationsSecurityLabels.description,
	...ActionEditProcessMaterialsSecurityLabels.description,
	...ActionEditProcessPlansSecurityLabels.description,
	...ActionEditSequencesSecurityLabels.description,
	...ActionEditSkillsSecurityLabels.description,
	...ActionEditStandardCCsSecurityLabels.description,
	...ActionEditToolingsSecurityLabels.description,
	...ActionEditWorkCentersSecurityLabels.description,
	...ActionGetUnallocatedScCs.description,
	...ActionReviseMaterials.description,
	...ActionReviseOperations.description,
	...ActionReviseProcessMaterials.description,
	...ActionReviseProcessPlans.description,
	...ActionReviseSequences.description,
	...ActionReviseSkills.description,
	...ActionReviseStandardCCs.description,
	...ActionReviseStandardProcedures.description,
	...ActionReviseToolings.description,
	...ActionReviseWorkCenters.description,
	...ActionSetStateMaterials.description,
	...ActionSetStateOperations.description,
	...ActionSetStateProcessMaterials.description,
	...ActionSetStateProcessPlans.description,
	...ActionSetStateSequences.description,
	...ActionSetStateSkills.description,
	...ActionSetStateStandardCCs.description,
	...ActionSetStateStandardProcedures.description,
	...ActionSetStateToolings.description,
	...ActionSetStateWorkCenters.description,
	...ActionUndoCheckOutMaterials.description,
	...ActionUndoCheckOutOperations.description,
	...ActionUndoCheckOutProcessMaterials.description,
	...ActionUndoCheckOutProcessPlans.description,
	...ActionUndoCheckOutSequences.description,
	...ActionUndoCheckOutSkills.description,
	...ActionUndoCheckOutStandardCCs.description,
	...ActionUndoCheckOutToolings.description,
	...ActionUndoCheckOutWorkCenters.description,
	...ActionUpdateAssociativeToSccLinks.description,
	...ActionUpdateMpmStdCcUsageToProcessPlanLink.description,
	...ActionUpdateMpmStdCcUsageToResourceLinks.description,
	...ActionUpdateOperations.description,
	...ActionUpdateProcessMaterials.description,
	...ActionUpdateProcessPlans.description,
	...ActionUpdateSequences.description,
	...ActionUpdateSkills.description,
	...ActionUpdateStandardCCs.description,
	...ActionUpdateToolings.description,
	...ActionUpdateWorkCenters.description,
	...DeleteOperation.description,
	...DeleteProcessMaterial.description,
	...DeleteProcessPlan.description,
	...DeleteSkill.description,
	...DeleteStandardCc.description,
	...DeleteTooling.description,
	...DeleteWorkCenter.description,
	...DocumentManageableCreatorGetUser.description,
	...DocumentManageableDocumentDescribeLinksGetDocumentDescribeLink.description,
	...DocumentManageableDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...DocumentManageableDocumentReferenceLinksGetDocumentReferenceLink.description,
	...DocumentManageableDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...DocumentManageableModifierGetUser.description,
	...EpmDocumentManageableCreatorGetUser.description,
	...EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLink.description,
	...EpmDocumentManageableEpmDocumentDescribeLinksGetMpmEpmDocumentDescribeLinks.description,
	...EpmDocumentManageableModifierGetUser.description,
	...GetConsumableResources.description,
	...GetDocumentManageable.description,
	...GetDocumentManageables.description,
	...GetEpmDocumentManageable.description,
	...GetEpmDocumentManageables.description,
	...GetMaterial.description,
	...GetMaterials.description,
	...GetMpmStandardOperations.description,
	...GetOperation.description,
	...GetOperationHolder.description,
	...GetOperationHolders.description,
	...GetOperations.description,
	...GetProcessMaterial.description,
	...GetProcessMaterials.description,
	...GetProcessPlan.description,
	...GetProcessPlans.description,
	...GetResource.description,
	...GetResources.description,
	...GetSequence.description,
	...GetSequenceHolder.description,
	...GetSequenceHolders.description,
	...GetSequences.description,
	...GetSkill.description,
	...GetSkills.description,
	...GetStandardCc.description,
	...GetStandardCCs.description,
	...GetStandardProcedure.description,
	...GetStandardProcedures.description,
	...GetTooling.description,
	...GetToolings.description,
	...GetWorkCenter.description,
	...GetWorkCenters.description,
	...MaterialAssociativeToSccLinksGetAssociativeToStandardCcLink.description,
	...MaterialAssociativeToSccLinksGetAssociativeToStandardCcLinks.description,
	...MaterialContextGetContainer.description,
	...MaterialCreatorGetUser.description,
	...MaterialFolderGetFolder.description,
	...MaterialModifierGetUser.description,
	...MaterialOrganizationGetOrganization.description,
	...MaterialPartToProcessPlanLinksGetPartToProcessPlanLink.description,
	...MaterialPartToProcessPlanLinksGetPartToProcessPlanLinks.description,
	...MaterialRepresentationsGetRepresentation.description,
	...MaterialRepresentationsGetRepresentations.description,
	...MaterialRevisionsGetMaterial.description,
	...MaterialRevisionsGetMaterials.description,
	...MaterialVersionsGetMaterial.description,
	...MaterialVersionsGetMaterials.description,
	...OperationAssignedOptionSetGetOptionSet.description,
	...OperationContextGetContainer.description,
	...OperationCreatorGetUser.description,
	...OperationDocumentDescribeLinksGetDocumentDescribeLink.description,
	...OperationDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...OperationDocumentReferenceLinksGetDocumentReferenceLink.description,
	...OperationDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...OperationEffectivitiesGetEffectivity.description,
	...OperationEffectivitiesGetEffectivitys.description,
	...OperationFolderGetFolder.description,
	...OperationModifierGetUser.description,
	...OperationOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink.description,
	...OperationOperationHolderUsageLinkGetOperationHolderUsageLink.description,
	...OperationOperationHolderUsageLinkGetOperationHolderUsageLinks.description,
	...OperationOperationToConsumableLinksDeletePtcMfgProcMgmtOperationToConsumableLink.description,
	...OperationOperationToConsumableLinksGetOperationToConsumableLink.description,
	...OperationOperationToConsumableLinksGetOperationToConsumableLinks.description,
	...OperationOperationToConsumableLinksPostOperationToConsumableLink.description,
	...OperationOperationToConsumableLinksUpdateOperationToConsumableLink.description,
	...OperationOperationToOperatedPartLinkGetOperationToOperatedPartLink.description,
	...OperationOperationToOperatedPartLinkGetOperationToOperatedPartLinks.description,
	...OperationOperationToPartLinkGetOperationToPartLink.description,
	...OperationOperationToPartLinkGetOperationToPartLinks.description,
	...OperationOperationToPartLinkUpdateOperationToPartLink.description,
	...OperationOperationToWorkCenterLinksDeletePtcMfgProcMgmtOperationToWorkCenterLink.description,
	...OperationOperationToWorkCenterLinksGetOperationToWorkCenterLink.description,
	...OperationOperationToWorkCenterLinksGetOperationToWorkCenterLinks.description,
	...OperationOperationToWorkCenterLinksUpdateOperationToWorkCenterLink.description,
	...OperationOperationUsageLinksGetOperationUsageLink.description,
	...OperationOperationUsageLinksGetOperationUsageLinks.description,
	...OperationOrganizationGetOrganization.description,
	...OperationRepresentationsGetRepresentation.description,
	...OperationRepresentationsGetRepresentations.description,
	...OperationResultedByObjectsGetChangeItem.description,
	...OperationResultedByObjectsGetChangeItems.description,
	...OperationRevisionsGetOperation.description,
	...OperationRevisionsGetOperations.description,
	...OperationStandardCcLinksGetOperationToStandardCcLink.description,
	...OperationStandardCcLinksGetOperationToStandardCcLinks.description,
	...OperationStandardProcedureLinkGetStandardProcedureLink.description,
	...OperationStandardProcedureLinkGetStandardProcedureLinks.description,
	...OperationStandardProcedureLinkPostStandardProcedureLink.description,
	...OperationVersionsGetOperation.description,
	...OperationVersionsGetOperations.description,
	...OperationHolderCreatorGetUser.description,
	...OperationHolderDocumentDescribeLinksGetDocumentDescribeLink.description,
	...OperationHolderDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...OperationHolderDocumentReferenceLinksGetDocumentReferenceLink.description,
	...OperationHolderDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...OperationHolderModifierGetUser.description,
	...OperationHolderOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink.description,
	...OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLink.description,
	...OperationHolderOperationHolderUsageLinkGetOperationHolderUsageLinks.description,
	...OperationHolderOperationUsageLinksGetOperationUsageLink.description,
	...OperationHolderOperationUsageLinksGetOperationUsageLinks.description,
	...PostOperation.description,
	...PostProcessMaterial.description,
	...PostProcessPlan.description,
	...PostSequence.description,
	...PostSkill.description,
	...PostStandardCc.description,
	...PostTooling.description,
	...PostWorkCenter.description,
	...ProcessMaterialAssignedOptionSetGetOptionSet.description,
	...ProcessMaterialContextGetContainer.description,
	...ProcessMaterialCreatorGetUser.description,
	...ProcessMaterialDescribedByGetResourceDescribeLink.description,
	...ProcessMaterialDescribedByGetResourceDescribeLinks.description,
	...ProcessMaterialEffectivitiesGetEffectivity.description,
	...ProcessMaterialEffectivitiesGetEffectivitys.description,
	...ProcessMaterialFolderGetFolder.description,
	...ProcessMaterialModifierGetUser.description,
	...ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLink.description,
	...ProcessMaterialMpmCompatibilityLinksGetMpmCompatibilityLinks.description,
	...ProcessMaterialMpmCompatibilityLinksPostMpmCompatibilityLink.description,
	...ProcessMaterialOrganizationGetOrganization.description,
	...ProcessMaterialPartDocAssociationsGetPartDocAssociation.description,
	...ProcessMaterialPartDocAssociationsGetPartDocAssociations.description,
	...ProcessMaterialReferencesGetResourceReferenceLink.description,
	...ProcessMaterialReferencesGetResourceReferenceLinks.description,
	...ProcessMaterialResultedByObjectsGetChangeItem.description,
	...ProcessMaterialResultedByObjectsGetChangeItems.description,
	...ProcessMaterialRevisionsGetProcessMaterial.description,
	...ProcessMaterialRevisionsGetProcessMaterials.description,
	...ProcessMaterialUsesDeletePtcProdMgmtPartUse.description,
	...ProcessMaterialUsesGetPartUse.description,
	...ProcessMaterialUsesGetPartUses.description,
	...ProcessMaterialUsesPostPartUse.description,
	...ProcessMaterialUsesUpdatePartUse.description,
	...ProcessMaterialVersionsGetProcessMaterial.description,
	...ProcessMaterialVersionsGetProcessMaterials.description,
	...ProcessPlanAssignedOptionSetGetOptionSet.description,
	...ProcessPlanContextGetContainer.description,
	...ProcessPlanCreatorGetUser.description,
	...ProcessPlanDocumentDescribeLinksGetDocumentDescribeLink.description,
	...ProcessPlanDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...ProcessPlanDocumentReferenceLinksGetDocumentReferenceLink.description,
	...ProcessPlanDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...ProcessPlanEffectivitiesGetEffectivity.description,
	...ProcessPlanEffectivitiesGetEffectivitys.description,
	...ProcessPlanFolderGetFolder.description,
	...ProcessPlanModifierGetUser.description,
	...ProcessPlanOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink.description,
	...ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLink.description,
	...ProcessPlanOperationHolderUsageLinkGetOperationHolderUsageLinks.description,
	...ProcessPlanOperationUsageLinksGetOperationUsageLink.description,
	...ProcessPlanOperationUsageLinksGetOperationUsageLinks.description,
	...ProcessPlanOrganizationGetOrganization.description,
	...ProcessPlanResultedByObjectsGetChangeItem.description,
	...ProcessPlanResultedByObjectsGetChangeItems.description,
	...ProcessPlanRevisionsGetProcessPlan.description,
	...ProcessPlanRevisionsGetProcessPlans.description,
	...ProcessPlanStandardProcedureLinkGetStandardProcedureLink.description,
	...ProcessPlanStandardProcedureLinkGetStandardProcedureLinks.description,
	...ProcessPlanStandardProcedureLinkPostStandardProcedureLink.description,
	...ProcessPlanVersionsGetProcessPlan.description,
	...ProcessPlanVersionsGetProcessPlans.description,
	...PtcMfgProcMgmtDocumentManageableActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtDocumentManageableActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtDocumentManageableActionGetDocumentsWith.description,
	...PtcMfgProcMgmtDocumentManageableActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtDocumentManageableFunctionDownloadUrls.description,
	...PtcMfgProcMgmtEpmDocumentManageableActionCreateMpmepmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtEpmDocumentManageableActionDeleteMpmepmDocumentDescribeLinksWithChangeOid.description,
	...PtcMfgProcMgmtEpmDocumentManageableActionGetMpmepmDocumentDescribesWith.description,
	...PtcMfgProcMgmtMaterialActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtMaterialActionCheckOutWith.description,
	...PtcMfgProcMgmtMaterialActionCreateMpmPartToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtMaterialActionDeleteMpmPartToProcessPlanLinksWithChangeOid.description,
	...PtcMfgProcMgmtMaterialActionReviseWith.description,
	...PtcMfgProcMgmtMaterialActionSetStateWith.description,
	...PtcMfgProcMgmtMaterialActionUndoCheckOut.description,
	...PtcMfgProcMgmtMaterialActionUpdateMpmPartToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtMaterialFunctionAllProcessPlans.description,
	...PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentation.description,
	...PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationWith.description,
	...PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWith.description,
	...PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotations.description,
	...PtcMfgProcMgmtMaterialFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtMaterialFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtMaterialFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtMaterialFunctionLatestProcessPlans.description,
	...PtcMfgProcMgmtOperationActionAssignCcFromProductWith.description,
	...PtcMfgProcMgmtOperationActionAssociateConsumableResourcesWith.description,
	...PtcMfgProcMgmtOperationActionAssociateStandardOperationsWith.description,
	...PtcMfgProcMgmtOperationActionAssociateWorkCenterWithDoCopyOverDefaultCostAndTime.description,
	...PtcMfgProcMgmtOperationActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtOperationActionCheckOutWith.description,
	...PtcMfgProcMgmtOperationActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtOperationActionCreateMpmDocumentReferenceLinksWith.description,
	...PtcMfgProcMgmtOperationActionCreateMpmOperationToPartLinksWithOperationPathProcessPlanIdRelatedAssemblyIdProcessPlanNavigationCriteriaIdRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationActionCreateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtOperationActionCreateOperationToOperatedPartLinkWith.description,
	...PtcMfgProcMgmtOperationActionCreateOperationToStandardCcLinkWith.description,
	...PtcMfgProcMgmtOperationActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtOperationActionDeleteMpmOperationToPartLinksWithChangeOid.description,
	...PtcMfgProcMgmtOperationActionDeleteMpmOperationToStandardCcLinksWithChangeOid.description,
	...PtcMfgProcMgmtOperationActionDeleteOperationToConsumableLinkWithChangeOid.description,
	...PtcMfgProcMgmtOperationActionDeleteOperationToOperatedPartLinksWithChangeOid.description,
	...PtcMfgProcMgmtOperationActionGetBopWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria.description,
	...PtcMfgProcMgmtOperationActionGetConsumedWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationActionGetConsumedWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria.description,
	...PtcMfgProcMgmtOperationActionGetDocumentsWith.description,
	...PtcMfgProcMgmtOperationActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtOperationActionInsertNewOperationsWith.description,
	...PtcMfgProcMgmtOperationActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtOperationActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtOperationActionReviseWith.description,
	...PtcMfgProcMgmtOperationActionSetStateWith.description,
	...PtcMfgProcMgmtOperationActionUndoCheckOut.description,
	...PtcMfgProcMgmtOperationActionUpdateConsumableLinksWith.description,
	...PtcMfgProcMgmtOperationActionUpdateMpmOperationUsageLinksWith.description,
	...PtcMfgProcMgmtOperationActionUpdateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtOperationActionUpdateOperationToOperatedPartLinkWith.description,
	...PtcMfgProcMgmtOperationActionUpdateOperationToPartLinkWith.description,
	...PtcMfgProcMgmtOperationActionUpdateOperationToStandardCcLinkWith.description,
	...PtcMfgProcMgmtOperationFunctionAllocatedWorkCenterWith.description,
	...PtcMfgProcMgmtOperationFunctionConsumedPartsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionConsumedProcessMaterialsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionConsumedResourcesWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionConsumedSkillsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionConsumedToolingsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionDownloadUrls.description,
	...PtcMfgProcMgmtOperationFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtOperationFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtOperationFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtOperationFunctionOperatedOnPartsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionOperationsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtOperationHolderActionAssociateStandardOperationsWith.description,
	...PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtOperationHolderActionCreateMpmDocumentReferenceLinksWith.description,
	...PtcMfgProcMgmtOperationHolderActionCreateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtOperationHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtOperationHolderActionGetDocumentsWith.description,
	...PtcMfgProcMgmtOperationHolderActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtOperationHolderActionUpdateMpmOperationUsageLinksWith.description,
	...PtcMfgProcMgmtOperationHolderActionUpdateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtOperationHolderFunctionDownloadUrls.description,
	...PtcMfgProcMgmtProcessMaterialActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtProcessMaterialActionCheckOutWith.description,
	...PtcMfgProcMgmtProcessMaterialActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtProcessMaterialActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtProcessMaterialActionReviseWith.description,
	...PtcMfgProcMgmtProcessMaterialActionSetStateWith.description,
	...PtcMfgProcMgmtProcessMaterialActionUndoCheckOut.description,
	...PtcMfgProcMgmtProcessMaterialFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtProcessMaterialFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtProcessMaterialFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtProcessPlanActionAssociateStandardOperationsWith.description,
	...PtcMfgProcMgmtProcessPlanActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtProcessPlanActionCheckOutWith.description,
	...PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtProcessPlanActionCreateMpmDocumentReferenceLinksWith.description,
	...PtcMfgProcMgmtProcessPlanActionCreateMpmPartToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtProcessPlanActionCreateMpmSequencesInProcessPlanContextWith.description,
	...PtcMfgProcMgmtProcessPlanActionCreateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtProcessPlanActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtProcessPlanActionGetBopWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtProcessPlanActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria.description,
	...PtcMfgProcMgmtProcessPlanActionGetDocumentsWith.description,
	...PtcMfgProcMgmtProcessPlanActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtProcessPlanActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtProcessPlanActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtProcessPlanActionReviseWith.description,
	...PtcMfgProcMgmtProcessPlanActionSetStateWith.description,
	...PtcMfgProcMgmtProcessPlanActionUndoCheckOut.description,
	...PtcMfgProcMgmtProcessPlanActionUpdateMpmOperationUsageLinksWith.description,
	...PtcMfgProcMgmtProcessPlanActionUpdateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtProcessPlanFunctionDownloadUrls.description,
	...PtcMfgProcMgmtProcessPlanFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtProcessPlanFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtProcessPlanFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtProcessPlanFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtProcessPlanFunctionOperationsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtProcessPlanFunctionSequencesWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtProcessPlanFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtResourceActionCreateMpmCompatibilityLinksWith.description,
	...PtcMfgProcMgmtResourceActionCreateResourceDescribeDocumentLinksWith.description,
	...PtcMfgProcMgmtResourceActionCreateResourceReferenceDocumentLinksWith.description,
	...PtcMfgProcMgmtResourceActionCreateUsesWithResourceUses.description,
	...PtcMfgProcMgmtResourceActionDeleteResourceDescribeLinksWithChangeOid.description,
	...PtcMfgProcMgmtResourceActionDeleteResourceReferenceLinksWithChangeOid.description,
	...PtcMfgProcMgmtResourceActionGetPartStructureWith.description,
	...PtcMfgProcMgmtSequenceActionAssociateStandardOperationsWith.description,
	...PtcMfgProcMgmtSequenceActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtSequenceActionCheckOutWith.description,
	...PtcMfgProcMgmtSequenceActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtSequenceActionCreateMpmDocumentReferenceLinksWith.description,
	...PtcMfgProcMgmtSequenceActionCreateMpmSequencesInSequenceContextWith.description,
	...PtcMfgProcMgmtSequenceActionCreateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtSequenceActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtSequenceActionGetBopWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtSequenceActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria.description,
	...PtcMfgProcMgmtSequenceActionGetDocumentsWith.description,
	...PtcMfgProcMgmtSequenceActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtSequenceActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtSequenceActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtSequenceActionReviseWith.description,
	...PtcMfgProcMgmtSequenceActionSetStateWith.description,
	...PtcMfgProcMgmtSequenceActionUndoCheckOut.description,
	...PtcMfgProcMgmtSequenceActionUpdateMpmOperationUsageLinksWith.description,
	...PtcMfgProcMgmtSequenceActionUpdateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtSequenceFunctionDownloadUrls.description,
	...PtcMfgProcMgmtSequenceFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtSequenceFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtSequenceFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtSequenceFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtSequenceFunctionOperationsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtSequenceFunctionSequencesWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtSequenceFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtSequenceHolderActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtSequenceHolderActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtSequenceHolderActionGetDocumentsWith.description,
	...PtcMfgProcMgmtSequenceHolderActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtSequenceHolderActionUpdateSequenceUsageLinkWith.description,
	...PtcMfgProcMgmtSequenceHolderFunctionDownloadUrls.description,
	...PtcMfgProcMgmtSkillActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtSkillActionCheckOutWith.description,
	...PtcMfgProcMgmtSkillActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtSkillActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtSkillActionReviseWith.description,
	...PtcMfgProcMgmtSkillActionSetStateWith.description,
	...PtcMfgProcMgmtSkillActionUndoCheckOut.description,
	...PtcMfgProcMgmtSkillFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtSkillFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtSkillFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtStandardCcActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtStandardCcActionCheckOutWith.description,
	...PtcMfgProcMgmtStandardCcActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtStandardCcActionCreateMpmStandardCcToResourceLinksWith.description,
	...PtcMfgProcMgmtStandardCcActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtStandardCcActionDeleteMpmStandardCcToResourceLinksWithChangeOid.description,
	...PtcMfgProcMgmtStandardCcActionGetDocumentsWith.description,
	...PtcMfgProcMgmtStandardCcActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtStandardCcActionReviseWith.description,
	...PtcMfgProcMgmtStandardCcActionSetStateWith.description,
	...PtcMfgProcMgmtStandardCcActionUndoCheckOut.description,
	...PtcMfgProcMgmtStandardCcActionUpdateMpmStandardCcToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtStandardCcFunctionDownloadUrls.description,
	...PtcMfgProcMgmtStandardCcFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtStandardCcFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtStandardCcFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtStandardProcedureActionAssociateStandardOperationsWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtStandardProcedureActionCheckOutWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentDescribeLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCreateMpmDocumentReferenceLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCreateMpmPartToProcessPlanLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCreateMpmSequencesInProcessPlanContextWith.description,
	...PtcMfgProcMgmtStandardProcedureActionCreateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureActionDeleteMpmDocumentDescribeLinkWithChangeOid.description,
	...PtcMfgProcMgmtStandardProcedureActionGetBopWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtStandardProcedureActionGetBopWithInlineNavCriteriaWithRelatedAssemblyNavigationCriteria.description,
	...PtcMfgProcMgmtStandardProcedureActionGetDocumentsWith.description,
	...PtcMfgProcMgmtStandardProcedureActionGetDocumentsWithInlineNavCriteriaWith.description,
	...PtcMfgProcMgmtStandardProcedureActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtStandardProcedureActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtStandardProcedureActionReviseWith.description,
	...PtcMfgProcMgmtStandardProcedureActionSetStateWith.description,
	...PtcMfgProcMgmtStandardProcedureActionUndoCheckOut.description,
	...PtcMfgProcMgmtStandardProcedureActionUpdateMpmOperationUsageLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureActionUpdateMpmStandardProcedureLinksWith.description,
	...PtcMfgProcMgmtStandardProcedureFunctionDownloadUrls.description,
	...PtcMfgProcMgmtStandardProcedureFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtStandardProcedureFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtStandardProcedureFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtStandardProcedureFunctionOperationHoldersWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtStandardProcedureFunctionOperationsWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtStandardProcedureFunctionSequencesWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtStandardProcedureFunctionStandardProceduresWithRelatedAssemblyNavigationCriteriaId.description,
	...PtcMfgProcMgmtToolingActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtToolingActionCheckOutWith.description,
	...PtcMfgProcMgmtToolingActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtToolingActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtToolingActionReviseWith.description,
	...PtcMfgProcMgmtToolingActionSetStateWith.description,
	...PtcMfgProcMgmtToolingActionUndoCheckOut.description,
	...PtcMfgProcMgmtToolingFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtToolingFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtToolingFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtWorkCenterActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcMfgProcMgmtWorkCenterActionCheckOutWith.description,
	...PtcMfgProcMgmtWorkCenterActionCreateMpmCompatibilityLinksWith.description,
	...PtcMfgProcMgmtWorkCenterActionCreateResourceDescribeDocumentLinksWith.description,
	...PtcMfgProcMgmtWorkCenterActionCreateResourceReferenceDocumentLinksWith.description,
	...PtcMfgProcMgmtWorkCenterActionCreateUsesWithResourceUses.description,
	...PtcMfgProcMgmtWorkCenterActionDeleteResourceDescribeLinksWithChangeOid.description,
	...PtcMfgProcMgmtWorkCenterActionDeleteResourceReferenceLinksWithChangeOid.description,
	...PtcMfgProcMgmtWorkCenterActionGetPartStructureWith.description,
	...PtcMfgProcMgmtWorkCenterActionModifyEffectivitiesWith.description,
	...PtcMfgProcMgmtWorkCenterActionRemoveEffectivitiesWith.description,
	...PtcMfgProcMgmtWorkCenterActionReviseWith.description,
	...PtcMfgProcMgmtWorkCenterActionSetStateWith.description,
	...PtcMfgProcMgmtWorkCenterActionUndoCheckOut.description,
	...PtcMfgProcMgmtWorkCenterFunctionGetLifeCycleTemplate.description,
	...PtcMfgProcMgmtWorkCenterFunctionGetValidStateTransitions.description,
	...PtcMfgProcMgmtWorkCenterFunctionIsCheckoutAllowed.description,
	...PtcMfgProcMgmtWorkCenterFunctionLocalizedOperationsWithProcessPlanId.description,
	...ResourceCreatorGetUser.description,
	...ResourceDescribedByGetResourceDescribeLink.description,
	...ResourceDescribedByGetResourceDescribeLinks.description,
	...ResourceModifierGetUser.description,
	...ResourceMpmCompatibilityLinksGetMpmCompatibilityLink.description,
	...ResourceMpmCompatibilityLinksGetMpmCompatibilityLinks.description,
	...ResourceMpmCompatibilityLinksPostMpmCompatibilityLink.description,
	...ResourcePartDocAssociationsGetPartDocAssociation.description,
	...ResourcePartDocAssociationsGetPartDocAssociations.description,
	...ResourceReferencesGetResourceReferenceLink.description,
	...ResourceReferencesGetResourceReferenceLinks.description,
	...ResourceUsesDeletePtcProdMgmtPartUse.description,
	...ResourceUsesGetPartUse.description,
	...ResourceUsesGetPartUses.description,
	...ResourceUsesPostPartUse.description,
	...ResourceUsesUpdatePartUse.description,
	...SequenceAssignedOptionSetGetOptionSet.description,
	...SequenceContextGetContainer.description,
	...SequenceCreatorGetUser.description,
	...SequenceDocumentDescribeLinksGetDocumentDescribeLink.description,
	...SequenceDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...SequenceDocumentReferenceLinksGetDocumentReferenceLink.description,
	...SequenceDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...SequenceEffectivitiesGetEffectivity.description,
	...SequenceEffectivitiesGetEffectivitys.description,
	...SequenceModifierGetUser.description,
	...SequenceOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink.description,
	...SequenceOperationHolderUsageLinkGetOperationHolderUsageLink.description,
	...SequenceOperationHolderUsageLinkGetOperationHolderUsageLinks.description,
	...SequenceOperationUsageLinksGetOperationUsageLink.description,
	...SequenceOperationUsageLinksGetOperationUsageLinks.description,
	...SequenceResultedByObjectsGetChangeItem.description,
	...SequenceResultedByObjectsGetChangeItems.description,
	...SequenceRevisionsGetSequence.description,
	...SequenceRevisionsGetSequences.description,
	...SequenceStandardProcedureLinkGetStandardProcedureLink.description,
	...SequenceStandardProcedureLinkGetStandardProcedureLinks.description,
	...SequenceStandardProcedureLinkPostStandardProcedureLink.description,
	...SequenceVersionsGetSequence.description,
	...SequenceVersionsGetSequences.description,
	...SequenceHolderCreatorGetUser.description,
	...SequenceHolderDocumentDescribeLinksGetDocumentDescribeLink.description,
	...SequenceHolderDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...SequenceHolderDocumentReferenceLinksGetDocumentReferenceLink.description,
	...SequenceHolderDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...SequenceHolderModifierGetUser.description,
	...SequenceHolderSequenceUsageLinkGetSequenceUsageLink.description,
	...SequenceHolderSequenceUsageLinkGetSequenceUsageLinks.description,
	...SkillAssignedOptionSetGetOptionSet.description,
	...SkillContextGetContainer.description,
	...SkillCreatorGetUser.description,
	...SkillDescribedByGetResourceDescribeLink.description,
	...SkillDescribedByGetResourceDescribeLinks.description,
	...SkillEffectivitiesGetEffectivity.description,
	...SkillEffectivitiesGetEffectivitys.description,
	...SkillFolderGetFolder.description,
	...SkillModifierGetUser.description,
	...SkillMpmCompatibilityLinksGetMpmCompatibilityLink.description,
	...SkillMpmCompatibilityLinksGetMpmCompatibilityLinks.description,
	...SkillMpmCompatibilityLinksPostMpmCompatibilityLink.description,
	...SkillOrganizationGetOrganization.description,
	...SkillPartDocAssociationsGetPartDocAssociation.description,
	...SkillPartDocAssociationsGetPartDocAssociations.description,
	...SkillReferencesGetResourceReferenceLink.description,
	...SkillReferencesGetResourceReferenceLinks.description,
	...SkillResultedByObjectsGetChangeItem.description,
	...SkillResultedByObjectsGetChangeItems.description,
	...SkillRevisionsGetSkill.description,
	...SkillRevisionsGetSkills.description,
	...SkillUsesDeletePtcProdMgmtPartUse.description,
	...SkillUsesGetPartUse.description,
	...SkillUsesGetPartUses.description,
	...SkillUsesPostPartUse.description,
	...SkillUsesUpdatePartUse.description,
	...SkillVersionsGetSkill.description,
	...SkillVersionsGetSkills.description,
	...StandardCcContextGetContainer.description,
	...StandardCcCreatorGetUser.description,
	...StandardCcDocumentDescribeLinksGetDocumentDescribeLink.description,
	...StandardCcDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...StandardCcDocumentReferenceLinksGetDocumentReferenceLink.description,
	...StandardCcDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...StandardCcFolderGetFolder.description,
	...StandardCcModifierGetUser.description,
	...StandardCcOrganizationGetOrganization.description,
	...StandardCcResultedByObjectsGetChangeItem.description,
	...StandardCcResultedByObjectsGetChangeItems.description,
	...StandardCcRevisionsGetStandardCc.description,
	...StandardCcRevisionsGetStandardCCs.description,
	...StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLink.description,
	...StandardCcStandardCcToProcessPlanLinksGetStandardCcToProcessPlanLinks.description,
	...StandardCcStandardCcToResourceLinksGetStandardCcToResourceLink.description,
	...StandardCcStandardCcToResourceLinksGetStandardCcToResourceLinks.description,
	...StandardCcVersionsGetStandardCc.description,
	...StandardCcVersionsGetStandardCCs.description,
	...StandardProcedureAssignedOptionSetGetOptionSet.description,
	...StandardProcedureContextGetContainer.description,
	...StandardProcedureCreatorGetUser.description,
	...StandardProcedureDocumentDescribeLinksGetDocumentDescribeLink.description,
	...StandardProcedureDocumentDescribeLinksGetDocumentDescribeLinks.description,
	...StandardProcedureDocumentReferenceLinksGetDocumentReferenceLink.description,
	...StandardProcedureDocumentReferenceLinksGetDocumentReferenceLinks.description,
	...StandardProcedureEffectivitiesGetEffectivity.description,
	...StandardProcedureEffectivitiesGetEffectivitys.description,
	...StandardProcedureFolderGetFolder.description,
	...StandardProcedureModifierGetUser.description,
	...StandardProcedureOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLink.description,
	...StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLink.description,
	...StandardProcedureOperationHolderUsageLinkGetOperationHolderUsageLinks.description,
	...StandardProcedureOperationUsageLinksGetOperationUsageLink.description,
	...StandardProcedureOperationUsageLinksGetOperationUsageLinks.description,
	...StandardProcedureOrganizationGetOrganization.description,
	...StandardProcedureResultedByObjectsGetChangeItem.description,
	...StandardProcedureResultedByObjectsGetChangeItems.description,
	...StandardProcedureRevisionsGetProcessPlan.description,
	...StandardProcedureRevisionsGetProcessPlans.description,
	...StandardProcedureStandardProcedureLinkGetStandardProcedureLink.description,
	...StandardProcedureStandardProcedureLinkGetStandardProcedureLinks.description,
	...StandardProcedureStandardProcedureLinkPostStandardProcedureLink.description,
	...StandardProcedureVersionsGetProcessPlan.description,
	...StandardProcedureVersionsGetProcessPlans.description,
	...ToolingAssignedOptionSetGetOptionSet.description,
	...ToolingContextGetContainer.description,
	...ToolingCreatorGetUser.description,
	...ToolingDescribedByGetResourceDescribeLink.description,
	...ToolingDescribedByGetResourceDescribeLinks.description,
	...ToolingEffectivitiesGetEffectivity.description,
	...ToolingEffectivitiesGetEffectivitys.description,
	...ToolingFolderGetFolder.description,
	...ToolingModifierGetUser.description,
	...ToolingMpmCompatibilityLinksGetMpmCompatibilityLink.description,
	...ToolingMpmCompatibilityLinksGetMpmCompatibilityLinks.description,
	...ToolingMpmCompatibilityLinksPostMpmCompatibilityLink.description,
	...ToolingOrganizationGetOrganization.description,
	...ToolingPartDocAssociationsGetPartDocAssociation.description,
	...ToolingPartDocAssociationsGetPartDocAssociations.description,
	...ToolingReferencesGetResourceReferenceLink.description,
	...ToolingReferencesGetResourceReferenceLinks.description,
	...ToolingResultedByObjectsGetChangeItem.description,
	...ToolingResultedByObjectsGetChangeItems.description,
	...ToolingRevisionsGetTooling.description,
	...ToolingRevisionsGetToolings.description,
	...ToolingUsesDeletePtcProdMgmtPartUse.description,
	...ToolingUsesGetPartUse.description,
	...ToolingUsesGetPartUses.description,
	...ToolingUsesPostPartUse.description,
	...ToolingUsesUpdatePartUse.description,
	...ToolingVersionsGetTooling.description,
	...ToolingVersionsGetToolings.description,
	...UpdateOperation.description,
	...UpdateProcessMaterial.description,
	...UpdateProcessPlan.description,
	...UpdateSequence.description,
	...UpdateSkill.description,
	...UpdateStandardCc.description,
	...UpdateTooling.description,
	...UpdateWorkCenter.description,
	...WorkCenterAssignedOptionSetGetOptionSet.description,
	...WorkCenterContextGetContainer.description,
	...WorkCenterCreatorGetUser.description,
	...WorkCenterDescribedByGetResourceDescribeLink.description,
	...WorkCenterDescribedByGetResourceDescribeLinks.description,
	...WorkCenterEffectivitiesGetEffectivity.description,
	...WorkCenterEffectivitiesGetEffectivitys.description,
	...WorkCenterFolderGetFolder.description,
	...WorkCenterModifierGetUser.description,
	...WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLink.description,
	...WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLinks.description,
	...WorkCenterMpmCompatibilityLinksPostMpmCompatibilityLink.description,
	...WorkCenterOrganizationGetOrganization.description,
	...WorkCenterPartDocAssociationsGetPartDocAssociation.description,
	...WorkCenterPartDocAssociationsGetPartDocAssociations.description,
	...WorkCenterReferencesGetResourceReferenceLink.description,
	...WorkCenterReferencesGetResourceReferenceLinks.description,
	...WorkCenterResultedByObjectsGetChangeItem.description,
	...WorkCenterResultedByObjectsGetChangeItems.description,
	...WorkCenterRevisionsGetWorkCenter.description,
	...WorkCenterRevisionsGetWorkCenters.description,
	...WorkCenterUsesDeletePtcProdMgmtPartUse.description,
	...WorkCenterUsesGetPartUse.description,
	...WorkCenterUsesGetPartUses.description,
	...WorkCenterUsesPostPartUse.description,
	...WorkCenterUsesUpdatePartUse.description,
	...WorkCenterVersionsGetWorkCenter.description,
	...WorkCenterVersionsGetWorkCenters.description,
];
