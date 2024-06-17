import { INodeProperties } from "n8n-workflow";

export const PtcProdPlatformMgmtChoiceFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
	{
		displayName: 'ChoiceId',
		name: 'ChoiceId-string(path)',
		description: 'Choice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /Choices('{ChoiceId}')/PTC.ProdPlatformMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
