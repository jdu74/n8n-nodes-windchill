import * as ActionCheckInVariantSpecifications from './Action_CheckInVariantSpecifications';
import * as ActionCheckOutVariantSpecifications from './Action_CheckOutVariantSpecifications';
import * as ActionGetAssignedExpressions from './Action_GetAssignedExpressions';
import * as ActionGetAssignedOptionSets from './Action_GetAssignedOptionSets';
import * as ActionGetVariantSpecificationsLinkedFromMvil from './Action_GetVariantSpecificationsLinkedFromMVIL';
import * as ActionReviseOptionSets from './Action_ReviseOptionSets';
import * as ActionReviseVariantSpecifications from './Action_ReviseVariantSpecifications';
import * as ActionSetStateChoices from './Action_SetStateChoices';
import * as ActionSetStateOptionSets from './Action_SetStateOptionSets';
import * as ActionSetStateVariantSpecifications from './Action_SetStateVariantSpecifications';
import * as ActionUndoCheckOutVariantSpecifications from './Action_UndoCheckOutVariantSpecifications';
import * as ChoiceContextGetContainer from './Choice.Context.GetContainer';
import * as ChoiceCreatorGetUser from './Choice.Creator.GetUser';
import * as ChoiceModifierGetUser from './Choice.Modifier.GetUser';
import * as ChoiceOptionGetOption from './Choice.Option.GetOption';
import * as GetChoice from './GetChoice';
import * as GetChoices from './GetChoices';
import * as GetDesignChoices from './GetDesignChoices';
import * as GetDesignOptions from './GetDesignOptions';
import * as GetOption from './GetOption';
import * as GetOptions from './GetOptions';
import * as GetOptionSet from './GetOptionSet';
import * as GetOptionSets from './GetOptionSets';
import * as GetSalesChoices from './GetSalesChoices';
import * as GetSalesOptions from './GetSalesOptions';
import * as GetVariantSpecification from './GetVariantSpecification';
import * as GetVariantSpecifications from './GetVariantSpecifications';
import * as OptionChoicesGetChoice from './Option.Choices.GetChoice';
import * as OptionChoicesGetChoices from './Option.Choices.GetChoices';
import * as OptionContextGetContainer from './Option.Context.GetContainer';
import * as OptionCreatorGetUser from './Option.Creator.GetUser';
import * as OptionModifierGetUser from './Option.Modifier.GetUser';
import * as OptionOptionGroupGetOptionGroup from './Option.OptionGroup.GetOptionGroup';
import * as OptionSetContextGetContainer from './OptionSet.Context.GetContainer';
import * as OptionSetCreatorGetUser from './OptionSet.Creator.GetUser';
import * as OptionSetModifierGetUser from './OptionSet.Modifier.GetUser';
import * as OptionSetOptionsGetOption from './OptionSet.Options.GetOption';
import * as OptionSetOptionsGetOptions from './OptionSet.Options.GetOptions';
import * as OptionSetRevisionsGetOptionSet from './OptionSet.Revisions.GetOptionSet';
import * as OptionSetRevisionsGetOptionSets from './OptionSet.Revisions.GetOptionSets';
import * as OptionSetVersionsGetOptionSet from './OptionSet.Versions.GetOptionSet';
import * as OptionSetVersionsGetOptionSets from './OptionSet.Versions.GetOptionSets';
import * as PtcProdPlatformMgmtChoiceActionSetStateWith from './PTC.ProdPlatformMgmt.Choice.Action_SetState_With';
import * as PtcProdPlatformMgmtChoiceFunctionGetLifeCycleTemplate from './PTC.ProdPlatformMgmt.Choice.Function_GetLifeCycleTemplate';
import * as PtcProdPlatformMgmtChoiceFunctionGetValidStateTransitions from './PTC.ProdPlatformMgmt.Choice.Function_GetValidStateTransitions';
import * as PtcProdPlatformMgmtOptionSetActionReviseWith from './PTC.ProdPlatformMgmt.OptionSet.Action_Revise_With';
import * as PtcProdPlatformMgmtOptionSetActionSetStateWith from './PTC.ProdPlatformMgmt.OptionSet.Action_SetState_With';
import * as PtcProdPlatformMgmtOptionSetFunctionGetAllVariantSpecifications from './PTC.ProdPlatformMgmt.OptionSet.Function_GetAllVariantSpecifications';
import * as PtcProdPlatformMgmtOptionSetFunctionGetLifeCycleTemplate from './PTC.ProdPlatformMgmt.OptionSet.Function_GetLifeCycleTemplate';
import * as PtcProdPlatformMgmtOptionSetFunctionGetValidStateTransitions from './PTC.ProdPlatformMgmt.OptionSet.Function_GetValidStateTransitions';
import * as PtcProdPlatformMgmtVariantSpecificationActionCheckInWithCheckOutNoteKeepCheckedOut from './PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckIn_With_CheckOutNote_KeepCheckedOut';
import * as PtcProdPlatformMgmtVariantSpecificationActionCheckOutWith from './PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckOut_With';
import * as PtcProdPlatformMgmtVariantSpecificationActionReviseWith from './PTC.ProdPlatformMgmt.VariantSpecification.Action_Revise_With';
import * as PtcProdPlatformMgmtVariantSpecificationActionSetStateWith from './PTC.ProdPlatformMgmt.VariantSpecification.Action_SetState_With';
import * as PtcProdPlatformMgmtVariantSpecificationActionUndoCheckOut from './PTC.ProdPlatformMgmt.VariantSpecification.Action_UndoCheckOut';
import * as PtcProdPlatformMgmtVariantSpecificationFunctionGetLifeCycleTemplate from './PTC.ProdPlatformMgmt.VariantSpecification.Function_GetLifeCycleTemplate';
import * as PtcProdPlatformMgmtVariantSpecificationFunctionGetValidStateTransitions from './PTC.ProdPlatformMgmt.VariantSpecification.Function_GetValidStateTransitions';
import * as PtcProdPlatformMgmtVariantSpecificationFunctionIsCheckoutAllowed from './PTC.ProdPlatformMgmt.VariantSpecification.Function_IsCheckoutAllowed';
import * as VariantSpecificationConfigurableModuleGetPart from './VariantSpecification.ConfigurableModule.GetPart';
import * as VariantSpecificationContextGetContainer from './VariantSpecification.Context.GetContainer';
import * as VariantSpecificationCreatorGetUser from './VariantSpecification.Creator.GetUser';
import * as VariantSpecificationModifierGetUser from './VariantSpecification.Modifier.GetUser';
import * as VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLink from './VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLink';
import * as VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLinks from './VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLinks';
import * as VariantSpecificationNavigationCriteriaGetNavigationCriteria from './VariantSpecification.NavigationCriteria.GetNavigationCriteria';
import * as VariantSpecificationOptionSetGetOptionSet from './VariantSpecification.OptionSet.GetOptionSet';
import * as VariantSpecificationPrimaryContentGetContentItem from './VariantSpecification.PrimaryContent.GetContentItem';
import * as VariantSpecificationRevisionsGetVariantSpecification from './VariantSpecification.Revisions.GetVariantSpecification';
import * as VariantSpecificationRevisionsGetVariantSpecifications from './VariantSpecification.Revisions.GetVariantSpecifications';
import * as VariantSpecificationVersionsGetVariantSpecification from './VariantSpecification.Versions.GetVariantSpecification';
import * as VariantSpecificationVersionsGetVariantSpecifications from './VariantSpecification.Versions.GetVariantSpecifications';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCheckInVariantSpecifications,
	ActionCheckOutVariantSpecifications,
	ActionGetAssignedExpressions,
	ActionGetAssignedOptionSets,
	ActionGetVariantSpecificationsLinkedFromMvil,
	ActionReviseOptionSets,
	ActionReviseVariantSpecifications,
	ActionSetStateChoices,
	ActionSetStateOptionSets,
	ActionSetStateVariantSpecifications,
	ActionUndoCheckOutVariantSpecifications,
	ChoiceContextGetContainer,
	ChoiceCreatorGetUser,
	ChoiceModifierGetUser,
	ChoiceOptionGetOption,
	GetChoice,
	GetChoices,
	GetDesignChoices,
	GetDesignOptions,
	GetOption,
	GetOptions,
	GetOptionSet,
	GetOptionSets,
	GetSalesChoices,
	GetSalesOptions,
	GetVariantSpecification,
	GetVariantSpecifications,
	OptionChoicesGetChoice,
	OptionChoicesGetChoices,
	OptionContextGetContainer,
	OptionCreatorGetUser,
	OptionModifierGetUser,
	OptionOptionGroupGetOptionGroup,
	OptionSetContextGetContainer,
	OptionSetCreatorGetUser,
	OptionSetModifierGetUser,
	OptionSetOptionsGetOption,
	OptionSetOptionsGetOptions,
	OptionSetRevisionsGetOptionSet,
	OptionSetRevisionsGetOptionSets,
	OptionSetVersionsGetOptionSet,
	OptionSetVersionsGetOptionSets,
	PtcProdPlatformMgmtChoiceActionSetStateWith,
	PtcProdPlatformMgmtChoiceFunctionGetLifeCycleTemplate,
	PtcProdPlatformMgmtChoiceFunctionGetValidStateTransitions,
	PtcProdPlatformMgmtOptionSetActionReviseWith,
	PtcProdPlatformMgmtOptionSetActionSetStateWith,
	PtcProdPlatformMgmtOptionSetFunctionGetAllVariantSpecifications,
	PtcProdPlatformMgmtOptionSetFunctionGetLifeCycleTemplate,
	PtcProdPlatformMgmtOptionSetFunctionGetValidStateTransitions,
	PtcProdPlatformMgmtVariantSpecificationActionCheckInWithCheckOutNoteKeepCheckedOut,
	PtcProdPlatformMgmtVariantSpecificationActionCheckOutWith,
	PtcProdPlatformMgmtVariantSpecificationActionReviseWith,
	PtcProdPlatformMgmtVariantSpecificationActionSetStateWith,
	PtcProdPlatformMgmtVariantSpecificationActionUndoCheckOut,
	PtcProdPlatformMgmtVariantSpecificationFunctionGetLifeCycleTemplate,
	PtcProdPlatformMgmtVariantSpecificationFunctionGetValidStateTransitions,
	PtcProdPlatformMgmtVariantSpecificationFunctionIsCheckoutAllowed,
	VariantSpecificationConfigurableModuleGetPart,
	VariantSpecificationContextGetContainer,
	VariantSpecificationCreatorGetUser,
	VariantSpecificationModifierGetUser,
	VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLink,
	VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLinks,
	VariantSpecificationNavigationCriteriaGetNavigationCriteria,
	VariantSpecificationOptionSetGetOptionSet,
	VariantSpecificationPrimaryContentGetContentItem,
	VariantSpecificationRevisionsGetVariantSpecification,
	VariantSpecificationRevisionsGetVariantSpecifications,
	VariantSpecificationVersionsGetVariantSpecification,
	VariantSpecificationVersionsGetVariantSpecifications,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v4/ProdPlatformMgmt',
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
					'PTC.ProdPlatformMgmt',
				],
			},
		},
		default: 'POST /CheckInVariantSpecifications',
		options: [
			{
				name: 'Action_CheckInVariantSpecifications',
				value: 'POST /CheckInVariantSpecifications',
				description: 'Execute CheckInVariantSpecifications - post /CheckInVariantSpecifications',
				action: 'Action_CheckInVariantSpecifications',
			},
			{
				name: 'Action_CheckOutVariantSpecifications',
				value: 'POST /CheckOutVariantSpecifications',
				description: 'Execute CheckOutVariantSpecifications - post /CheckOutVariantSpecifications',
				action: 'Action_CheckOutVariantSpecifications',
			},
			{
				name: 'Action_GetAssignedExpressions',
				value: 'POST /GetAssignedExpressions',
				description: 'Returns assigned expression data for a collection of ExpressionAssignable entities - post /GetAssignedExpressions',
				action: 'Action_GetAssignedExpressions',
			},
			{
				name: 'Action_GetAssignedOptionSets',
				value: 'POST /GetAssignedOptionSets',
				description: 'Execute GetAssignedOptionSets - post /GetAssignedOptionSets',
				action: 'Action_GetAssignedOptionSets',
			},
			{
				name: 'Action_GetVariantSpecificationsLinkedFromMVIL',
				value: 'POST /GetVariantSpecificationsLinkedFromMVIL',
				description: 'Get all VariantSpecifications linked from Module Variant Information Links for a given set of Parts. - post /GetVariantSpecificationsLinkedFromMVIL',
				action: 'Action_GetVariantSpecificationsLinkedFromMVIL',
			},
			{
				name: 'Action_ReviseOptionSets',
				value: 'POST /ReviseOptionSets',
				description: 'Execute ReviseOptionSets - post /ReviseOptionSets',
				action: 'Action_ReviseOptionSets',
			},
			{
				name: 'Action_ReviseVariantSpecifications',
				value: 'POST /ReviseVariantSpecifications',
				description: 'Execute ReviseVariantSpecifications - post /ReviseVariantSpecifications',
				action: 'Action_ReviseVariantSpecifications',
			},
			{
				name: 'Action_SetStateChoices',
				value: 'POST /SetStateChoices',
				description: 'Execute SetStateChoices - post /SetStateChoices',
				action: 'Action_SetStateChoices',
			},
			{
				name: 'Action_SetStateOptionSets',
				value: 'POST /SetStateOptionSets',
				description: 'Execute SetStateOptionSets - post /SetStateOptionSets',
				action: 'Action_SetStateOptionSets',
			},
			{
				name: 'Action_SetStateVariantSpecifications',
				value: 'POST /SetStateVariantSpecifications',
				description: 'Execute SetStateVariantSpecifications - post /SetStateVariantSpecifications',
				action: 'Action_SetStateVariantSpecifications',
			},
			{
				name: 'Action_UndoCheckOutVariantSpecifications',
				value: 'POST /UndoCheckOutVariantSpecifications',
				description: 'Execute UndoCheckOutVariantSpecifications - post /UndoCheckOutVariantSpecifications',
				action: 'Action_UndoCheckOutVariantSpecifications',
			},
			{
				name: 'Choice.Context.GetContainer',
				value: "GET /Choices('{ChoiceId}')/Context",
				description: "Get Container - get /Choices('{ChoiceId}')/Context",
				action: 'Choice.Context.GetContainer',
			},
			{
				name: 'Choice.Creator.GetUser',
				value: "GET /Choices('{ChoiceId}')/Creator",
				description: "Get User - get /Choices('{ChoiceId}')/Creator",
				action: 'Choice.Creator.GetUser',
			},
			{
				name: 'Choice.Modifier.GetUser',
				value: "GET /Choices('{ChoiceId}')/Modifier",
				description: "Get User - get /Choices('{ChoiceId}')/Modifier",
				action: 'Choice.Modifier.GetUser',
			},
			{
				name: 'Choice.Option.GetOption',
				value: "GET /Choices('{ChoiceId}')/Option",
				description: "Get Option - get /Choices('{ChoiceId}')/Option",
				action: 'Choice.Option.GetOption',
			},
			{
				name: 'GetChoice',
				value: "GET /Choices('{ChoiceId}')",
				description: "Get Choice for a given ChoiceId - get /Choices('{ChoiceId}')",
				action: 'GetChoice',
			},
			{
				name: 'GetChoices',
				value: 'GET /Choices',
				description: 'Get Choices - get /Choices',
				action: 'GetChoices',
			},
			{
				name: 'GetDesignChoices',
				value: 'GET /Choices/PTC.ProdPlatformMgmt.DesignChoice',
				description: 'Get Choices of type DesignChoice - get /Choices/PTC.ProdPlatformMgmt.DesignChoice',
				action: 'GetDesignChoices',
			},
			{
				name: 'GetDesignOptions',
				value: 'GET /Options/PTC.ProdPlatformMgmt.DesignOption',
				description: 'Get Options of type DesignOption - get /Options/PTC.ProdPlatformMgmt.DesignOption',
				action: 'GetDesignOptions',
			},
			{
				name: 'GetOption',
				value: "GET /Options('{OptionId}')",
				description: "Get Option for a given OptionId - get /Options('{OptionId}')",
				action: 'GetOption',
			},
			{
				name: 'GetOptions',
				value: 'GET /Options',
				description: 'Get Options - get /Options',
				action: 'GetOptions',
			},
			{
				name: 'GetOptionSet',
				value: "GET /OptionSets('{OptionSetId}')",
				description: "Get OptionSet for a given OptionSetId - get /OptionSets('{OptionSetId}')",
				action: 'GetOptionSet',
			},
			{
				name: 'GetOptionSets',
				value: 'GET /OptionSets',
				description: 'Get OptionSets - get /OptionSets',
				action: 'GetOptionSets',
			},
			{
				name: 'GetSalesChoices',
				value: 'GET /Choices/PTC.ProdPlatformMgmt.SalesChoice',
				description: 'Get Choices of type SalesChoice - get /Choices/PTC.ProdPlatformMgmt.SalesChoice',
				action: 'GetSalesChoices',
			},
			{
				name: 'GetSalesOptions',
				value: 'GET /Options/PTC.ProdPlatformMgmt.SalesOption',
				description: 'Get Options of type SalesOption - get /Options/PTC.ProdPlatformMgmt.SalesOption',
				action: 'GetSalesOptions',
			},
			{
				name: 'GetVariantSpecification',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')",
				description: "Get VariantSpecification for a given VariantSpecificationId - get /VariantSpecifications('{VariantSpecificationId}')",
				action: 'GetVariantSpecification',
			},
			{
				name: 'GetVariantSpecifications',
				value: 'GET /VariantSpecifications',
				description: 'Get VariantSpecifications - get /VariantSpecifications',
				action: 'GetVariantSpecifications',
			},
			{
				name: 'Option.Choices.GetChoice',
				value: "GET /Options('{OptionId}')/Choices('{ChoiceId}')",
				description: "Get Choice for a given ChoiceId - get /Options('{OptionId}')/Choices('{ChoiceId}')",
				action: 'Option.Choices.GetChoice',
			},
			{
				name: 'Option.Choices.GetChoices',
				value: "GET /Options('{OptionId}')/Choices",
				description: "Get Choice - get /Options('{OptionId}')/Choices",
				action: 'Option.Choices.GetChoices',
			},
			{
				name: 'Option.Context.GetContainer',
				value: "GET /Options('{OptionId}')/Context",
				description: "Get Container - get /Options('{OptionId}')/Context",
				action: 'Option.Context.GetContainer',
			},
			{
				name: 'Option.Creator.GetUser',
				value: "GET /Options('{OptionId}')/Creator",
				description: "Get User - get /Options('{OptionId}')/Creator",
				action: 'Option.Creator.GetUser',
			},
			{
				name: 'Option.Modifier.GetUser',
				value: "GET /Options('{OptionId}')/Modifier",
				description: "Get User - get /Options('{OptionId}')/Modifier",
				action: 'Option.Modifier.GetUser',
			},
			{
				name: 'Option.OptionGroup.GetOptionGroup',
				value: "GET /Options('{OptionId}')/OptionGroup",
				description: "Get OptionGroup - get /Options('{OptionId}')/OptionGroup",
				action: 'Option.OptionGroup.GetOptionGroup',
			},
			{
				name: 'OptionSet.Context.GetContainer',
				value: "GET /OptionSets('{OptionSetId}')/Context",
				description: "Get Container - get /OptionSets('{OptionSetId}')/Context",
				action: 'OptionSet.Context.GetContainer',
			},
			{
				name: 'OptionSet.Creator.GetUser',
				value: "GET /OptionSets('{OptionSetId}')/Creator",
				description: "Get User - get /OptionSets('{OptionSetId}')/Creator",
				action: 'OptionSet.Creator.GetUser',
			},
			{
				name: 'OptionSet.Modifier.GetUser',
				value: "GET /OptionSets('{OptionSetId}')/Modifier",
				description: "Get User - get /OptionSets('{OptionSetId}')/Modifier",
				action: 'OptionSet.Modifier.GetUser',
			},
			{
				name: 'OptionSet.Options.GetOption',
				value: "GET /OptionSets('{OptionSetId}')/Options('{OptionId}')",
				description: "Get Option for a given OptionId - get /OptionSets('{OptionSetId}')/Options('{OptionId}')",
				action: 'OptionSet.Options.GetOption',
			},
			{
				name: 'OptionSet.Options.GetOptions',
				value: "GET /OptionSets('{OptionSetId}')/Options",
				description: "Get Option - get /OptionSets('{OptionSetId}')/Options",
				action: 'OptionSet.Options.GetOptions',
			},
			{
				name: 'OptionSet.Revisions.GetOptionSet',
				value: "GET /OptionSets('{OptionSetId}')/Revisions('{RevisionsId}')",
				description: "Get OptionSet for a given RevisionsId - get /OptionSets('{OptionSetId}')/Revisions('{RevisionsId}')",
				action: 'OptionSet.Revisions.GetOptionSet',
			},
			{
				name: 'OptionSet.Revisions.GetOptionSets',
				value: "GET /OptionSets('{OptionSetId}')/Revisions",
				description: "Get OptionSet - get /OptionSets('{OptionSetId}')/Revisions",
				action: 'OptionSet.Revisions.GetOptionSets',
			},
			{
				name: 'OptionSet.Versions.GetOptionSet',
				value: "GET /OptionSets('{OptionSetId}')/Versions('{VersionsId}')",
				description: "Get OptionSet for a given VersionsId - get /OptionSets('{OptionSetId}')/Versions('{VersionsId}')",
				action: 'OptionSet.Versions.GetOptionSet',
			},
			{
				name: 'OptionSet.Versions.GetOptionSets',
				value: "GET /OptionSets('{OptionSetId}')/Versions",
				description: "Get OptionSet - get /OptionSets('{OptionSetId}')/Versions",
				action: 'OptionSet.Versions.GetOptionSets',
			},
			{
				name: 'PTC.ProdPlatformMgmt.Choice.Action_SetState_With',
				value: "POST /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.SetState",
				description: "Execute SetState - post /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.SetState",
				action: 'PTC.ProdPlatformMgmt.Choice.Action_SetState_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.Choice.Function_GetLifeCycleTemplate',
				value: "GET /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ProdPlatformMgmt.Choice.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ProdPlatformMgmt.Choice.Function_GetValidStateTransitions',
				value: "GET /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				action: 'PTC.ProdPlatformMgmt.Choice.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ProdPlatformMgmt.OptionSet.Action_Revise_With',
				value: "POST /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.Revise",
				description: "Execute Revise - post /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.Revise",
				action: 'PTC.ProdPlatformMgmt.OptionSet.Action_Revise_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.OptionSet.Action_SetState_With',
				value: "POST /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.SetState",
				description: "Execute SetState - post /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.SetState",
				action: 'PTC.ProdPlatformMgmt.OptionSet.Action_SetState_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetAllVariantSpecifications',
				value: "GET /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetAllVariantSpecifications()",
				description: "Execute GetAllVariantSpecifications - get /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetAllVariantSpecifications()",
				action: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetAllVariantSpecifications',
			},
			{
				name: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetLifeCycleTemplate',
				value: "GET /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetValidStateTransitions',
				value: "GET /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /OptionSets('{OptionSetId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				action: 'PTC.ProdPlatformMgmt.OptionSet.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
				value: "POST /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.CheckIn",
				description: "Execute CheckIn - post /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.CheckIn",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckIn_With_CheckOutNote_KeepCheckedOut',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckOut_With',
				value: "POST /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.CheckOut",
				description: "Execute CheckOut - post /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.CheckOut",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_CheckOut_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_Revise_With',
				value: "POST /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.Revise",
				description: "Execute Revise - post /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.Revise",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_Revise_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_SetState_With',
				value: "POST /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.SetState",
				description: "Execute SetState - post /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.SetState",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_SetState_With',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_UndoCheckOut',
				value: "POST /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.UndoCheckOut",
				description: "Execute UndoCheckOut - post /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.UndoCheckOut",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Action_UndoCheckOut',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_GetLifeCycleTemplate',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_GetValidStateTransitions',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_IsCheckoutAllowed',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.IsCheckoutAllowed()",
				description: "Execute IsCheckoutAllowed - get /VariantSpecifications('{VariantSpecificationId}')/PTC.ProdPlatformMgmt.IsCheckoutAllowed()",
				action: 'PTC.ProdPlatformMgmt.VariantSpecification.Function_IsCheckoutAllowed',
			},
			{
				name: 'VariantSpecification.ConfigurableModule.GetPart',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/ConfigurableModule",
				description: "Get Part - get /VariantSpecifications('{VariantSpecificationId}')/ConfigurableModule",
				action: 'VariantSpecification.ConfigurableModule.GetPart',
			},
			{
				name: 'VariantSpecification.Context.GetContainer',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Context",
				description: "Get Container - get /VariantSpecifications('{VariantSpecificationId}')/Context",
				action: 'VariantSpecification.Context.GetContainer',
			},
			{
				name: 'VariantSpecification.Creator.GetUser',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Creator",
				description: "Get User - get /VariantSpecifications('{VariantSpecificationId}')/Creator",
				action: 'VariantSpecification.Creator.GetUser',
			},
			{
				name: 'VariantSpecification.Modifier.GetUser',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Modifier",
				description: "Get User - get /VariantSpecifications('{VariantSpecificationId}')/Modifier",
				action: 'VariantSpecification.Modifier.GetUser',
			},
			{
				name: 'VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /VariantSpecifications('{VariantSpecificationId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: 'VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
			},
			{
				name: 'VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /VariantSpecifications('{VariantSpecificationId}')/ModuleVariantInformationLinks",
				action: 'VariantSpecification.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
			},
			{
				name: 'VariantSpecification.NavigationCriteria.GetNavigationCriteria',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/NavigationCriteria",
				description: "Get NavigationCriteria - get /VariantSpecifications('{VariantSpecificationId}')/NavigationCriteria",
				action: 'VariantSpecification.NavigationCriteria.GetNavigationCriteria',
			},
			{
				name: 'VariantSpecification.OptionSet.GetOptionSet',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/OptionSet",
				description: "Get OptionSet - get /VariantSpecifications('{VariantSpecificationId}')/OptionSet",
				action: 'VariantSpecification.OptionSet.GetOptionSet',
			},
			{
				name: 'VariantSpecification.PrimaryContent.GetContentItem',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/PrimaryContent",
				description: "Get ContentItem - get /VariantSpecifications('{VariantSpecificationId}')/PrimaryContent",
				action: 'VariantSpecification.PrimaryContent.GetContentItem',
			},
			{
				name: 'VariantSpecification.Revisions.GetVariantSpecification',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Revisions('{RevisionsId}')",
				description: "Get VariantSpecification for a given RevisionsId - get /VariantSpecifications('{VariantSpecificationId}')/Revisions('{RevisionsId}')",
				action: 'VariantSpecification.Revisions.GetVariantSpecification',
			},
			{
				name: 'VariantSpecification.Revisions.GetVariantSpecifications',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Revisions",
				description: "Get VariantSpecification - get /VariantSpecifications('{VariantSpecificationId}')/Revisions",
				action: 'VariantSpecification.Revisions.GetVariantSpecifications',
			},
			{
				name: 'VariantSpecification.Versions.GetVariantSpecification',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Versions('{VersionsId}')",
				description: "Get VariantSpecification for a given VersionsId - get /VariantSpecifications('{VariantSpecificationId}')/Versions('{VersionsId}')",
				action: 'VariantSpecification.Versions.GetVariantSpecification',
			},
			{
				name: 'VariantSpecification.Versions.GetVariantSpecifications',
				value: "GET /VariantSpecifications('{VariantSpecificationId}')/Versions",
				description: "Get VariantSpecification - get /VariantSpecifications('{VariantSpecificationId}')/Versions",
				action: 'VariantSpecification.Versions.GetVariantSpecifications',
			},
		],
	},
	...ActionCheckInVariantSpecifications.description,
	...ActionCheckOutVariantSpecifications.description,
	...ActionGetAssignedExpressions.description,
	...ActionGetAssignedOptionSets.description,
	...ActionGetVariantSpecificationsLinkedFromMvil.description,
	...ActionReviseOptionSets.description,
	...ActionReviseVariantSpecifications.description,
	...ActionSetStateChoices.description,
	...ActionSetStateOptionSets.description,
	...ActionSetStateVariantSpecifications.description,
	...ActionUndoCheckOutVariantSpecifications.description,
	...ChoiceContextGetContainer.description,
	...ChoiceCreatorGetUser.description,
	...ChoiceModifierGetUser.description,
	...ChoiceOptionGetOption.description,
	...GetChoice.description,
	...GetChoices.description,
	...GetDesignChoices.description,
	...GetDesignOptions.description,
	...GetOption.description,
	...GetOptions.description,
	...GetOptionSet.description,
	...GetOptionSets.description,
	...GetSalesChoices.description,
	...GetSalesOptions.description,
	...GetVariantSpecification.description,
	...GetVariantSpecifications.description,
	...OptionChoicesGetChoice.description,
	...OptionChoicesGetChoices.description,
	...OptionContextGetContainer.description,
	...OptionCreatorGetUser.description,
	...OptionModifierGetUser.description,
	...OptionOptionGroupGetOptionGroup.description,
	...OptionSetContextGetContainer.description,
	...OptionSetCreatorGetUser.description,
	...OptionSetModifierGetUser.description,
	...OptionSetOptionsGetOption.description,
	...OptionSetOptionsGetOptions.description,
	...OptionSetRevisionsGetOptionSet.description,
	...OptionSetRevisionsGetOptionSets.description,
	...OptionSetVersionsGetOptionSet.description,
	...OptionSetVersionsGetOptionSets.description,
	...PtcProdPlatformMgmtChoiceActionSetStateWith.description,
	...PtcProdPlatformMgmtChoiceFunctionGetLifeCycleTemplate.description,
	...PtcProdPlatformMgmtChoiceFunctionGetValidStateTransitions.description,
	...PtcProdPlatformMgmtOptionSetActionReviseWith.description,
	...PtcProdPlatformMgmtOptionSetActionSetStateWith.description,
	...PtcProdPlatformMgmtOptionSetFunctionGetAllVariantSpecifications.description,
	...PtcProdPlatformMgmtOptionSetFunctionGetLifeCycleTemplate.description,
	...PtcProdPlatformMgmtOptionSetFunctionGetValidStateTransitions.description,
	...PtcProdPlatformMgmtVariantSpecificationActionCheckInWithCheckOutNoteKeepCheckedOut.description,
	...PtcProdPlatformMgmtVariantSpecificationActionCheckOutWith.description,
	...PtcProdPlatformMgmtVariantSpecificationActionReviseWith.description,
	...PtcProdPlatformMgmtVariantSpecificationActionSetStateWith.description,
	...PtcProdPlatformMgmtVariantSpecificationActionUndoCheckOut.description,
	...PtcProdPlatformMgmtVariantSpecificationFunctionGetLifeCycleTemplate.description,
	...PtcProdPlatformMgmtVariantSpecificationFunctionGetValidStateTransitions.description,
	...PtcProdPlatformMgmtVariantSpecificationFunctionIsCheckoutAllowed.description,
	...VariantSpecificationConfigurableModuleGetPart.description,
	...VariantSpecificationContextGetContainer.description,
	...VariantSpecificationCreatorGetUser.description,
	...VariantSpecificationModifierGetUser.description,
	...VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLink.description,
	...VariantSpecificationModuleVariantInformationLinksGetModuleVariantInformationLinks.description,
	...VariantSpecificationNavigationCriteriaGetNavigationCriteria.description,
	...VariantSpecificationOptionSetGetOptionSet.description,
	...VariantSpecificationPrimaryContentGetContentItem.description,
	...VariantSpecificationRevisionsGetVariantSpecification.description,
	...VariantSpecificationRevisionsGetVariantSpecifications.description,
	...VariantSpecificationVersionsGetVariantSpecification.description,
	...VariantSpecificationVersionsGetVariantSpecifications.description,
];
