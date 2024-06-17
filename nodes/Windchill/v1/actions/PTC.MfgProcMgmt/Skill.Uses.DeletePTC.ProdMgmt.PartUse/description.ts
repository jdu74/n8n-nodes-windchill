import { INodeProperties } from "n8n-workflow";

export const SkillUsesDeletePtcProdMgmtPartUseDescription: INodeProperties[] = [
	{
		displayName: 'SkillId',
		name: 'SkillId-string(path)',
		description: 'Skill ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Skills('{SkillId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Skills('{SkillId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
];
